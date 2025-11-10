# Impostorr

Juego de fiesta web para jugar al impostor pasando el dispositivo entre los jugadores. Permite seleccionar entre más de 25 categorías con al menos 30 palabras cada una.

## Cómo usarlo

1. Abre `index.html` en tu navegador favorito.
2. Define la cantidad de jugadores (mínimo 3) e ingresa el nombre de cada participante.
3. Elige una categoría; hay más de 25 opciones, incluidas "Deportistas históricos y actuales", "Juegos", "Carreras", "Futbol Argentino", "Jugadores Argentinos" y "Streamers Famosos".
4. Presiona **Comenzar ronda** y pasa el dispositivo: cada jugador verá en secreto su pista o si es el impostor.
5. Cuando todos hayan visto su rol, pulsa **Comenzar votación** para registrar los votos de manera anónima.
6. El sistema repetirá las votaciones automáticamente: si atrapan al impostor mostrará el éxito y, si solo quedan dos personas, revelará la identidad del impostor.

Durante las revelaciones se muestran imágenes de referencia para todas las categorías (banderas, personas, equipos, animales, objetos, etc.).

Puedes reiniciar la partida en cualquier momento con el botón **Nueva ronda**.

## Jugar en línea

Además del modo clásico en un solo dispositivo, la página ofrece un modo en línea que permite crear una sala con un código compatible con móviles y PC:

1. Selecciona **En línea** en el selector de modo.
2. Como anfitrión, toca **Crear sala** y genera un código único. Compártelo con tus amigos y espera a que se conecten (necesitas al menos tres personas activas para iniciar la ronda).
3. Desde otros dispositivos, abre la página, elige **En línea → Unirse a sala**, escribe el código y tu nombre. Cada jugador verá su palabra en privado desde su celular y podrá votar desde ahí.
4. El anfitrión controla el inicio de las rondas y puede abrir votaciones sucesivas hasta atrapar al impostor o quedar solo dos jugadores. Los resultados y eliminaciones se sincronizan automáticamente.

> **Nota:** el modo en línea utiliza PeerJS para crear una conexión directa entre los navegadores. Si la red bloquea WebRTC es posible que la sala no se establezca correctamente.
