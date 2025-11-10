const categories = {
  "Países": [
    "Argentina",
    "Brasil",
    "Chile",
    "Perú",
    "Colombia",
    "México",
    "Estados Unidos",
    "Canadá",
    "España",
    "Francia",
    "Italia",
    "Alemania",
    "Japón",
    "China",
    "India",
    "Australia",
    "Nueva Zelanda",
    "Sudáfrica",
    "Egipto",
    "Marruecos",
    "Grecia",
    "Turquía",
    "Rusia",
    "Suecia",
    "Noruega",
    "Finlandia",
    "Islandia",
    "Portugal",
    "Irlanda",
    "Corea del Sur"
  ],
  "Ciudades": [
    "Buenos Aires",
    "Rio de Janeiro",
    "Santiago",
    "Lima",
    "Bogotá",
    "Ciudad de México",
    "Nueva York",
    "Los Ángeles",
    "Toronto",
    "Madrid",
    "Barcelona",
    "París",
    "Roma",
    "Berlín",
    "Tokio",
    "Osaka",
    "Beijing",
    "Shanghái",
    "Delhi",
    "Sídney",
    "Melbourne",
    "El Cairo",
    "Marrakech",
    "Atenas",
    "Estambul",
    "Moscú",
    "Estocolmo",
    "Helsinki",
    "Lisboa",
    "Dublín"
  ],
  "Platos tradicionales": [
    "Asado",
    "Feijoada",
    "Empanadas",
    "Ceviche",
    "Bandeja paisa",
    "Tacos al pastor",
    "Hamburguesa",
    "Poutine",
    "Paella",
    "Coq au vin",
    "Pizza napolitana",
    "Schnitzel",
    "Sushi",
    "Ramen",
    "Pollo tikka masala",
    "Curry verde",
    "Biryani",
    "Pad thai",
    "Tagine",
    "Moussaka",
    "Dolma",
    "Pelmeni",
    "Köttbullar",
    "Bacalao a la brasa",
    "Irish stew",
    "Kimchi",
    "Bibimbap",
    "Goulash",
    "Falafel",
    "Arepas"
  ],
  "Animales": [
    "León",
    "Tigre",
    "Elefante",
    "Jirafa",
    "Hipopótamo",
    "Rinoceronte",
    "Cebra",
    "Gorila",
    "Chimpancé",
    "Koala",
    "Canguro",
    "Panda",
    "Lobo",
    "Zorro",
    "Oso polar",
    "Búfalo",
    "Camello",
    "Lince",
    "Puma",
    "Jaguar",
    "Mapache",
    "Perezoso",
    "Ciervo",
    "Erizo",
    "Topo",
    "Hurón",
    "Cabra",
    "Alce",
    "Carnero",
    "Chinchilla"
  ],
  "Deportes": [
    "Fútbol",
    "Baloncesto",
    "Vóley",
    "Tenis",
    "Rugby",
    "Hockey sobre hielo",
    "Béisbol",
    "Críquet",
    "Golf",
    "Natación",
    "Atletismo",
    "Boxeo",
    "Artes marciales mixtas",
    "Esgrima",
    "Ciclismo",
    "Escalada",
    "Snowboard",
    "Esquí",
    "Patinaje artístico",
    "Waterpolo",
    "Surf",
    "Windsurf",
    "Remo",
    "Canotaje",
    "Bádminton",
    "Tenis de mesa",
    "Bolos",
    "Gimnasia artística",
    "Motociclismo",
    "Automovilismo"
  ],
  "Películas": [
    "El Padrino",
    "Titanic",
    "Casablanca",
    "Star Wars",
    "El Señor de los Anillos",
    "Matrix",
    "Jurassic Park",
    "Forrest Gump",
    "Gladiador",
    "Inception",
    "Avatar",
    "La La Land",
    "Amélie",
    "Cinema Paradiso",
    "Ciudad de Dios",
    "El laberinto del fauno",
    "Intouchables",
    "Coco",
    "Toy Story",
    "Soul",
    "Pulp Fiction",
    "Kill Bill",
    "Parásitos",
    "Oldboy",
    "Spirited Away",
    "Your Name",
    "Mad Max",
    "El Gran Hotel Budapest",
    "Nomadland",
    "Roma"
  ],
  "Series": [
    "Breaking Bad",
    "Game of Thrones",
    "Friends",
    "The Office",
    "Stranger Things",
    "Dark",
    "The Crown",
    "Narcos",
    "La Casa de Papel",
    "Black Mirror",
    "Fleabag",
    "The Mandalorian",
    "Succession",
    "Better Call Saul",
    "The Wire",
    "Sherlock",
    "Peaky Blinders",
    "The Boys",
    "The Last of Us",
    "Westworld",
    "Lost",
    "How I Met Your Mother",
    "Vikings",
    "House of Cards",
    "Chernobyl",
    "Severance",
    "The Good Place",
    "True Detective",
    "Ted Lasso",
    "Lupin"
  ],
  "Instrumentos musicales": [
    "Guitarra",
    "Piano",
    "Violín",
    "Violonchelo",
    "Contrabajo",
    "Batería",
    "Percusión latina",
    "Flauta",
    "Clarinete",
    "Saxofón",
    "Trompeta",
    "Trombón",
    "Tuba",
    "Oboe",
    "Fagot",
    "Arpa",
    "Ukelele",
    "Mandolina",
    "Banjo",
    "Sintetizador",
    "Teclado",
    "Órgano",
    "Acordeón",
    "Marimba",
    "Xilófono",
    "Pandero",
    "Didgeridoo",
    "Sitar",
    "Gaita",
    "Kalimba"
  ],
  "Profesiones": [
    "Médico",
    "Enfermero",
    "Ingeniero",
    "Arquitecto",
    "Abogado",
    "Docente",
    "Programador",
    "Diseñador gráfico",
    "Periodista",
    "Fotógrafo",
    "Chef",
    "Panadero",
    "Carpintero",
    "Electricista",
    "Plomero",
    "Mecánico",
    "Piloto",
    "Azafata",
    "Astronauta",
    "Científico",
    "Investigador",
    "Psicólogo",
    "Actor",
    "Músico",
    "Bailarín",
    "Deportista",
    "Entrenador",
    "Veterinario",
    "Biólogo",
    "Farmacéutico"
  ],
  "Frutas": [
    "Manzana",
    "Pera",
    "Banana",
    "Naranja",
    "Mandarina",
    "Pomelo",
    "Limón",
    "Lima",
    "Mango",
    "Papaya",
    "Ananá",
    "Durazno",
    "Ciruela",
    "Cereza",
    "Frutilla",
    "Arándano",
    "Mora",
    "Frambuesa",
    "Kiwi",
    "Granada",
    "Melón",
    "Sandía",
    "Uva",
    "Guayaba",
    "Maracuyá",
    "Higo",
    "Coco",
    "Tuna",
    "Lichi",
    "Carambola"
  ],
  "Verduras": [
    "Zanahoria",
    "Papa",
    "Batata",
    "Cebolla",
    "Ajo",
    "Puerro",
    "Apio",
    "Calabaza",
    "Zapallo",
    "Zucchini",
    "Berenjena",
    "Tomate",
    "Pimiento rojo",
    "Pimiento verde",
    "Pepino",
    "Lechuga",
    "Espinaca",
    "Acelga",
    "Brócoli",
    "Coliflor",
    "Repollo",
    "Remolacha",
    "Rábano",
    "Nabo",
    "Esparrago",
    "Alcaucil",
    "Choclo",
    "Chaucha",
    "Hongos",
    "Cebolla de verdeo"
  ],
  "Colores": [
    "Rojo",
    "Azul",
    "Amarillo",
    "Verde",
    "Naranja",
    "Violeta",
    "Rosa",
    "Celeste",
    "Turquesa",
    "Magenta",
    "Cian",
    "Marrón",
    "Beige",
    "Gris",
    "Negro",
    "Blanco",
    "Plateado",
    "Dorado",
    "Lavanda",
    "Coral",
    "Fucsia",
    "Mostaza",
    "Oliva",
    "Azul marino",
    "Verde lima",
    "Verde esmeralda",
    "Rojo carmín",
    "Burdeos",
    "Azul petróleo",
    "Champán"
  ],
  "Objetos del hogar": [
    "Sofá",
    "Mesa ratona",
    "Silla",
    "Mesa de comedor",
    "Lámpara",
    "Televisor",
    "Heladera",
    "Microondas",
    "Horno",
    "Cocina",
    "Cafetera",
    "Tostadora",
    "Batidora",
    "Licuadora",
    "Lavarropas",
    "Lavavajillas",
    "Plancha",
    "Aspiradora",
    "Ventilador",
    "Aire acondicionado",
    "Espejo",
    "Alfombra",
    "Cortina",
    "Estantería",
    "Biblioteca",
    "Cuadro",
    "Escritorio",
    "Cama",
    "Colchón",
    "Ropero"
  ],
  "Destinos turísticos": [
    "Cataratas del Iguazú",
    "Machu Picchu",
    "Chichén Itzá",
    "Grand Canyon",
    "Estatua de la Libertad",
    "Torre Eiffel",
    "Coliseo Romano",
    "Sagrada Familia",
    "Taj Mahal",
    "Gran Muralla China",
    "Monte Fuji",
    "Sydney Opera House",
    "Safari en Kenia",
    "Pirámides de Giza",
    "Santorini",
    "Petra",
    "Auroras boreales en Islandia",
    "Fiordos noruegos",
    "Islas Maldivas",
    "Bora Bora",
    "Serengeti",
    "Parque Yellowstone",
    "Islas Galápagos",
    "Amazonas",
    "Desierto del Sahara",
    "Patagonia",
    "Banff National Park",
    "Isla de Pascua",
    "Cinque Terre",
    "Kruger National Park"
  ],
  "Juegos de mesa": [
    "Ajedrez",
    "Damas",
    "Monopoly",
    "Scrabble",
    "Catan",
    "Carcassonne",
    "Risk",
    "Clue",
    "Dixit",
    "Pandemic",
    "Ticket to Ride",
    "Azul",
    "7 Wonders",
    "Agricola",
    "Codenames",
    "Exploding Kittens",
    "Uno",
    "Jenga",
    "Pictionary",
    "Trivial Pursuit",
    "Taboo",
    "Time's Up",
    "Twister",
    "Bang!",
    "Love Letter",
    "Mysterium",
    "Small World",
    "Terraforming Mars",
    "Gloomhaven",
    "Everdell"
  ],
  "Idiomas": [
    "Español",
    "Inglés",
    "Francés",
    "Portugués",
    "Italiano",
    "Alemán",
    "Holandés",
    "Sueco",
    "Noruego",
    "Danés",
    "Finés",
    "Ruso",
    "Polaco",
    "Checo",
    "Húngaro",
    "Rumano",
    "Búlgaro",
    "Griego",
    "Turco",
    "Árabe",
    "Hebreo",
    "Hindi",
    "Bengalí",
    "Chino mandarín",
    "Cantonés",
    "Japonés",
    "Coreano",
    "Vietnamita",
    "Tailandés",
    "Indonesio"
  ],
  "Bebidas": [
    "Café",
    "Té verde",
    "Té negro",
    "Chocolate caliente",
    "Mate",
    "Limonada",
    "Jugo de naranja",
    "Jugo de manzana",
    "Batido de frutas",
    "Agua con gas",
    "Refresco de cola",
    "Gaseosa de naranja",
    "Cerveza",
    "Vino tinto",
    "Vino blanco",
    "Champaña",
    "Sidra",
    "Margarita",
    "Mojito",
    "Piña colada",
    "Negroni",
    "Gin tonic",
    "Bloody Mary",
    "Whisky",
    "Ron",
    "Vodka",
    "Tequila",
    "Sake",
    "Baileys",
    "Kombucha"
  ],
  "Festivales y celebraciones": [
    "Carnaval de Río",
    "Carnaval de Barranquilla",
    "Fiesta de la Vendimia",
    "Oktoberfest",
    "La Tomatina",
    "San Fermín",
    "Día de Muertos",
    "Cinco de Mayo",
    "Diwali",
    "Holi",
    "Año Nuevo Chino",
    "Hanami",
    "Songkran",
    "Ramadán",
    "Navidad",
    "Año Nuevo",
    "Semana Santa",
    "Hanukkah",
    "Eid al-Fitr",
    "Eid al-Adha",
    "Thanksgiving",
    "Independence Day",
    "Fiesta Nacional de España",
    "Festival de Cannes",
    "Festival de Venecia",
    "Coachella",
    "Lollapalooza",
    "Tomorrowland",
    "Glastonbury",
    "Rock in Rio"
  ],
  "Marcas de autos": [
    "Toyota",
    "Honda",
    "Nissan",
    "Mazda",
    "Mitsubishi",
    "Subaru",
    "Hyundai",
    "Kia",
    "Ford",
    "Chevrolet",
    "Dodge",
    "Jeep",
    "Tesla",
    "Volkswagen",
    "Audi",
    "BMW",
    "Mercedes-Benz",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Alfa Romeo",
    "Peugeot",
    "Renault",
    "Citroën",
    "Volvo",
    "Saab",
    "Skoda",
    "Seat",
    "Mini"
  ],
  "Héroes de ficción": [
    "Harry Potter",
    "Frodo Bolsón",
    "Luke Skywalker",
    "Leia Organa",
    "Han Solo",
    "Indiana Jones",
    "Batman",
    "Superman",
    "Mujer Maravilla",
    "Flash",
    "Aquaman",
    "Spider-Man",
    "Iron Man",
    "Capitán América",
    "Thor",
    "Hulk",
    "Black Panther",
    "Doctor Strange",
    "Capitana Marvel",
    "Viuda Negra",
    "Ant-Man",
    "Star-Lord",
    "Gamora",
    "Capitán Picard",
    "Katniss Everdeen",
    "Geralt de Rivia",
    "Jon Snow",
    "Daenerys Targaryen",
    "Buffy Summers",
    "Sailor Moon"
  ],
  "Villanos y antagonistas": [
    "Voldemort",
    "Sauron",
    "Darth Vader",
    "Emperador Palpatine",
    "Kylo Ren",
    "Joker",
    "Lex Luthor",
    "Harley Quinn",
    "Loki",
    "Thanos",
    "Ultron",
    "Green Goblin",
    "Doctor Octopus",
    "Magneto",
    "Venom",
    "Killmonger",
    "Red Skull",
    "Kingpin",
    "Maléfica",
    "Cruella de Vil",
    "Scar",
    "Jafar",
    "Hades",
    "Ursula",
    "Capitán Garfio",
    "Hans Landa",
    "Anton Chigurh",
    "Hannibal Lecter",
    "Norman Bates",
    "Lord Farquaad"
  ],
  "Tecnología y gadgets": [
    "Smartphone",
    "Tableta",
    "Laptop",
    "Smartwatch",
    "Auriculares inalámbricos",
    "Altavoz inteligente",
    "Televisor inteligente",
    "Cámara digital",
    "Drone",
    "E-reader",
    "Consola de videojuegos",
    "Router",
    "Proyector",
    "Impresora 3D",
    "Robot aspirador",
    "Monitor",
    "Teclado mecánico",
    "Mouse ergonómico",
    "Disco SSD",
    "Memoria USB",
    "Power bank",
    "Cargador inalámbrico",
    "Gafas VR",
    "Gimbal",
    "Micrófono USB",
    "Webcam",
    "Chromecast",
    "Raspberry Pi",
    "Kindle",
    "GoPro"
  ],
  "Animales marinos": [
    "Delfín",
    "Ballena azul",
    "Orca",
    "Tiburón blanco",
    "Tiburón martillo",
    "Tiburón ballena",
    "Manta raya",
    "Mantarraya diablo",
    "Raya eléctrica",
    "Pez payaso",
    "Pez cirujano",
    "Pez león",
    "Pez globo",
    "Pez espada",
    "Pez vela",
    "Atún",
    "Salmón",
    "Bacalao",
    "Merluza",
    "Caballito de mar",
    "Pulpo",
    "Calamar gigante",
    "Medusa",
    "Estrella de mar",
    "Erizo de mar",
    "Cangrejo gigante",
    "Langosta",
    "Gamba",
    "Foca",
    "Manatí"
  ],
  "Postres": [
    "Tiramisú",
    "Cheesecake",
    "Brownie",
    "Helado",
    "Flan",
    "Crema catalana",
    "Pavlova",
    "Tres leches",
    "Churros",
    "Donas",
    "Macarons",
    "Profiteroles",
    "Crème brûlée",
    "Mousse de chocolate",
    "Apple pie",
    "Key lime pie",
    "Baklava",
    "Panna cotta",
    "Banoffee",
    "Crumble de manzana",
    "Waffles",
    "Panqueques",
    "Gelatina",
    "Arroz con leche",
    "Alfajores",
    "Pastel red velvet",
    "Cupcakes",
    "Budín de pan",
    "Tarta de frutillas",
    "Rogel"
  ],
  "Obras de arte": [
    "Mona Lisa",
    "La última cena",
    "La noche estrellada",
    "Los girasoles",
    "Guernica",
    "Las Meninas",
    "El nacimiento de Venus",
    "La escuela de Atenas",
    "El jardín de las delicias",
    "El Grito",
    "La persistencia de la memoria",
    "American Gothic",
    "La joven de la perla",
    "El beso",
    "La ronda de noche",
    "Saturno devorando a su hijo",
    "Las señoritas de Avignon",
    "Campbell's Soup Cans",
    "No. 5, 1948",
    "Composición VIII",
    "La libertad guiando al pueblo",
    "La creación de Adán",
    "La balsa de la Medusa",
    "La gran ola de Kanagawa",
    "El caminante sobre el mar de nubes",
    "Nighthawks",
    "El matrimonio Arnolfini",
    "La dama del armiño",
    "La torre de Babel",
    "El hombre vitruviano"
  ]
};

const setupForm = document.getElementById('setup-form');
const playersInput = document.getElementById('players');
const playerNamesContainer = document.getElementById('player-names');
const categorySelect = document.getElementById('category');
const modeRadios = document.querySelectorAll("input[name='mode']");
const setupSection = document.getElementById('setup');
const roundSection = document.getElementById('round');
const roundTitle = document.getElementById('round-title');
const resetButton = document.getElementById('reset');
const instructions = document.getElementById('instructions');
let currentPlayerSpan = document.getElementById('current-player');
const toggleWordButton = document.getElementById('toggle-word');
const wordDisplay = document.getElementById('word');
const roundCategory = document.getElementById('round-category');

const votingSection = document.getElementById('voting');
const startVoteButton = document.getElementById('start-vote');
const votePanel = document.getElementById('vote-panel');
const voteIntro = document.getElementById('vote-intro');
const voteInstructions = document.getElementById('vote-instructions');
const voteForm = document.getElementById('vote-form');
const voteLabel = document.getElementById('vote-label');
const voteChoice = document.getElementById('vote-choice');
const voteResult = document.getElementById('vote-result');
const voteSummary = document.getElementById('vote-summary');
const voteOutcome = document.getElementById('vote-outcome');

startVoteButton.disabled = true;

const state = {
  assignments: [],
  currentIndex: 0,
  revealed: false,
  mode: 'standard',
  players: [],
  impostorIndex: null,
  minorityIndexes: new Set(),
  votes: [],
  votingIndex: 0,
  majorityWord: null,
  minorityWord: null
};

function populateCategories() {
  const names = Object.keys(categories).sort((a, b) => a.localeCompare(b, 'es'));
  for (const name of names) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = `${name} (${categories[name].length})`;
    categorySelect.appendChild(option);
  }
}

function createPlayerInput(index) {
  const wrapper = document.createElement('div');
  wrapper.className = 'player-name';

  const input = document.createElement('input');
  input.type = 'text';
  input.required = true;
  input.maxLength = 30;
  input.placeholder = `Jugador ${index + 1}`;
  input.setAttribute('data-index', index);

  wrapper.appendChild(input);
  return wrapper;
}

function syncPlayerInputs(count) {
  const existing = playerNamesContainer.querySelectorAll('input');
  const currentCount = existing.length;

  if (currentCount < count) {
    for (let i = currentCount; i < count; i += 1) {
      playerNamesContainer.appendChild(createPlayerInput(i));
    }
  } else if (currentCount > count) {
    for (let i = currentCount - 1; i >= count; i -= 1) {
      const toRemove = playerNamesContainer.querySelector(`input[data-index="${i}"]`);
      if (toRemove) {
        playerNamesContainer.removeChild(toRemove.parentElement);
      }
    }
  }

  playerNamesContainer.querySelectorAll('input').forEach((input, idx) => {
    input.setAttribute('data-index', idx);
    if (!input.value.trim()) {
      input.placeholder = `Jugador ${idx + 1}`;
    }
  });
}

function getPlayerNames() {
  return Array.from(playerNamesContainer.querySelectorAll('input')).map((input) => input.value.trim());
}

function getSelectedMode() {
  const checked = Array.from(modeRadios).find((radio) => radio.checked);
  return checked ? checked.value : 'standard';
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startRound(event) {
  event.preventDefault();
  const players = Math.max(3, parseInt(playersInput.value, 10));
  const category = categorySelect.value;
  const mode = getSelectedMode();
  syncPlayerInputs(players);
  const names = getPlayerNames();

  if (!category) {
    alert('Selecciona una categoría para comenzar.');
    return;
  }

  if (names.length !== players) {
    alert('Completa el nombre de cada jugador antes de iniciar.');
    return;
  }

  if (names.some((name) => name.length === 0)) {
    alert('Todos los jugadores necesitan un nombre para jugar de forma anónima.');
    return;
  }

  const uniqueNames = new Set(names.map((name) => name.toLowerCase()));
  if (uniqueNames.size !== names.length) {
    alert('Cada jugador debe tener un nombre diferente para poder votar sin confusiones.');
    return;
  }

  state.mode = mode;
  state.currentIndex = 0;
  state.revealed = false;
  state.players = names;
  state.assignments = [];
  state.impostorIndex = null;
  state.minorityIndexes = new Set();
  state.votes = [];
  state.votingIndex = 0;
  state.majorityWord = null;
  state.minorityWord = null;

  const pool = categories[category];

  if (mode === 'standard') {
    const secretWord = pool[Math.floor(Math.random() * pool.length)];
    const impostorIndex = Math.floor(Math.random() * players);

    state.assignments = Array.from({ length: players }, (_, index) =>
      index === impostorIndex ? 'IMPOSTOR' : secretWord
    );

    state.impostorIndex = impostorIndex;
    state.majorityWord = secretWord;
    roundTitle.textContent = 'Revelación de roles';
  } else {
    const [wordA, wordB] = shuffle([...pool]).slice(0, 2);
    const minorityCount = Math.max(1, Math.floor(players / 3));
    const majorityCount = players - minorityCount;
    const assignments = [
      ...Array.from({ length: majorityCount }, () => wordA),
      ...Array.from({ length: minorityCount }, () => wordB)
    ];
    state.assignments = shuffle(assignments);

    state.majorityWord = wordA;
    state.minorityWord = wordB;
    state.minorityIndexes = new Set();
    state.assignments.forEach((word, index) => {
      if (word === wordB) {
        state.minorityIndexes.add(index);
      }
    });
    roundTitle.textContent = 'Modo difícil: dos pistas';
  }

  setupSection.classList.add('hidden');
  roundSection.classList.remove('hidden');
  toggleWordButton.disabled = false;
  toggleWordButton.textContent = 'Mostrar';
  wordDisplay.textContent = '';

  const firstPlayerName = state.players[0];
  currentPlayerSpan.textContent = firstPlayerName;
  instructions.innerHTML =
    `Pasa el dispositivo a <span id="current-player">${firstPlayerName}</span>. Cuando esté listo, presiona "Mostrar" para revelar su rol. Después presiona "Ocultar" y pasa el dispositivo.`;
  currentPlayerSpan = document.getElementById('current-player');

  roundCategory.textContent = category;

  voteIntro.textContent = 'Cuando terminen de debatir, inicien la votación secreta.';
  startVoteButton.disabled = true;
  votePanel.classList.add('hidden');
  voteResult.classList.add('hidden');
  voteInstructions.textContent = '';
  voteChoice.innerHTML = '';
  voteSummary.textContent = '';
  voteOutcome.textContent = '';
}

function handleToggle() {
  if (state.currentIndex >= state.assignments.length) {
    return;
  }

  if (!state.revealed) {
    const role = state.assignments[state.currentIndex];
    const playerName = state.players[state.currentIndex];
    wordDisplay.textContent = role;
    wordDisplay.classList.toggle('impostor', role === 'IMPOSTOR');
    toggleWordButton.textContent = 'Ocultar';
    state.revealed = true;

    instructions.innerHTML = `${playerName}, memoriza tu pista y presiona \"Ocultar\" antes de pasar el dispositivo.`;
  } else {
    wordDisplay.textContent = '';
    wordDisplay.classList.remove('impostor');
    state.revealed = false;
    state.currentIndex += 1;

    if (state.currentIndex >= state.assignments.length) {
      toggleWordButton.textContent = 'Ronda lista';
      toggleWordButton.disabled = true;
      instructions.textContent = 'Todos tienen su rol. ¡Comiencen a debatir y descubran al impostor!';
      roundTitle.textContent = '¡A jugar!';
      startVoteButton.disabled = false;
      voteIntro.textContent = 'Cuando estén listos, inicien la votación secreta para descubrir al impostor.';
    } else {
      const playerName = state.players[state.currentIndex];
      instructions.innerHTML = `Pasa el dispositivo a <span id="current-player">${playerName}</span> y presiona \"Mostrar\" cuando esté listo.`;
      toggleWordButton.textContent = 'Mostrar';
    }
  }
}

function prepareVoteStep() {
  if (state.votingIndex >= state.players.length) {
    finalizeVoting();
    return;
  }

  const voterName = state.players[state.votingIndex];
  voteInstructions.innerHTML = `Pasa el dispositivo a <strong>${voterName}</strong> para votar en secreto.`;
  voteLabel.textContent = `${voterName}, ¿a quién acusas?`;

  voteChoice.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Elige a un jugador';
  placeholder.disabled = true;
  placeholder.selected = true;
  voteChoice.appendChild(placeholder);

  state.players.forEach((name, index) => {
    if (index !== state.votingIndex) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      voteChoice.appendChild(option);
    }
  });
}

function startVoting() {
  startVoteButton.disabled = true;
  votePanel.classList.remove('hidden');
  voteResult.classList.add('hidden');
  voteIntro.textContent = 'Cada persona votará en secreto, pasando el dispositivo cuando termine.';
  state.votes = [];
  state.votingIndex = 0;
  prepareVoteStep();
}

function submitVote(event) {
  event.preventDefault();
  if (!voteChoice.value) {
    if (voteChoice.reportValidity) {
      voteChoice.reportValidity();
    }
    return;
  }

  state.votes.push(voteChoice.value);
  state.votingIndex += 1;
  voteForm.reset();
  prepareVoteStep();
}

function finalizeVoting() {
  votePanel.classList.add('hidden');
  voteResult.classList.remove('hidden');

  const tally = new Map();
  state.votes.forEach((vote) => {
    tally.set(vote, (tally.get(vote) || 0) + 1);
  });

  const ordered = Array.from(tally.entries()).sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0], 'es');
    }
    return b[1] - a[1];
  });

  const highest = ordered[0];
  const maxVotes = highest ? highest[1] : 0;
  const leaders = ordered.filter(([, votes]) => votes === maxVotes).map(([name]) => name);

  if (!highest) {
    voteSummary.textContent = 'No se registraron votos.';
    voteOutcome.textContent = '';
    return;
  }

  const breakdown = ordered.map(([name, count]) => `${name}: ${count}`).join(' · ');

  if (leaders.length === 1) {
    voteSummary.textContent = `La mayoría acusó a ${leaders[0]} con ${maxVotes} voto${maxVotes === 1 ? '' : 's'}. (${breakdown})`;
  } else {
    voteSummary.textContent = `Hubo un empate entre ${leaders.join(', ')} con ${maxVotes} voto${maxVotes === 1 ? '' : 's'}. (${breakdown})`;
  }

  if (state.mode === 'standard' && state.impostorIndex !== null) {
    const impostorName = state.players[state.impostorIndex];
    if (leaders.includes(impostorName)) {
      if (leaders.length === 1) {
        voteOutcome.textContent = `¡Acertaron! ${impostorName} era el impostor.`;
      } else {
        voteOutcome.textContent = `Empate, pero uno de los acusados es ${impostorName}, el impostor. Decidan cómo desempatar.`;
      }
    } else {
      voteOutcome.textContent = `Fallaron. ${impostorName} era el impostor y sigue oculto.`;
    }
  } else {
    const accusedIndexes = leaders.map((name) => state.players.indexOf(name)).filter((index) => index !== -1);
    const caughtMinority = accusedIndexes.some((index) => state.minorityIndexes.has(index));
    if (caughtMinority) {
      if (leaders.length === 1) {
        voteOutcome.textContent = `¡Lo lograron! ${leaders[0]} tenía la pista diferente (${state.minorityWord}).`;
      } else {
        voteOutcome.textContent = 'Empate con integrantes del grupo alterno. ¡Casi descubren a todos!';
      }
    } else {
      if (state.minorityWord) {
        voteOutcome.textContent = 'No dieron con quienes tenían la pista distinta. El engaño continúa.';
      } else {
        voteOutcome.textContent = '';
      }
    }
  }
}

function resetRound() {
  setupSection.classList.remove('hidden');
  roundSection.classList.add('hidden');
  state.assignments = [];
  state.currentIndex = 0;
  state.revealed = false;
  state.players = [];
  state.impostorIndex = null;
  state.minorityIndexes = new Set();
  state.votes = [];
  state.votingIndex = 0;
  toggleWordButton.disabled = false;
  wordDisplay.textContent = '';
  voteIntro.textContent = 'Cuando terminen de debatir, inicien la votación secreta.';
  startVoteButton.disabled = true;
  votePanel.classList.add('hidden');
  voteResult.classList.add('hidden');
  voteInstructions.textContent = '';
  voteSummary.textContent = '';
  voteOutcome.textContent = '';
}

populateCategories();
const initialCount = parseInt(playersInput.value, 10);
const safeCount = Number.isNaN(initialCount) ? 3 : initialCount;
syncPlayerInputs(Math.max(3, Math.min(20, safeCount)));
setupForm.addEventListener('submit', startRound);
toggleWordButton.addEventListener('click', handleToggle);
resetButton.addEventListener('click', resetRound);
playersInput.addEventListener('input', () => {
  const count = Math.max(3, Math.min(20, parseInt(playersInput.value, 10) || 0));
  syncPlayerInputs(count);
});
startVoteButton.addEventListener('click', startVoting);
voteForm.addEventListener('submit', submitVote);
