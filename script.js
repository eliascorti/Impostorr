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
  "Actrices +18": [
    "Mia Khalifa",
    "Riley Reid",
    "Lana Rhoades",
    "Abella Danger",
    "Angela White",
    "Mia Malkova",
    "Eva Lovia",
    "Adriana Chechik",
    "Brandi Love",
    "Nicole Aniston",
    "Tori Black",
    "Madison Ivy",
    "Lisa Ann",
    "Jenna Haze",
    "Gianna Michaels",
    "Lexi Belle",
    "Sasha Grey",
    "Asa Akira",
    "Dillion Harper",
    "August Ames",
    "Bonnie Rotten",
    "Kenzie Reeves",
    "Eva Elfie",
    "Gina Valentina",
    "Aidra Fox",
    "Romi Rain",
    "Kendra Lust",
    "Nicolette Shea",
    "Jada Stevens",
    "Hitomi Tanaka"
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
const setupSection = document.getElementById('setup');
const roundSection = document.getElementById('round');
const roundTitle = document.getElementById('round-title');
const resetButton = document.getElementById('reset');
const instructions = document.getElementById('instructions');
let currentPlayerSpan = document.getElementById('current-player');
const toggleWordButton = document.getElementById('toggle-word');
const wordDisplay = document.getElementById('word');
const wordVisual = document.getElementById('word-visual');
const wordImage = document.getElementById('word-image');
const wordCaption = document.getElementById('word-caption');
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
  players: [],
  activePlayers: new Set(),
  eliminated: new Set(),
  impostorIndex: null,
  votes: [],
  votingIndex: 0,
  votingOrder: [],
  secretWord: null,
  category: null,
  roundResolved: false
};

if (wordImage) {
  wordImage.loading = 'lazy';
  wordImage.decoding = 'async';
}

function clearWordVisual() {
  if (!wordVisual || !wordImage || !wordCaption) {
    return;
  }
  wordVisual.classList.add('hidden');
  wordImage.removeAttribute('src');
  wordImage.alt = '';
  wordCaption.textContent = '';
}

function normalizeForQuery(label) {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, '+')
    .toLowerCase();
}

const flagCodes = {
  Argentina: 'ar',
  Brasil: 'br',
  Chile: 'cl',
  Perú: 'pe',
  Colombia: 'co',
  México: 'mx',
  'Estados Unidos': 'us',
  Canadá: 'ca',
  España: 'es',
  Francia: 'fr',
  Italia: 'it',
  Alemania: 'de',
  Japón: 'jp',
  China: 'cn',
  India: 'in',
  Australia: 'au',
  'Nueva Zelanda': 'nz',
  'Sudáfrica': 'za',
  Egipto: 'eg',
  Marruecos: 'ma',
  Grecia: 'gr',
  Turquía: 'tr',
  Rusia: 'ru',
  Suecia: 'se',
  Noruega: 'no',
  Finlandia: 'fi',
  Islandia: 'is',
  Portugal: 'pt',
  Irlanda: 'ie',
  'Corea del Sur': 'kr'
};

function getFlagUrl(country) {
  const code = flagCodes[country];
  if (!code) {
    return null;
  }
  return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
}

function getImageUrl(category, label) {
  if (category === 'Países') {
    return getFlagUrl(label);
  }

  if (category === 'Animales') {
    return `https://source.unsplash.com/featured/400x300?${normalizeForQuery(`${label} animal`)}`;
  }

  if (category === 'Animales marinos') {
    return `https://source.unsplash.com/featured/400x300?${normalizeForQuery(`${label} marino`)}`;
  }

  if (category === 'Tecnología y gadgets') {
    return `https://source.unsplash.com/featured/400x300?${normalizeForQuery(label)}`;
  }

  return null;
}

function showWordVisual(category, label) {
  const imageUrl = getImageUrl(category, label);
  if (!imageUrl) {
    clearWordVisual();
    return;
  }

  if (!wordVisual || !wordImage || !wordCaption) {
    return;
  }

  wordImage.src = imageUrl;
  wordImage.alt = label;
  if (category === 'Países') {
    wordCaption.textContent = `Bandera de ${label}`;
  } else if (category === 'Tecnología y gadgets') {
    wordCaption.textContent = `Referencia ilustrativa: ${label}`;
  } else {
    wordCaption.textContent = `Imagen ilustrativa de ${label}`;
  }
  wordVisual.classList.remove('hidden');
}

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

function startRound(event) {
  event.preventDefault();
  const players = Math.max(3, parseInt(playersInput.value, 10));
  const category = categorySelect.value;
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

  state.currentIndex = 0;
  state.revealed = false;
  state.players = names;
  state.assignments = [];
  state.impostorIndex = null;
  state.votes = [];
  state.votingIndex = 0;
  state.votingOrder = [];
  state.secretWord = null;
  state.category = category;
  state.roundResolved = false;
  state.activePlayers = new Set();
  state.eliminated = new Set();

  const pool = categories[category];
  const secretWord = pool[Math.floor(Math.random() * pool.length)];
  const impostorIndex = Math.floor(Math.random() * players);

  state.assignments = Array.from({ length: players }, (_, index) =>
    index === impostorIndex ? 'IMPOSTOR' : secretWord
  );

  state.impostorIndex = impostorIndex;
  state.secretWord = secretWord;
  roundTitle.textContent = 'Revelación de roles';
  state.activePlayers = new Set(Array.from({ length: players }, (_, index) => index));

  setupSection.classList.add('hidden');
  roundSection.classList.remove('hidden');
  toggleWordButton.disabled = false;
  toggleWordButton.textContent = 'Mostrar';
  wordDisplay.textContent = '';
  clearWordVisual();

  const firstPlayerName = state.players[0];
  currentPlayerSpan.textContent = firstPlayerName;
  instructions.innerHTML =
    `Pasa el dispositivo a <span id="current-player">${firstPlayerName}</span>. Cuando esté listo, presiona "Mostrar" para revelar su rol. Después presiona "Ocultar" y pasa el dispositivo.`;
  currentPlayerSpan = document.getElementById('current-player');

  roundCategory.textContent = category;

  voteIntro.textContent = 'Cuando terminen de debatir, inicien la votación secreta.';
  startVoteButton.disabled = true;
  startVoteButton.textContent = 'Comenzar votación';
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
    if (role === 'IMPOSTOR') {
      clearWordVisual();
    } else {
      showWordVisual(state.category, role);
    }
    toggleWordButton.textContent = 'Ocultar';
    state.revealed = true;

    instructions.innerHTML = `${playerName}, memoriza tu pista y presiona \"Ocultar\" antes de pasar el dispositivo.`;
  } else {
    wordDisplay.textContent = '';
    wordDisplay.classList.remove('impostor');
    clearWordVisual();
    state.revealed = false;
    state.currentIndex += 1;

    if (state.currentIndex >= state.assignments.length) {
      toggleWordButton.textContent = 'Ronda lista';
      toggleWordButton.disabled = true;
      instructions.textContent = 'Todos tienen su rol. ¡Comiencen a debatir y descubran al impostor!';
      roundTitle.textContent = '¡A jugar!';
      startVoteButton.disabled = false;
      startVoteButton.textContent = 'Comenzar votación';
      voteIntro.textContent = 'Cuando estén listos, inicien la votación secreta para descubrir al impostor.';
    } else {
      const playerName = state.players[state.currentIndex];
      instructions.innerHTML = `Pasa el dispositivo a <span id="current-player">${playerName}</span> y presiona \"Mostrar\" cuando esté listo.`;
      toggleWordButton.textContent = 'Mostrar';
    }
  }
}

function prepareVoteStep() {
  if (state.votingIndex >= state.votingOrder.length) {
    finalizeVoting();
    return;
  }

  const voterIndex = state.votingOrder[state.votingIndex];
  const voterName = state.players[voterIndex];
  voteInstructions.innerHTML = `Pasa el dispositivo a <strong>${voterName}</strong> para votar en secreto.`;
  voteLabel.textContent = `${voterName}, ¿a quién acusas?`;

  voteChoice.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Elige a un jugador';
  placeholder.disabled = true;
  placeholder.selected = true;
  voteChoice.appendChild(placeholder);

  Array.from(state.activePlayers)
    .filter((index) => index !== voterIndex)
    .forEach((index) => {
      const name = state.players[index];
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      voteChoice.appendChild(option);
    });
}

function startVoting() {
  if (state.roundResolved) {
    return;
  }

  const activePlayers = Array.from(state.activePlayers);
  if (activePlayers.length <= 2) {
    voteIntro.textContent = 'La votación ha terminado: solo quedan dos personas en juego.';
    startVoteButton.disabled = true;
    return;
  }

  startVoteButton.disabled = true;
  startVoteButton.textContent = 'Votación en curso';
  votePanel.classList.remove('hidden');
  voteResult.classList.add('hidden');
  voteIntro.textContent = 'Cada persona votará en secreto, pasando el dispositivo cuando termine.';
  state.votes = [];
  state.votingOrder = activePlayers;
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
  voteChoice.value = '';
  prepareVoteStep();
}

function finalizeVoting() {
  votePanel.classList.add('hidden');
  voteResult.classList.remove('hidden');
  voteIntro.textContent = 'Resultados de la votación secreta.';

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
    if (!state.roundResolved) {
      startVoteButton.disabled = false;
      startVoteButton.textContent = 'Reintentar votación';
    }
    voteIntro.textContent = 'No hubo votos registrados. Intenten otra vez cuando estén listos.';
    return;
  }

  const breakdown = ordered.map(([name, count]) => `${name}: ${count}`).join(' · ');

  if (leaders.length === 1) {
    voteSummary.textContent = `La mayoría acusó a ${leaders[0]} con ${maxVotes} voto${maxVotes === 1 ? '' : 's'}. (${breakdown})`;
  } else {
    voteSummary.textContent = `Hubo un empate entre ${leaders.join(', ')} con ${maxVotes} voto${maxVotes === 1 ? '' : 's'}. (${breakdown})`;
  }

  if (leaders.length !== 1) {
    voteOutcome.textContent = 'Empate sin eliminación. Hablen un poco más y vuelvan a intentarlo.';
    if (!state.roundResolved) {
      startVoteButton.disabled = false;
      startVoteButton.textContent = 'Reintentar votación';
    }
    voteIntro.textContent = 'Empate sin eliminación. Intenten otra votación.';
    return;
  }

  const accusedName = leaders[0];
  const accusedIndex = state.players.indexOf(accusedName);
  if (!state.activePlayers.has(accusedIndex)) {
    voteOutcome.textContent = `${accusedName} ya no está en juego. Realicen otra votación.`;
    if (!state.roundResolved) {
      startVoteButton.disabled = false;
      startVoteButton.textContent = 'Reintentar votación';
    }
    voteIntro.textContent = 'Elijan a alguien que siga en juego para continuar.';
    return;
  }

  const impostorName = state.players[state.impostorIndex];

  if (accusedIndex === state.impostorIndex) {
    voteOutcome.textContent = `¡Acertaron! ${impostorName} era el impostor. La palabra secreta era "${state.secretWord}".`;
    state.roundResolved = true;
    startVoteButton.disabled = true;
    startVoteButton.textContent = 'Votación finalizada';
    voteIntro.textContent = 'Fin de la ronda: el impostor fue encontrado.';
    return;
  }

  state.activePlayers.delete(accusedIndex);
  state.eliminated.add(accusedIndex);
  const remaining = state.activePlayers.size;

  if (remaining <= 2) {
    voteOutcome.textContent = `Quedan ${remaining} jugadores y el impostor sigue oculto. Era ${impostorName}. La palabra secreta era "${state.secretWord}".`;
    state.roundResolved = true;
    startVoteButton.disabled = true;
    startVoteButton.textContent = 'Ronda finalizada';
    voteIntro.textContent = 'El impostor se salió con la suya esta ronda.';
  } else {
    voteOutcome.textContent = `${accusedName} fue eliminado pero no era el impostor. Continúen votando.`;
    startVoteButton.disabled = false;
    startVoteButton.textContent = 'Nueva votación';
    voteIntro.textContent = 'Inicia otra ronda de votación con las personas restantes.';
  }
}

function resetRound() {
  setupSection.classList.remove('hidden');
  roundSection.classList.add('hidden');
  state.assignments = [];
  state.currentIndex = 0;
  state.revealed = false;
  state.players = [];
  state.activePlayers = new Set();
  state.eliminated = new Set();
  state.impostorIndex = null;
  state.votes = [];
  state.votingIndex = 0;
  state.votingOrder = [];
  state.secretWord = null;
  state.category = null;
  state.roundResolved = false;
  toggleWordButton.disabled = false;
  toggleWordButton.textContent = 'Mostrar';
  wordDisplay.textContent = '';
  clearWordVisual();
  voteIntro.textContent = 'Cuando terminen de debatir, inicien la votación secreta.';
  startVoteButton.disabled = true;
  startVoteButton.textContent = 'Comenzar votación';
  votePanel.classList.add('hidden');
  voteResult.classList.add('hidden');
  voteInstructions.textContent = '';
  voteChoice.innerHTML = '';
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
