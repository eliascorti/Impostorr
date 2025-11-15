# Impostorr

Juego de fiesta web para jugar al impostor pasando el dispositivo entre los jugadores. Permite seleccionar entre más de 25 categorías con al menos 30 palabras cada una.

## Cómo usarlo

1. Abre `index.html` en tu navegador favorito.
2. Define la cantidad de jugadores (mínimo 3) e ingresa el nombre de cada participante.
3. Elige una categoría; hay más de 25 opciones, incluidas "Deportistas históricos y actuales", "Juegos", "Carreras", "Futbol Argentino", "Jugadores Argentinos" y "Streamers Famosos". Si no pueden decidirse, usa el botón **🎲 Aleatorio** para que el juego proponga una temática sorpresa.
4. Presiona **Comenzar ronda** y pasa el dispositivo: cada jugador verá en secreto su pista o si es el impostor.
5. Cuando todos hayan visto su rol, pulsa **Comenzar votación** para registrar los votos de manera anónima.
6. El sistema repetirá las votaciones automáticamente: si atrapan al impostor mostrará el éxito y, si solo quedan dos personas, revelará la identidad del impostor.
7. Al finalizar una ronda, puedes iniciar otra inmediatamente desde **Volver a jugar** (en línea) o con **Nueva ronda** (modo local), volviendo a elegir categoría o dejando que la ruleta aleatoria decida.

Durante las revelaciones se muestran imágenes de referencia para todas las categorías (banderas, personas, equipos, animales, objetos, etc.).

Puedes reiniciar la partida en cualquier momento con el botón **Nueva ronda**.

## Jugar en línea

Además del modo clásico en un solo dispositivo, la página ofrece un modo en línea que ahora se apoya en el backend Socket.IO incluido en este repositorio:

1. Levanta el servidor (`server.js`) en tu máquina o en un hosting compatible (Render, Railway, etc.).
2. Antes de cargar `script.js`, define `window.IMPOSTORX_SOCKET_URL` apuntando a la URL pública de ese backend. Si no lo haces y estás en `localhost`, el frontend intentará conectarse automáticamente a `http://localhost:3000`.
3. En la interfaz, selecciona **En línea**. Como anfitrión, toca **Crear sala** y genera un código único. Compártelo con tus amigos y espera a que se conecten (necesitas al menos tres personas activas para iniciar la ronda).
4. Desde otros dispositivos, abre la página, elige **En línea → Unirse a sala**, escribe el código y tu nombre. Cada jugador verá su palabra en privado desde su celular y podrá votar desde ahí.
5. El anfitrión controla el inicio de las rondas, también recibe su rol en un panel privado (puede jugar y votar como cualquier participante) y puede abrir votaciones sucesivas hasta atrapar al impostor o quedar solo dos jugadores. Los resultados y eliminaciones se sincronizan automáticamente usando eventos de Socket.IO.
6. Tras cada partida, el anfitrión dispone del botón **Volver a jugar** para lanzar la siguiente ronda con la categoría que prefiera (incluido el modo aleatorio), mientras el resto de jugadores recibe el resumen final en sus dispositivos.
7. Cada invitado ve un panel personal con su nombre, estado actual (esperando, votando, victoria/derrota) y la lista viva de jugadores conectados, incluyendo el anfitrión y quién fue eliminado. Para mantener el foco, cuando estás dentro de una sala desaparecen automáticamente las instrucciones generales y los formularios iniciales.

```html
<script>
  window.IMPOSTORX_SOCKET_URL = 'https://tu-backend-impostorx.onrender.com';
</script>
<script src="script.js"></script>
```

## Backend Node + Express con Socket.IO

El proyecto incluye un pequeño servidor Node.js pensado para desplegar en Render, Railway u otro hosting compatible. Sus características principales son:

- Genera códigos de sala únicos de 4 letras.
- Mantiene el listado de salas activas, con sus sockets conectados y limpieza automática cuando el anfitrión o todos los jugadores se desconectan.
- Expone eventos en español: `salaCreada`, `jugadorUnido`, `mensaje`, `salir` y `salaCerrada`.
- Habilita CORS para que el frontend alojado en Netlify (u otro dominio que definas en `CORS_ORIGIN`) pueda conectarse sin problemas.

### Arranque local

```bash
npm install
npm start
```

El servidor escuchará en el puerto `3000` (o en el que indique la variable `PORT`). Puedes ajustar la variable de entorno `CORS_ORIGIN` para limitar los orígenes aceptados.

### Cliente de ejemplo

`socket-client.js` exporta utilidades mínimas para conectarse desde el navegador o Node.js usando Socket.IO:

```js
import { crearSala, unirseSala, enviarMensaje, salirSala } from './socket-client.js';

crearSala('Anfitrión');
// o bien
unirseSala('ABCD', 'Invitado');
```

Cada evento recibido o emitido se muestra en la consola para facilitar el debugging.

### Cómo probarlo

1. Inicia el backend (`npm start`).
2. Abre dos pestañas del navegador (o dos dispositivos) y carga una versión simple del frontend o ejecuta el cliente desde la consola con `node`.
3. En la primera pestaña/cliente ejecuta `crearSala('Host')`. Toma nota del código recibido en el evento `salaCreada`.
4. En la segunda pestaña llama a `unirseSala('<CODIGO>', 'Visitante')`.
5. Envía mensajes con `enviarMensaje('<CODIGO>', 'Hola a todos', 'Visitante')` y observa cómo aparecen en ambas consolas.
6. Llama a `salirSala()` en cualquiera de los clientes para comprobar la emisión de `salir` o `salaCerrada` según quién abandone.

Si necesitas limpiar sesiones colgadas, basta con reiniciar el servidor o esperar a que Socket.IO detecte la desconexión de los clientes.
