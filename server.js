// ================================
//  ImpostorX - Socket.IO Server
// ================================

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

// -------------------------------
// CONFIGURACIÓN BASE
// -------------------------------
const app = express();
const PORT = process.env.PORT || 3000; // Render asigna su propio puerto automáticamente
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// Endpoint de verificación
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "🚀 ImpostorX Socket.IO server is running successfully.",
  });
});

// -------------------------------
// SERVIDOR HTTP + SOCKET.IO
// -------------------------------
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});

// -------------------------------
// GESTIÓN DE SALAS
// -------------------------------
const ACTIVE_ROOMS = new Map();
const SOCKET_ROOMS = new Map();
const CODE_LENGTH = 4;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateRoomCode() {
  let code = "";
  do {
    code = Array.from({ length: CODE_LENGTH }, () => LETTERS.charAt(Math.floor(Math.random() * LETTERS.length))).join("");
  } while (ACTIVE_ROOMS.has(code));
  return code;
}

function createRoom(hostSocket, nombreHost) {
  const code = generateRoomCode();
  const roomInfo = {
    hostId: hostSocket.id,
    nombreHost: nombreHost || null,
    sockets: new Set([hostSocket.id]),
    createdAt: Date.now(),
  };
  ACTIVE_ROOMS.set(code, roomInfo);
  SOCKET_ROOMS.set(hostSocket.id, code);
  hostSocket.join(code);
  return { code, roomInfo };
}

function joinRoom(socket, code, nombreJugador) {
  const roomInfo = ACTIVE_ROOMS.get(code);
  if (!roomInfo) throw new Error("Sala inexistente");
  roomInfo.sockets.add(socket.id);
  SOCKET_ROOMS.set(socket.id, code);
  socket.join(code);
  return {
    code,
    roomInfo,
    jugador: {
      id: socket.id,
      nombre: nombreJugador || null,
    },
  };
}

function leaveRoom(socket) {
  const code = SOCKET_ROOMS.get(socket.id);
  if (!code) return null;
  const roomInfo = ACTIVE_ROOMS.get(code);
  socket.leave(code);
  SOCKET_ROOMS.delete(socket.id);
  if (!roomInfo) return { code };

  roomInfo.sockets.delete(socket.id);
  const payload = { code, jugadorId: socket.id };

  if (roomInfo.sockets.size === 0) {
    ACTIVE_ROOMS.delete(code);
    io.to(code).emit("salaCerrada", {
      code,
      motivo: "Sala sin jugadores activos",
    });
    roomInfo.sockets.clear();
  } else if (roomInfo.hostId === socket.id) {
    ACTIVE_ROOMS.delete(code);
    io.to(code).emit("salaCerrada", {
      code,
      motivo: "El anfitrión abandonó la sala",
    });
    for (const id of roomInfo.sockets) {
      SOCKET_ROOMS.delete(id);
      const peer = io.sockets.sockets.get(id);
      peer?.leave(code);
    }
    roomInfo.sockets.clear();
  } else {
    io.to(code).emit("salir", payload);
  }

  return payload;
}

// -------------------------------
// EVENTOS DE SOCKET.IO
// -------------------------------
io.on("connection", (socket) => {
  console.log(`🟢 Socket conectado: ${socket.id}`);

  socket.on("crearSala", ({ nombre }) => {
    try {
      leaveRoom(socket);
      const { code, roomInfo } = createRoom(socket, nombre);
      socket.emit("salaCreada", {
        codigo: code,
        hostId: roomInfo.hostId,
        nombreHost: roomInfo.nombreHost,
      });
      console.log(`🎮 Sala ${code} creada por ${socket.id}`);
    } catch (error) {
      socket.emit("errorSala", { mensaje: error.message });
    }
  });

  socket.on("unirseSala", ({ codigo, nombre }) => {
    try {
      leaveRoom(socket);
      const { jugador } = joinRoom(socket, codigo, nombre);
      io.to(codigo).emit("jugadorUnido", { codigo, jugador });
      console.log(`👥 Socket ${socket.id} se unió a ${codigo}`);
    } catch (error) {
      socket.emit("errorSala", { mensaje: error.message });
    }
  });

  socket.on("enviarMensaje", ({ codigo, mensaje, autor }) => {
    if (!codigo || !mensaje) return;
    if (!ACTIVE_ROOMS.has(codigo)) {
      socket.emit("errorSala", { mensaje: "La sala no existe" });
      return;
    }
    const payload = {
      codigo,
      autor: autor || null,
      mensaje,
      timestamp: new Date().toISOString(),
    };
    io.to(codigo).emit("mensaje", payload);
    console.log(`💬 [${codigo}] ${autor || socket.id}: ${mensaje}`);
  });

  socket.on("salirSala", () => {
    const info = leaveRoom(socket);
    if (info) console.log(`🚪 Socket ${socket.id} salió de ${info.code}`);
  });

  socket.on("disconnect", () => {
    const info = leaveRoom(socket);
    console.log(`🔴 Socket desconectado: ${socket.id}`);
    if (info) console.log(`🧹 Limpieza de sala ${info.code}`);
  });
});

// -------------------------------
// INICIO DEL SERVIDOR
// -------------------------------
httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor de ImpostorX escuchando en el puerto ${PORT}`);
});
