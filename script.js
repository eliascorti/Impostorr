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
const roundSummary = document.getElementById('round-summary');

const state = {
  assignments: [],
  currentIndex: 0,
  revealed: false,
  mode: 'standard'
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

  if (!category) {
    alert('Selecciona una categoría para comenzar.');
    return;
  }

  state.mode = mode;
  state.currentIndex = 0;
  state.revealed = false;

  const pool = categories[category];
  let summaryText = '';

  if (mode === 'standard') {
    const secretWord = pool[Math.floor(Math.random() * pool.length)];
    const impostorIndex = Math.floor(Math.random() * players);

    state.assignments = Array.from({ length: players }, (_, index) =>
      index === impostorIndex ? 'IMPOSTOR' : secretWord
    );

    summaryText = `Palabra secreta: ${secretWord}. Hay 1 impostor.`;
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

    summaryText = `Palabra A: ${wordA} (mayoría). Palabra B: ${wordB} (minoría de ${minorityCount}).`;
    roundTitle.textContent = 'Modo difícil: dos pistas';
  }

  setupSection.classList.add('hidden');
  roundSection.classList.remove('hidden');
  toggleWordButton.disabled = false;
  toggleWordButton.textContent = 'Mostrar';
  wordDisplay.textContent = '';

  currentPlayerSpan.textContent = '1';
  instructions.innerHTML =
    'Pasa el dispositivo al jugador <span id="current-player">1</span>. Cuando esté listo, presiona "Mostrar" para revelar su rol. Después presiona "Ocultar" y pasa el dispositivo.';
  currentPlayerSpan = document.getElementById('current-player');

  roundCategory.textContent = category;
  roundSummary.textContent = summaryText;
}

function handleToggle() {
  if (state.currentIndex >= state.assignments.length) {
    return;
  }

  if (!state.revealed) {
    const role = state.assignments[state.currentIndex];
    wordDisplay.textContent = role;
    wordDisplay.classList.toggle('impostor', role === 'IMPOSTOR');
    toggleWordButton.textContent = 'Ocultar';
    state.revealed = true;

    const playerNumber = state.currentIndex + 1;
    instructions.innerHTML = `Jugador ${playerNumber}, memoriza tu palabra y presiona \"Ocultar\" antes de pasar el dispositivo.`;
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
    } else {
      const playerNumber = state.currentIndex + 1;
      instructions.innerHTML = `Pasa el dispositivo al jugador <span id="current-player">${playerNumber}</span> y presiona \"Mostrar\" cuando esté listo.`;
      toggleWordButton.textContent = 'Mostrar';
    }
  }
}

function resetRound() {
  setupSection.classList.remove('hidden');
  roundSection.classList.add('hidden');
  state.assignments = [];
  state.currentIndex = 0;
  state.revealed = false;
  wordDisplay.textContent = '';
}

populateCategories();
setupForm.addEventListener('submit', startRound);
toggleWordButton.addEventListener('click', handleToggle);
resetButton.addEventListener('click', resetRound);
