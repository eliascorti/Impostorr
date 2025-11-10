import { io } from 'socket.io-client';

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const socket = io(SERVER_URL, {
  autoConnect: true,
  transports: ['websocket']
});

// Utilidades de logging
function log(event, payload) {
  console.log(`[Cliente] ${event}`, payload);
}

socket.on('connect', () => {
  log('Conectado', { id: socket.id });
});

socket.on('disconnect', (reason) => {
  log('Desconectado', { reason });
});

socket.on('salaCreada', (data) => log('salaCreada', data));
socket.on('jugadorUnido', (data) => log('jugadorUnido', data));
socket.on('mensaje', (data) => log('mensaje', data));
socket.on('salir', (data) => log('salir', data));
socket.on('salaCerrada', (data) => log('salaCerrada', data));
socket.on('errorSala', (data) => log('errorSala', data));

export function crearSala(nombre) {
  socket.emit('crearSala', { nombre });
  log('crearSala emitido', { nombre });
}

export function unirseSala(codigo, nombre) {
  socket.emit('unirseSala', { codigo, nombre });
  log('unirseSala emitido', { codigo, nombre });
}

export function enviarMensaje(codigo, mensaje, autor) {
  socket.emit('enviarMensaje', { codigo, mensaje, autor });
  log('enviarMensaje emitido', { codigo, mensaje, autor });
}

export function salirSala() {
  socket.emit('salirSala');
  log('salirSala emitido');
}

export default socket;
