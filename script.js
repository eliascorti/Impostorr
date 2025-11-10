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
  "Deportistas históricos y actuales": [
    "Michael Jordan",
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Serena Williams",
    "Usain Bolt",
    "Michael Phelps",
    "Muhammad Ali",
    "Roger Federer",
    "Rafael Nadal",
    "Novak Djokovic",
    "Diego Maradona",
    "Pelé",
    "Simone Biles",
    "Tiger Woods",
    "LeBron James",
    "Kobe Bryant",
    "Nadia Comaneci",
    "Magic Johnson",
    "Larry Bird",
    "Carl Lewis",
    "Marta",
    "Zinedine Zidane",
    "Ronaldinho",
    "Tom Brady",
    "Lewis Hamilton",
    "Ayrton Senna",
    "Valentino Rossi",
    "Mike Tyson",
    "Stephen Curry",
    "Martina Navratilova"
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
  "Carreras": [
    "Medicina",
    "Derecho",
    "Ingeniería Civil",
    "Ingeniería Industrial",
    "Ingeniería Informática",
    "Arquitectura",
    "Contador Público",
    "Administración de Empresas",
    "Economía",
    "Psicología",
    "Periodismo",
    "Marketing",
    "Publicidad",
    "Diseño Gráfico",
    "Diseño Industrial",
    "Relaciones Internacionales",
    "Relaciones Públicas",
    "Biotecnología",
    "Ingeniería Química",
    "Ingeniería Mecánica",
    "Ingeniería Eléctrica",
    "Enfermería",
    "Farmacia",
    "Odontología",
    "Veterinaria",
    "Trabajo Social",
    "Recursos Humanos",
    "Turismo",
    "Gastronomía",
    "Educación Física"
  ],
  "Futbol Argentino": [
    "Boca Juniors",
    "River Plate",
    "Independiente",
    "Racing Club",
    "San Lorenzo",
    "Huracán",
    "Vélez Sarsfield",
    "Argentinos Juniors",
    "Estudiantes de La Plata",
    "Gimnasia y Esgrima La Plata",
    "Lanús",
    "Banfield",
    "Newell's Old Boys",
    "Rosario Central",
    "Colón",
    "Unión de Santa Fe",
    "Talleres de Córdoba",
    "Belgrano",
    "Godoy Cruz",
    "Atlético Tucumán",
    "Central Córdoba",
    "Sarmiento de Junín",
    "Patronato",
    "Aldosivi",
    "Defensa y Justicia",
    "Arsenal de Sarandí",
    "Platense",
    "Barracas Central",
    "Tigre",
    "Instituto"
  ],
  "Juegos": [
    "Ajedrez",
    "Monopoly",
    "Scrabble",
    "Catan",
    "Risk",
    "Uno",
    "Jenga",
    "Clue",
    "Pictionary",
    "Twister",
    "Dominó",
    "Poker",
    "Blackjack",
    "Bingo",
    "Fortnite",
    "Minecraft",
    "League of Legends",
    "Valorant",
    "Among Us",
    "Fall Guys",
    "Overwatch",
    "Counter-Strike",
    "FIFA",
    "Call of Duty",
    "The Legend of Zelda",
    "Super Mario Odyssey",
    "Animal Crossing",
    "Genshin Impact",
    "Rocket League",
    "Apex Legends"
  ],
  "Jugadores Argentinos": [
    "Lionel Messi",
    "Diego Maradona",
    "Juan Román Riquelme",
    "Gabriel Batistuta",
    "Sergio Agüero",
    "Ángel Di María",
    "Javier Mascherano",
    "Gonzalo Higuaín",
    "Carlos Tevez",
    "Hernán Crespo",
    "Mario Kempes",
    "Ricardo Bochini",
    "Ariel Ortega",
    "Fernando Redondo",
    "Javier Zanetti",
    "Pablo Aimar",
    "Esteban Cambiasso",
    "Juan Sebastián Verón",
    "Nicolás Otamendi",
    "Emiliano Martínez",
    "Lautaro Martínez",
    "Paulo Dybala",
    "Rodrigo De Paul",
    "Leandro Paredes",
    "Lisandro Martínez",
    "Ángel Correa",
    "Giovani Lo Celso",
    "Claudio Caniggia",
    "Oscar Ruggeri",
    "Walter Samuel"
  ],
  "Streamers Famosos": [
    "Ibai Llanos",
    "AuronPlay",
    "El Rubius",
    "TheGrefg",
    "Ninja",
    "Pokimane",
    "xQc",
    "Shroud",
    "Myth",
    "Tfue",
    "Summit1g",
    "Sodapoppin",
    "Nickmercs",
    "Loserfruit",
    "Valkyrae",
    "TimTheTatman",
    "Sykkuno",
    "ElMariana",
    "Juansguarnizo",
    "Alexby11",
    "Vegetta777",
    "Luzu",
    "CouRageJD",
    "Dream",
    "Sapnap",
    "Karl Jacobs",
    "Quackity",
    "AriGameplays",
    "WindyGirk",
    "Coscu"
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
const onlineCategorySelect = document.getElementById('online-category');
const modeRadios = document.querySelectorAll('input[name="game-mode"]');
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

const onlineSetupSection = document.getElementById('online-setup');
const chooseHostButton = document.getElementById('choose-host');
const chooseJoinButton = document.getElementById('choose-join');
const onlineHostSetup = document.getElementById('online-host-setup');
const onlineJoinSetup = document.getElementById('online-join-setup');
const hostNameInput = document.getElementById('host-name');
const createRoomButton = document.getElementById('create-room');
const closeRoomButton = document.getElementById('close-room');
const copyRoomButton = document.getElementById('copy-room');
const roomDetails = document.getElementById('room-details');
const roomCodeSpan = document.getElementById('room-code');
const joinForm = document.getElementById('join-form');
const joinCodeInput = document.getElementById('join-code');
const joinNameInput = document.getElementById('join-name');
const joinFeedback = document.getElementById('join-feedback');

const onlineHostCard = document.getElementById('online-host-card');
const hostRoomLabel = document.getElementById('host-room-label');
const hostDisplayName = document.getElementById('host-display-name');
const hostPlayerList = document.getElementById('online-player-list');
const hostEmptyState = document.getElementById('host-empty');
const hostStartRoundButton = document.getElementById('host-start-round');
const hostOpenVoteButton = document.getElementById('host-open-vote');
const hostEndRoundButton = document.getElementById('host-end-round');
const hostRoundInfo = document.getElementById('host-round-info');
const hostRoundCategory = document.getElementById('host-round-category');
const hostRoundWord = document.getElementById('host-round-word');
const hostRoundImpostor = document.getElementById('host-round-impostor');
const hostMessages = document.getElementById('host-messages');

const onlinePlayerCard = document.getElementById('online-player-card');
const playerCardTitle = document.getElementById('player-card-title');
const playerMessages = document.getElementById('player-messages');
const playerRolePanel = document.getElementById('player-role-panel');
const playerRoleText = document.getElementById('player-role-text');
const playerToggleWordButton = document.getElementById('player-toggle-word');
const playerWordWrapper = document.getElementById('player-word-wrapper');
const playerWordDisplay = document.getElementById('player-word');
const playerWordVisual = document.getElementById('player-word-visual');
const playerWordImage = document.getElementById('player-word-image');
const playerWordCaption = document.getElementById('player-word-caption');
const playerVotePanel = document.getElementById('player-vote-panel');
const playerVoteInstructions = document.getElementById('player-vote-instructions');
const playerVoteForm = document.getElementById('player-vote-form');
const playerVoteChoice = document.getElementById('player-vote-choice');
const playerVoteLabel = document.getElementById('player-vote-label');
const playerLeaveButton = document.getElementById('player-leave');

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

const appState = {
  mode: 'local'
};

const onlineState = {
  role: null,
  peer: null,
  hostName: '',
  roomCode: '',
  connections: new Map(),
  players: [],
  activePlayers: new Set(),
  eliminated: new Set(),
  secretWord: null,
  category: null,
  impostorId: null,
  image: null,
  roundActive: false,
  votingOpen: false,
  votes: new Map(),
  awaitingVotes: 0,
  playerConnection: null,
  playerId: null,
  selfName: '',
  playerRole: null,
  playerWord: null,
  playerImage: null,
  playerReveal: false
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
  wordImage.onerror = null;
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

function buildUnsplashUrl(...terms) {
  const query = normalizeForQuery(
    terms
      .filter(Boolean)
      .join(' ')
  );

  if (!query) {
    return null;
  }

  return `https://source.unsplash.com/featured/400x300?${query}`;
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
    const flagUrl = getFlagUrl(label);
    return flagUrl || buildUnsplashUrl(label, 'bandera');
  }

  if (category === 'Animales') {
    return buildUnsplashUrl(label, 'animal');
  }

  if (category === 'Animales marinos') {
    return buildUnsplashUrl(label, 'animal marino');
  }

  if (category === 'Tecnología y gadgets') {
    return buildUnsplashUrl(label, 'tecnología');
  }

  return buildUnsplashUrl(label, category);
}

function getWordVisualMeta(category, label) {
  const imageUrl = getImageUrl(category, label);
  if (!imageUrl) {
    return null;
  }

  let caption = `Referencia visual de ${label}`;
  if (category === 'Países') {
    caption = `Bandera de ${label}`;
  } else if (category === 'Tecnología y gadgets') {
    caption = `Referencia ilustrativa: ${label}`;
  } else if (category === 'Animales' || category === 'Animales marinos') {
    caption = `Imagen ilustrativa de ${label}`;
  }

  return { url: imageUrl, alt: label, caption };
}

function showWordVisual(category, label) {
  const visual = getWordVisualMeta(category, label);
  if (!visual) {
    clearWordVisual();
    return;
  }

  if (!wordVisual || !wordImage || !wordCaption) {
    return;
  }

  wordImage.onerror = () => {
    const fallbackUrl = buildUnsplashUrl(category);
    wordImage.onerror = null;

    if (fallbackUrl && wordImage.src !== fallbackUrl) {
      wordImage.src = fallbackUrl;
      wordImage.alt = category;
      wordCaption.textContent = `Referencia visual asociada a ${category.toLowerCase()}`;
      wordVisual.classList.remove('hidden');
    } else {
      clearWordVisual();
    }
  };

  wordImage.src = visual.url;
  wordImage.alt = visual.alt;
  wordCaption.textContent = visual.caption;
  wordVisual.classList.remove('hidden');
}

function populateCategories() {
  const names = Object.keys(categories).sort((a, b) => a.localeCompare(b, 'es'));
  const selects = [categorySelect, onlineCategorySelect].filter(Boolean);
  selects.forEach((select) => {
    select.innerHTML = '';
    for (const name of names) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = `${name} (${categories[name].length})`;
      select.appendChild(option);
    }
  });
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

function pushMessage(container, text, type = 'info') {
  if (!container) {
    return;
  }
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = text;
  container.prepend(message);
  const maxMessages = 6;
  while (container.children.length > maxMessages) {
    container.removeChild(container.lastChild);
  }
}

function resetHostUi() {
  if (hostPlayerList) {
    hostPlayerList.innerHTML = '';
  }
  if (hostEmptyState) {
    hostEmptyState.classList.remove('hidden');
  }
  if (hostRoomLabel) {
    hostRoomLabel.textContent = '';
  }
  if (hostDisplayName) {
    hostDisplayName.textContent = '';
  }
  if (hostStartRoundButton) {
    hostStartRoundButton.disabled = true;
  }
  if (hostOpenVoteButton) {
    hostOpenVoteButton.classList.add('hidden');
    hostOpenVoteButton.disabled = true;
  }
  if (hostEndRoundButton) {
    hostEndRoundButton.classList.add('hidden');
  }
  if (hostRoundInfo) {
    hostRoundInfo.classList.add('hidden');
  }
  if (hostRoundCategory) {
    hostRoundCategory.textContent = '';
  }
  if (hostRoundWord) {
    hostRoundWord.textContent = '';
  }
  if (hostRoundImpostor) {
    hostRoundImpostor.textContent = '';
  }
  if (hostMessages) {
    hostMessages.innerHTML = '';
  }
}

function resetPlayerUi() {
  if (playerMessages) {
    playerMessages.innerHTML = '';
  }
  if (playerRolePanel) {
    playerRolePanel.classList.add('hidden');
  }
  if (playerVotePanel) {
    playerVotePanel.classList.add('hidden');
  }
  if (playerWordWrapper) {
    playerWordWrapper.classList.add('hidden');
  }
  if (playerWordDisplay) {
    playerWordDisplay.textContent = '';
  }
  if (playerWordImage) {
    playerWordImage.removeAttribute('src');
    playerWordImage.alt = '';
  }
  if (playerWordCaption) {
    playerWordCaption.textContent = '';
  }
  if (playerToggleWordButton) {
    playerToggleWordButton.textContent = 'Mostrar';
    playerToggleWordButton.disabled = false;
  }
  if (playerVoteChoice) {
    playerVoteChoice.innerHTML = '';
  }
  if (playerVoteInstructions) {
    playerVoteInstructions.textContent = '';
  }
  if (playerLeaveButton) {
    playerLeaveButton.disabled = true;
  }
}

function cleanupOnlineState() {
  if (onlineState.peer) {
    try {
      onlineState.peer.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  if (onlineState.playerConnection && onlineState.playerConnection.open) {
    try {
      onlineState.playerConnection.close();
    } catch (error) {
      console.error(error);
    }
  }

  onlineState.peer = null;
  onlineState.connections.clear();
  onlineState.role = null;
  onlineState.hostName = '';
  onlineState.roomCode = '';
  onlineState.players = [];
  onlineState.activePlayers.clear();
  onlineState.eliminated.clear();
  onlineState.secretWord = null;
  onlineState.category = null;
  onlineState.impostorId = null;
  onlineState.image = null;
  onlineState.roundActive = false;
  onlineState.votingOpen = false;
  onlineState.votes.clear();
  onlineState.awaitingVotes = 0;
  onlineState.playerConnection = null;
  onlineState.playerId = null;
  onlineState.selfName = '';
  onlineState.playerRole = null;
  onlineState.playerWord = null;
  onlineState.playerImage = null;
  onlineState.playerReveal = false;

  if (roomDetails) {
    roomDetails.classList.add('hidden');
  }
  if (createRoomButton) {
    createRoomButton.disabled = false;
    createRoomButton.textContent = 'Generar código de sala';
  }
  if (hostNameInput) {
    hostNameInput.value = '';
  }

  resetHostUi();
  resetPlayerUi();

  if (joinForm) {
    joinForm.reset();
  }
  if (joinFeedback) {
    joinFeedback.innerHTML = '';
  }
  if (onlineHostSetup) {
    onlineHostSetup.classList.add('hidden');
  }
  if (onlineJoinSetup) {
    onlineJoinSetup.classList.add('hidden');
  }
  if (chooseHostButton) {
    chooseHostButton.disabled = false;
  }
  if (chooseJoinButton) {
    chooseJoinButton.disabled = false;
  }
  if (onlineHostCard) {
    onlineHostCard.classList.add('hidden');
  }
  if (onlinePlayerCard) {
    onlinePlayerCard.classList.add('hidden');
  }
}

function switchGameMode(mode) {
  if (mode === appState.mode) {
    return;
  }

  if (mode === 'online') {
    resetRound();
    if (setupSection) {
      setupSection.classList.add('hidden');
    }
    if (roundSection) {
      roundSection.classList.add('hidden');
    }
    if (onlineSetupSection) {
      onlineSetupSection.classList.remove('hidden');
    }
  } else {
    resetRound();
    cleanupOnlineState();
    if (onlineSetupSection) {
      onlineSetupSection.classList.add('hidden');
    }
    if (setupSection) {
      setupSection.classList.remove('hidden');
    }
  }

  appState.mode = mode;
}

function showHostSetup() {
  if (onlineState.role === 'player') {
    cleanupOnlineState();
  }
  onlineState.role = 'host';
  if (onlineJoinSetup) {
    onlineJoinSetup.classList.add('hidden');
  }
  if (onlineHostSetup) {
    onlineHostSetup.classList.remove('hidden');
  }
  if (!onlineState.peer) {
    resetHostUi();
  }
}

function showJoinSetup() {
  if (onlineState.role === 'host') {
    cleanupOnlineState();
  }
  onlineState.role = 'player';
  if (onlineHostSetup) {
    onlineHostSetup.classList.add('hidden');
  }
  if (onlineJoinSetup) {
    onlineJoinSetup.classList.remove('hidden');
  }
  resetPlayerUi();
}

function getPlayerNameById(id) {
  const player = onlineState.players.find((entry) => entry.id === id);
  return player ? player.name : 'Jugador';
}

function broadcast(payload, excludeId = null) {
  onlineState.connections.forEach((connection, id) => {
    if (connection.open && id !== excludeId) {
      connection.send(payload);
    }
  });
}

function broadcastPlayerList() {
  const payload = {
    type: 'player-list',
    players: onlineState.players.map((player) => ({
      id: player.id,
      name: player.name,
      eliminated: onlineState.eliminated.has(player.id),
      connected: player.connected
    }))
  };
  broadcast(payload);
}

function updateHostControls() {
  if (!hostPlayerList) {
    return;
  }

  hostPlayerList.innerHTML = '';
  onlineState.players.forEach((player) => {
    const item = document.createElement('li');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = player.name;
    item.appendChild(nameSpan);

    const tag = document.createElement('span');
    tag.classList.add('player-tag');

    if (!player.connected) {
      tag.classList.add('offline');
      tag.textContent = 'Desconectado';
    } else if (onlineState.roundActive && onlineState.eliminated.has(player.id)) {
      tag.classList.add('eliminated');
      tag.textContent = 'Eliminado';
    } else if (onlineState.roundActive) {
      tag.classList.add('active');
      tag.textContent = 'En juego';
    } else {
      tag.classList.add('active');
      tag.textContent = 'Disponible';
    }

    item.appendChild(tag);
    hostPlayerList.appendChild(item);
  });

  if (hostEmptyState) {
    hostEmptyState.classList.toggle('hidden', onlineState.players.length > 0);
  }

  const connectedPlayers = onlineState.players.filter((player) => player.connected).length;

  if (hostStartRoundButton) {
    hostStartRoundButton.disabled = !(connectedPlayers >= 3) || onlineState.roundActive;
  }

  if (hostOpenVoteButton) {
    if (onlineState.roundActive) {
      hostOpenVoteButton.classList.remove('hidden');
      hostOpenVoteButton.disabled = onlineState.votingOpen || onlineState.activePlayers.size <= 2;
    } else {
      hostOpenVoteButton.classList.add('hidden');
      hostOpenVoteButton.disabled = true;
    }
  }

  if (hostEndRoundButton) {
    if (onlineState.roundActive) {
      hostEndRoundButton.classList.remove('hidden');
    } else {
      hostEndRoundButton.classList.add('hidden');
    }
  }
}

function handleHostConnection(connection) {
  onlineState.connections.set(connection.peer, connection);
  connection.on('data', (payload) => {
    handleHostData(connection, payload);
  });
  connection.on('close', () => {
    handleHostDisconnect(connection.peer);
  });
  connection.on('error', () => {
    handleHostDisconnect(connection.peer);
  });
}

function handleHostData(connection, payload) {
  if (!payload || typeof payload !== 'object') {
    return;
  }

  switch (payload.type) {
    case 'join':
      handleJoinRequest(connection, payload);
      break;
    case 'vote':
      handleIncomingVote(connection.peer, payload);
      break;
    case 'leave':
      handleHostDisconnect(connection.peer);
      break;
    default:
      break;
  }
}

function handleJoinRequest(connection, payload) {
  if (!payload || typeof payload.name !== 'string') {
    connection.send({ type: 'join-rejected', reason: 'Nombre inválido.' });
    connection.close();
    return;
  }

  const requestedName = payload.name.trim();
  if (!requestedName) {
    connection.send({ type: 'join-rejected', reason: 'Necesitás elegir un nombre para unirte.' });
    connection.close();
    return;
  }

  const duplicate = onlineState.players.some((player) => player.name.toLowerCase() === requestedName.toLowerCase());
  if (duplicate) {
    connection.send({ type: 'join-rejected', reason: 'Ese nombre ya está en uso dentro de la sala.' });
    connection.close();
    return;
  }

  let player = onlineState.players.find((entry) => entry.id === connection.peer);
  if (!player) {
    player = { id: connection.peer, name: requestedName, connected: true };
    onlineState.players.push(player);
  } else {
    player.name = requestedName;
    player.connected = true;
  }

  if (!onlineState.roundActive) {
    onlineState.activePlayers.add(connection.peer);
    onlineState.eliminated.delete(connection.peer);
  }

  connection.send({
    type: 'join-accepted',
    playerId: connection.peer,
    name: requestedName,
    roomCode: onlineState.roomCode,
    hostName: onlineState.hostName || 'Anfitrión',
    roundActive: onlineState.roundActive
  });

  if (onlineState.roundActive) {
    connection.send({
      type: 'round-status',
      message: 'La ronda está en curso. Se te sumará a la próxima ronda automática.',
      category: onlineState.category
    });
  }

  pushMessage(hostMessages, `${requestedName} se conectó a la sala.`, 'success');
  broadcastPlayerList();
  updateHostControls();
}

function handleHostDisconnect(peerId) {
  const connection = onlineState.connections.get(peerId);
  if (connection && connection.open) {
    try {
      connection.close();
    } catch (error) {
      console.error(error);
    }
  }
  onlineState.connections.delete(peerId);

  const player = onlineState.players.find((entry) => entry.id === peerId);
  if (!player) {
    return;
  }

  player.connected = false;
  onlineState.activePlayers.delete(peerId);

  broadcastPlayerList();
  updateHostControls();

  pushMessage(hostMessages, `${player.name} se desconectó.`, 'warning');

  if (!onlineState.roundActive) {
    return;
  }

  if (peerId === onlineState.impostorId) {
    endHostRound(`${player.name} se desconectó y era el impostor.`, true);
    return;
  }

  if (onlineState.activePlayers.size <= 2) {
    endHostRound('La ronda se canceló por falta de jugadores suficientes.', false);
  }
}

function initializeHostPeer() {
  if (typeof Peer === 'undefined') {
    pushMessage(hostMessages, 'No se pudo cargar la librería de conexión en línea.', 'error');
    return;
  }

  const displayName = hostNameInput ? hostNameInput.value.trim() : '';
  onlineState.hostName = displayName;

  if (onlineState.peer) {
    try {
      onlineState.peer.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  if (createRoomButton) {
    createRoomButton.disabled = true;
    createRoomButton.textContent = 'Generando...';
  }

  try {
    const peer = new Peer(undefined, { debug: 2 });
    onlineState.peer = peer;

    peer.on('open', (id) => {
      onlineState.roomCode = id;
      if (roomCodeSpan) {
        roomCodeSpan.textContent = id;
      }
      if (roomDetails) {
        roomDetails.classList.remove('hidden');
      }
      if (hostRoomLabel) {
        hostRoomLabel.textContent = `Código de sala: ${id}`;
      }
      if (hostDisplayName) {
        hostDisplayName.textContent = displayName ? `Anfitrión: ${displayName}` : 'Anfitrión listo para jugar';
      }
      if (onlineHostCard) {
        onlineHostCard.classList.remove('hidden');
      }
      if (chooseHostButton) {
        chooseHostButton.disabled = true;
      }
      if (chooseJoinButton) {
        chooseJoinButton.disabled = true;
      }
      pushMessage(hostMessages, 'Compartí el código para que se sumen. Con tres jugadores conectados podés iniciar.', 'info');
      if (createRoomButton) {
        createRoomButton.disabled = false;
        createRoomButton.textContent = 'Regenerar código';
      }
      updateHostControls();
    });

    peer.on('connection', handleHostConnection);

    peer.on('error', (error) => {
      console.error(error);
      pushMessage(hostMessages, 'No se pudo crear la sala. Reintentá en unos segundos.', 'error');
      if (createRoomButton) {
        createRoomButton.disabled = false;
        createRoomButton.textContent = 'Generar código de sala';
      }
    });
  } catch (error) {
    console.error(error);
    pushMessage(hostMessages, 'No se pudo inicializar la sala en línea.', 'error');
    if (createRoomButton) {
      createRoomButton.disabled = false;
      createRoomButton.textContent = 'Generar código de sala';
    }
  }
}

function startHostRound() {
  if (!onlineState.peer || !onlineCategorySelect) {
    return;
  }

  const category = onlineCategorySelect.value;
  if (!category) {
    pushMessage(hostMessages, 'Seleccioná una categoría antes de iniciar.', 'error');
    return;
  }

  const connectedPlayers = onlineState.players.filter((player) => player.connected);
  if (connectedPlayers.length < 3) {
    pushMessage(hostMessages, 'Necesitás al menos tres jugadores conectados para empezar.', 'warning');
    return;
  }

  onlineState.roundActive = true;
  onlineState.votingOpen = false;
  onlineState.category = category;
  onlineState.secretWord = null;
  onlineState.impostorId = null;
  onlineState.eliminated.clear();
  onlineState.votes.clear();
  onlineState.image = null;

  onlineState.activePlayers = new Set(connectedPlayers.map((player) => player.id));
  onlineState.awaitingVotes = onlineState.activePlayers.size;

  const pool = categories[category];
  const secretWord = pool[Math.floor(Math.random() * pool.length)];
  onlineState.secretWord = secretWord;

  const impostor = connectedPlayers[Math.floor(Math.random() * connectedPlayers.length)];
  onlineState.impostorId = impostor.id;

  onlineState.image = getWordVisualMeta(category, secretWord);

  if (hostRoundInfo) {
    hostRoundInfo.classList.add('hidden');
  }
  if (hostRoundCategory) {
    hostRoundCategory.textContent = category;
  }
  if (hostRoundWord) {
    hostRoundWord.textContent = secretWord;
  }
  if (hostRoundImpostor) {
    hostRoundImpostor.textContent = impostor.name;
  }

  pushMessage(hostMessages, `Ronda iniciada con ${connectedPlayers.length} jugadores conectados.`, 'info');
  if (onlineState.image) {
    pushMessage(hostMessages, `Se compartió una pista visual para "${secretWord}".`, 'info');
  }

  updateHostControls();
  broadcastRoundStart();
}

function broadcastRoundStart() {
  const payload = {
    type: 'round-start',
    category: onlineState.category,
    totalPlayers: onlineState.activePlayers.size,
    image: onlineState.image
      ? { url: onlineState.image.url, caption: onlineState.image.caption, alt: onlineState.image.alt }
      : null
  };

  onlineState.connections.forEach((connection, id) => {
    if (!connection.open) {
      return;
    }

    connection.send(payload);

    const isImpostor = id === onlineState.impostorId;
    const assignment = {
      type: 'assignment',
      role: isImpostor ? 'impostor' : 'ciudadano'
    };

    if (!isImpostor) {
      assignment.word = onlineState.secretWord;
      assignment.category = onlineState.category;
      if (onlineState.image) {
        assignment.image = payload.image;
      }
    } else if (onlineState.image) {
      assignment.image = payload.image;
    }

    connection.send(assignment);
  });

  broadcastPlayerList();
}

function openHostVoting() {
  if (!onlineState.roundActive) {
    return;
  }

  if (onlineState.activePlayers.size <= 2) {
    pushMessage(hostMessages, 'Solo quedan dos personas en juego. La ronda finalizó.', 'warning');
    return;
  }

  onlineState.votingOpen = true;
  onlineState.votes.clear();
  onlineState.awaitingVotes = onlineState.activePlayers.size;

  if (hostOpenVoteButton) {
    hostOpenVoteButton.disabled = true;
  }

  const options = Array.from(onlineState.activePlayers).map((id) => ({
    id,
    name: getPlayerNameById(id)
  }));

  broadcast({ type: 'vote-open', options });
  pushMessage(hostMessages, 'Votación abierta. Esperando votos secretos...', 'info');
}

function handleIncomingVote(peerId, payload) {
  if (!onlineState.roundActive || !onlineState.votingOpen) {
    return;
  }

  if (!onlineState.activePlayers.has(peerId)) {
    return;
  }

  const targetId = payload && payload.targetId;
  if (!targetId || !onlineState.activePlayers.has(targetId)) {
    const connection = onlineState.connections.get(peerId);
    if (connection && connection.open) {
      connection.send({ type: 'vote-rejected', reason: 'El jugador seleccionado no está disponible.' });
    }
    return;
  }

  onlineState.votes.set(peerId, targetId);

  const connection = onlineState.connections.get(peerId);
  if (connection && connection.open) {
    connection.send({ type: 'vote-confirmed' });
  }

  if (onlineState.votes.size >= onlineState.awaitingVotes) {
    resolveHostVote();
  }
}

function resolveHostVote() {
  onlineState.votingOpen = false;

  const tally = new Map();
  onlineState.votes.forEach((vote) => {
    tally.set(vote, (tally.get(vote) || 0) + 1);
  });

  const ordered = Array.from(tally.entries()).sort((a, b) => {
    if (b[1] === a[1]) {
      return getPlayerNameById(a[0]).localeCompare(getPlayerNameById(b[0]), 'es');
    }
    return b[1] - a[1];
  });

  const highest = ordered[0];
  const maxVotes = highest ? highest[1] : 0;

  if (!highest || maxVotes === 0) {
    broadcast({ type: 'vote-result', status: 'no-votes', message: 'No se registraron votos.' });
    pushMessage(hostMessages, 'Nadie votó. Podés abrir otra votación cuando estén listos.', 'warning');
    updateHostControls();
    return;
  }

  const leaders = ordered.filter(([, votes]) => votes === maxVotes).map(([id]) => id);

  const breakdown = ordered
    .map(([id, votes]) => `${getPlayerNameById(id)}: ${votes}`)
    .join(' · ');

  if (leaders.length !== 1) {
    broadcast({
      type: 'vote-result',
      status: 'tie',
      message: `Empate con ${maxVotes} voto${maxVotes === 1 ? '' : 's'}.`,
      breakdown
    });
    pushMessage(hostMessages, 'La votación terminó en empate. Intenten otra ronda de votos.', 'warning');
    updateHostControls();
    return;
  }

  const eliminatedId = leaders[0];
  const eliminatedName = getPlayerNameById(eliminatedId);
  const impostorName = getPlayerNameById(onlineState.impostorId);

  if (eliminatedId === onlineState.impostorId) {
    broadcast({
      type: 'vote-result',
      status: 'impostor-caught',
      message: `¡${eliminatedName} era el impostor!`,
      breakdown,
      eliminatedId,
      impostorName,
      secretWord: onlineState.secretWord,
      roundEnded: true
    });
    pushMessage(hostMessages, `Detectaron al impostor: ${eliminatedName}.`, 'success');
    endHostRound(`La palabra secreta era "${onlineState.secretWord}".`, true);
    return;
  }

  onlineState.activePlayers.delete(eliminatedId);
  onlineState.eliminated.add(eliminatedId);
  broadcastPlayerList();

  if (onlineState.activePlayers.size <= 2) {
    broadcast({
      type: 'vote-result',
      status: 'impostor-wins',
      message: `${eliminatedName} no era el impostor. Solo quedan ${onlineState.activePlayers.size} personas.`,
      breakdown,
      eliminatedId,
      impostorName,
      secretWord: onlineState.secretWord,
      roundEnded: true
    });
    pushMessage(hostMessages, `El impostor (${impostorName}) ganó esta ronda.`, 'warning');
    endHostRound(`El impostor era ${impostorName}. La palabra secreta era "${onlineState.secretWord}".`, false);
    return;
  }

  broadcast({
    type: 'vote-result',
    status: 'continue',
    message: `${eliminatedName} fue eliminado pero no era el impostor.`,
    breakdown,
    eliminatedId,
    remaining: onlineState.activePlayers.size,
    impostorName,
    secretWord: onlineState.secretWord,
    roundEnded: false
  });
  pushMessage(hostMessages, `${eliminatedName} fue eliminado. Continúan ${onlineState.activePlayers.size} jugadores.`, 'info');
  updateHostControls();
}

function endHostRound(summary, impostorCaught) {
  const impostorName = getPlayerNameById(onlineState.impostorId);
  broadcast({
    type: 'round-end',
    message: summary,
    impostorName,
    secretWord: onlineState.secretWord,
    impostorCaught: Boolean(impostorCaught)
  });

  pushMessage(hostMessages, `Ronda finalizada. ${summary}`, impostorCaught ? 'success' : 'warning');

  if (hostRoundInfo) {
    hostRoundInfo.classList.remove('hidden');
  }

  onlineState.roundActive = false;
  onlineState.votingOpen = false;
  onlineState.activePlayers = new Set(
    onlineState.players.filter((player) => player.connected).map((player) => player.id)
  );
  onlineState.eliminated.clear();
  onlineState.secretWord = null;
  onlineState.category = null;
  onlineState.impostorId = null;
  onlineState.image = null;
  onlineState.votes.clear();

  updateHostControls();
  broadcastPlayerList();
}

function closeHostRoom(announce = true) {
  if (announce) {
    broadcast({ type: 'room-closed', message: 'El anfitrión cerró la sala.' });
  }
  cleanupOnlineState();
}

async function copyRoomCode() {
  if (!navigator.clipboard || !onlineState.roomCode) {
    return;
  }

  try {
    await navigator.clipboard.writeText(onlineState.roomCode);
    pushMessage(hostMessages, 'Código copiado al portapapeles.', 'success');
  } catch (error) {
    console.error(error);
    pushMessage(hostMessages, 'No se pudo copiar el código automáticamente.', 'error');
  }
}

function enableJoinForm(enabled) {
  if (!joinForm) {
    return;
  }
  Array.from(joinForm.elements).forEach((element) => {
    element.disabled = !enabled;
  });
}

function handlePlayerDisconnected(message, type = 'warning') {
  enableJoinForm(true);
  if (playerLeaveButton) {
    playerLeaveButton.disabled = true;
  }
  if (onlinePlayerCard) {
    onlinePlayerCard.classList.remove('hidden');
  }
  resetPlayerUi();
  pushMessage(playerMessages, message, type);
  if (onlineState.playerConnection && onlineState.playerConnection.open) {
    try {
      onlineState.playerConnection.close();
    } catch (error) {
      console.error(error);
    }
  }
  onlineState.playerConnection = null;

  if (onlineState.peer) {
    try {
      onlineState.peer.destroy();
    } catch (error) {
      console.error(error);
    }
    onlineState.peer = null;
  }
  onlineState.playerId = null;
  onlineState.selfName = '';
  onlineState.playerRole = null;
  onlineState.playerWord = null;
  onlineState.playerImage = null;
  onlineState.playerReveal = false;
}

function handleJoinAccepted(payload) {
  onlineState.playerId = payload.playerId;
  onlineState.selfName = payload.name;
  onlineState.roomCode = payload.roomCode;

  enableJoinForm(false);
  resetPlayerUi();

  if (joinFeedback) {
    joinFeedback.innerHTML = '';
  }
  if (playerCardTitle) {
    playerCardTitle.textContent = `Sala ${payload.roomCode}`;
  }
  if (onlinePlayerCard) {
    onlinePlayerCard.classList.remove('hidden');
  }
  if (playerLeaveButton) {
    playerLeaveButton.disabled = false;
  }

  pushMessage(playerMessages, 'Conectado correctamente. Esperá a que comience la ronda.', 'success');
}

function handleRoundStart(payload) {
  resetPlayerUi();
  onlineState.playerRole = null;
  onlineState.playerWord = null;
  onlineState.playerImage = payload.image || null;
  onlineState.playerReveal = false;

  if (playerRolePanel) {
    playerRolePanel.classList.add('hidden');
  }

  const message = payload.category
    ? `Nueva ronda: categoría ${payload.category}.` : 'Nueva ronda en marcha.';
  pushMessage(playerMessages, message, 'info');
}

function handleAssignment(payload) {
  onlineState.playerRole = payload.role;
  onlineState.playerWord = payload.word || null;
  if (payload.image) {
    onlineState.playerImage = payload.image;
  }

  if (!playerRolePanel) {
    return;
  }

  playerRolePanel.classList.remove('hidden');

  if (payload.role === 'impostor') {
    playerRoleText.textContent = 'Sos el impostor. Fingí conocer la palabra y evitá que te descubran.';
    playerToggleWordButton.classList.add('hidden');
    playerWordWrapper.classList.add('hidden');
  } else {
    playerRoleText.textContent = 'Tocá “Mostrar” para ver la palabra secreta en tu dispositivo.';
    playerToggleWordButton.classList.remove('hidden');
    playerToggleWordButton.textContent = 'Mostrar';
    playerWordWrapper.classList.add('hidden');
  }
}

function applyPlayerImage() {
  if (!playerWordVisual || !playerWordImage || !playerWordCaption) {
    return;
  }

  if (!onlineState.playerImage) {
    playerWordVisual.classList.add('hidden');
    playerWordImage.removeAttribute('src');
    playerWordCaption.textContent = '';
    return;
  }

  const { url, caption, alt } = onlineState.playerImage;
  playerWordImage.onerror = () => {
    playerWordImage.onerror = null;
    playerWordVisual.classList.add('hidden');
  };
  playerWordImage.src = url;
  playerWordImage.alt = alt || onlineState.playerWord || 'Referencia visual';
  playerWordCaption.textContent = caption || '';
  playerWordVisual.classList.remove('hidden');
}

function togglePlayerWord() {
  if (onlineState.playerRole === 'impostor') {
    return;
  }

  onlineState.playerReveal = !onlineState.playerReveal;

  if (onlineState.playerReveal) {
    playerWordWrapper.classList.remove('hidden');
    playerToggleWordButton.textContent = 'Ocultar';
    playerWordDisplay.textContent = onlineState.playerWord || '';
    applyPlayerImage();
  } else {
    playerWordWrapper.classList.add('hidden');
    playerToggleWordButton.textContent = 'Mostrar';
  }
}

function handleVoteOpen(payload) {
  if (!playerVotePanel || !playerVoteChoice) {
    return;
  }

  playerVotePanel.classList.remove('hidden');
  playerVoteChoice.innerHTML = '';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Elegí a un jugador';
  placeholder.disabled = true;
  placeholder.selected = true;
  playerVoteChoice.appendChild(placeholder);

  (payload.options || [])
    .filter((option) => option.id !== onlineState.playerId)
    .forEach((option) => {
      const element = document.createElement('option');
      element.value = option.id;
      element.textContent = option.name;
      playerVoteChoice.appendChild(element);
    });

  if (playerVoteInstructions) {
    playerVoteInstructions.textContent = 'Seleccioná en secreto a quién acusás.';
  }
  pushMessage(playerMessages, 'Es tu turno de votar. Elegí a quién querés acusar.', 'info');
}

function submitPlayerVote(event) {
  event.preventDefault();
  if (!playerVoteChoice || !playerVoteChoice.value) {
    if (playerVoteChoice && playerVoteChoice.reportValidity) {
      playerVoteChoice.reportValidity();
    }
    return;
  }

  if (!onlineState.playerConnection || !onlineState.playerConnection.open) {
    return;
  }

  onlineState.playerConnection.send({ type: 'vote', targetId: playerVoteChoice.value });
  if (playerVoteInstructions) {
    playerVoteInstructions.textContent = 'Voto enviado. Esperando resultados...';
  }
  pushMessage(playerMessages, 'Voto registrado. Esperá los resultados del anfitrión.', 'info');
  playerVoteForm.querySelector('button[type="submit"]').disabled = true;
}

function handleVoteResult(payload) {
  if (playerVotePanel) {
    playerVotePanel.classList.add('hidden');
  }
  if (playerVoteForm) {
    playerVoteForm.reset();
    const submitButton = playerVoteForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = false;
    }
  }

  let message = payload.message || 'Resultados de la votación recibidos.';
  let tone = 'info';

  if (payload.status === 'impostor-caught') {
    tone = 'success';
  } else if (payload.status === 'impostor-wins') {
    tone = 'warning';
  } else if (payload.status === 'no-votes' || payload.status === 'tie') {
    tone = 'warning';
  }

  if (payload.breakdown) {
    message = `${message} (${payload.breakdown})`;
  }

  pushMessage(playerMessages, message, tone);
}

function handleRoundEnd(payload) {
  const base = payload.message || 'La ronda finalizó.';
  const detail = payload.impostorName && payload.secretWord
    ? `${payload.impostorName} era el impostor. La palabra secreta era "${payload.secretWord}".`
    : '';
  pushMessage(playerMessages, `${base} ${detail}`.trim(), payload.impostorCaught ? 'success' : 'warning');
}

function joinRoom(event) {
  event.preventDefault();
  if (onlineState.role !== 'player') {
    showJoinSetup();
  }

  if (typeof Peer === 'undefined') {
    pushMessage(joinFeedback, 'No se pudo cargar la librería de conexión. Reintentá más tarde.', 'error');
    return;
  }

  const code = joinCodeInput ? joinCodeInput.value.trim() : '';
  const name = joinNameInput ? joinNameInput.value.trim() : '';

  if (!code || !name) {
    pushMessage(joinFeedback, 'Completá el código de sala y tu nombre para continuar.', 'error');
    return;
  }

  pushMessage(joinFeedback, 'Conectando con la sala...', 'info');

  if (onlineState.peer) {
    try {
      onlineState.peer.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  try {
    const peer = new Peer(undefined, { debug: 1 });
    onlineState.peer = peer;

    peer.on('open', () => {
      const connection = peer.connect(code, { reliable: true });
      onlineState.playerConnection = connection;

      connection.on('open', () => {
        connection.send({ type: 'join', name });
        pushMessage(joinFeedback, 'Conexión establecida. Esperando confirmación del anfitrión...', 'info');
      });

      connection.on('data', (payload) => {
        handlePlayerData(payload);
      });

      connection.on('close', () => {
        handlePlayerDisconnected('La sala se cerró o perdiste la conexión.', 'warning');
      });

      connection.on('error', (error) => {
        console.error(error);
        handlePlayerDisconnected('Hubo un problema con la conexión a la sala.', 'error');
      });
    });

    peer.on('error', (error) => {
      console.error(error);
      pushMessage(joinFeedback, 'No se pudo establecer la conexión inicial.', 'error');
    });
  } catch (error) {
    console.error(error);
    pushMessage(joinFeedback, 'No se pudo crear la conexión local.', 'error');
  }
}

function handlePlayerData(payload) {
  if (!payload || typeof payload !== 'object') {
    return;
  }

  switch (payload.type) {
    case 'join-accepted':
      handleJoinAccepted(payload);
      break;
    case 'join-rejected':
      pushMessage(joinFeedback, payload.reason || 'No se pudo unir a la sala.', 'error');
      handlePlayerDisconnected('No fue posible unirse a la sala.', 'error');
      break;
    case 'player-list':
      // Optional: could show connected players in future.
      break;
    case 'round-start':
      handleRoundStart(payload);
      break;
    case 'assignment':
      handleAssignment(payload);
      break;
    case 'vote-open':
      handleVoteOpen(payload);
      break;
    case 'vote-result':
      handleVoteResult(payload);
      break;
    case 'vote-confirmed':
      pushMessage(playerMessages, 'Tu voto quedó registrado.', 'success');
      break;
    case 'vote-rejected':
      pushMessage(playerMessages, payload.reason || 'No se pudo registrar el voto.', 'error');
      if (playerVotePanel) {
        playerVotePanel.classList.remove('hidden');
      }
      break;
    case 'round-end':
      handleRoundEnd(payload);
      break;
    case 'room-closed':
      handlePlayerDisconnected(payload.message || 'La sala fue cerrada por el anfitrión.', 'warning');
      break;
    case 'round-status':
      pushMessage(playerMessages, payload.message || 'La ronda está en curso.', 'info');
      break;
    default:
      break;
  }
}

function leaveRoom() {
  if (onlineState.playerConnection && onlineState.playerConnection.open) {
    try {
      onlineState.playerConnection.send({ type: 'leave' });
      onlineState.playerConnection.close();
    } catch (error) {
      console.error(error);
    }
  }

  if (onlineState.peer) {
    try {
      onlineState.peer.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  cleanupOnlineState();
  showJoinSetup();
  pushMessage(joinFeedback, 'Saliste de la sala.', 'info');
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

modeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    switchGameMode(radio.value);
  });
});

if (chooseHostButton) {
  chooseHostButton.addEventListener('click', showHostSetup);
}

if (chooseJoinButton) {
  chooseJoinButton.addEventListener('click', showJoinSetup);
}

if (createRoomButton) {
  createRoomButton.addEventListener('click', initializeHostPeer);
}

if (closeRoomButton) {
  closeRoomButton.addEventListener('click', () => closeHostRoom(true));
}

if (copyRoomButton) {
  copyRoomButton.addEventListener('click', copyRoomCode);
}

if (hostStartRoundButton) {
  hostStartRoundButton.addEventListener('click', startHostRound);
}

if (hostOpenVoteButton) {
  hostOpenVoteButton.addEventListener('click', openHostVoting);
}

if (hostEndRoundButton) {
  hostEndRoundButton.addEventListener('click', () => {
    if (!onlineState.roundActive) {
      return;
    }
    endHostRound('El anfitrión finalizó la ronda.', false);
  });
}

if (joinForm) {
  joinForm.addEventListener('submit', joinRoom);
}

if (playerToggleWordButton) {
  playerToggleWordButton.addEventListener('click', togglePlayerWord);
}

if (playerVoteForm) {
  playerVoteForm.addEventListener('submit', submitPlayerVote);
}

if (playerLeaveButton) {
  playerLeaveButton.addEventListener('click', leaveRoom);
}

window.addEventListener('beforeunload', () => {
  if (onlineState.role === 'host') {
    closeHostRoom(true);
  } else if (onlineState.role === 'player') {
    leaveRoom();
  }
});
