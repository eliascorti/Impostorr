import { io } from "socket.io-client";

// 🔹 URL del backend (Render)
const SERVER_URL = "https://impostorr.onrender.com"; // 👈 Usá el dominio real del backend

// 🔹 Inicialización del socket
const socket = io(SERVER_URL, {
  autoConnect: true,
  transports: ["websocket"], // fuerza WebSocket, evita polling
});

// 🔹 Logger simple para consola
function log(event, payload) {
  console.log(`[Cliente] ${event}`, payload || "");
}

// -----------------------------
// EVENTOS DEL SERVIDOR
// -----------------------------
socket.on("connect", () => log("✅ Conectado", { id: socket.id }));
socket.on("disconnect", (reason) => log("❌ Desconectado", { reason }));

socket.on("salaCreada", (data) => log("🎮 Sala Creada", data));
socket.on("jugadorUnido", (data) => log("👥 Jugador Unido", data));
socket.on("mensaje", (data) => log("💬 Mensaje", data));
socket.on("salir", (data) => log("🚪 Jugador Salió", data));
socket.on("salaCerrada", (data) => log("🔒 Sala Cerrada", data));
socket.on("errorSala", (data) => log("⚠️ Error de Sala", data));

// -----------------------------
// FUNCIONES DE CLIENTE
// -----------------------------
export function crearSala(nombre) {
  socket.emit("crearSala", { nombre });
  log("crearSala emitido", { nombre });
}

export function unirseSala(codigo, nombre) {
  socket.emit("unirseSala", { codigo, nombre });
  log("unirseSala emitido", { codigo, nombre });
}

export function enviarMensaje(codigo, mensaje, autor) {
  socket.emit("enviarMensaje", { codigo, mensaje, autor });
  log("enviarMensaje emitido", { codigo, mensaje, autor });
}

export function salirSala() {
  socket.emit("salirSala");
  log("salirSala emitido");
}

export default socket;
