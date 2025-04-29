import { desc } from "framer-motion/client";

const servicios = [
  {
    slug: "acciones-de-marca",
    title: "Acciones de Marca (ADM)",
    image: "/images/acciones-de-marca.jpg",
    description: "Propuestas creativas y disruptivas que conectan emocionalmente a las personas con tu marca.",
    actividades: [
      { name: "Fosforitos LED", image: "/images/fosforitos-led.jpg", desc: "Material puntual que puede utilizarse como punto de partida para una acción de impacto visual." },
    ],
  },
  {
    slug: "instalaciones-ludicas",
    title: "Instalaciones Lúdicas (IL)",
    image: "/images/instalaciones-ludicas.jpg",
    description: "Juegos y dinámicas físicas que generan experiencias participativas e inmersivas.",
    actividades: [
      { name: "TOOBEEZ", image: "/images/toobeez.jpg", desc: "Sistema modular para construir estructuras y trabajar el trabajo en equipo de forma divertida." },
      { name: "Futgolf", image: "/images/futgolf.jpg", desc: "Fusión entre fútbol y golf, ideal para competencias relajadas en espacios amplios." },
      { name: "PoolBall", image: "/images/poolball.jpg", desc: "Juego gigante que combina pool y fútbol en una mesa inflable." },
      { name: "Spikeball", image: "/images/spikeball.jpg", desc: "Deporte rápido y dinámico en equipos, ideal para espacios reducidos." },
    ],
  },
  {
    slug: "team-building",
    title: "Team Building (TB)",
    image: "/images/team-building.jpg",
    description: "Actividades diseñadas para fortalecer la comunicación y el trabajo en equipo en entornos laborales.",
    actividades: [
      { name: "Lego Serious Play", image: "/images/lego-serious-play.jpg", desc: "Técnica de facilitación que usa piezas de Lego para fomentar la creatividad y la comunicación." },
      { name: "Lip Dub", image: "/images/lipdub.jpg", desc: "Video musical grupal sincronizado, ideal para generar cohesión y diversión." },
      { name: "Impro", image: "/images/impro.jpg", desc: "Técnicas de improvisación teatral para potenciar la espontaneidad y la colaboración." },
      { name: "Ciudad Aventura", image: "/images/ciudad-aventura.jpg", desc: "Recorrido urbano con desafíos que fomentan el trabajo en equipo y la resolución creativa de problemas." },
      { name: "Gran Premio Berg Toys", image: "/images/berg-toys.jpg", desc: "Competencia de autos a pedal que mezcla velocidad, estrategia y cooperación." },
      { name: "Yembé", image: "/images/yembe.jpg", desc: "Dinámica musical grupal con tambores africanos para alinear ritmos y energías." },
      { name: "Vitubrio", image: "/images/vitubrio.jpg", desc: "Actividad lúdica que combina ciencia, juego y estrategia en un laboratorio móvil." },
      { name: "Optimist", image: "/images/optimist.jpg", desc: "Desafío náutico en veleros pequeños que promueve liderazgo y comunicación." },
      { name: "Sugerencia del chef", image: "/images/sugerencia-chef.jpg", desc: "Desafío gastronómico colaborativo, ideal para fomentar el trabajo coordinado bajo presión." },
      { name: "Construyendo la aldea", image: "/images/aldea.jpg", desc: "Actividad constructiva con enfoque comunitario, ideal para fomentar objetivos comunes." },
      { name: "Shortlist Festival", image: "/images/shortlist.jpg", desc: "Producción audiovisual donde los equipos crean y presentan cortometrajes temáticos." },
      { name: "Tras el tesoro del Sacramento", image: "/images/tesoro.jpg", desc: "Búsqueda del tesoro ambientada en Colonia del Sacramento, con pistas y trabajo en equipo." },
    ],
  },
  {
    slug: "programas-consultoria",
    title: "Programas y Consultoría (PyC)",
    image: "/images/consultoria.jpg",
    description: "Soluciones personalizadas para transformar equipos y organizaciones desde adentro.",
    actividades: [
      { name: "Marca empleadora", image: "/images/marca-empleadora.jpg", desc: "Estrategias para posicionar tu organización como un lugar atractivo para trabajar." },
      { name: "Mejora de la comunicación", image: "/images/comunicacion.jpg", desc: "Diagnóstico y activación de herramientas para una comunicación interna más efectiva." },
      { name: "Liderazgo", image: "/images/liderazgo.jpg", desc: "Programas de desarrollo para líderes alineados con la cultura y objetivos de la empresa." },
      { name: "Menú Reset", image: "/images/reset.jpg", desc: "Espacio para replantear hábitos, rutinas y cultura organizacional con foco en bienestar." },
      { name: "Recreación hotelera", image: "/images/recreacion-hotelera.jpg", desc: "Propuesta de entretenimiento y engagement para equipos de hospitalidad." },
    ],
  },
  {
    slug: "eventos-corporativos",
    title: "Eventos Corporativos (EC)",
    image: "/images/eventos-corporativos.jpg",
    description: "Experiencias memorables pensadas para conectar, celebrar o capacitar en clave lúdica.",
    actividades: [
      { name: "Sintonía", image: "/images/sintonia.jpg", desc: "Actividad para alinear energías grupales a través del juego y el ritmo." },
      { name: "Feria temática", image: "/images/feria-tematica.jpg", desc: "Evento con estaciones temáticas personalizadas según la cultura de la empresa." },
      { name: "BeachGames", image: "/images/beachgames.jpg", desc: "Competencias lúdicas al aire libre en formato arena y playa." },
      { name: "Carrera de mente", image: "/images/carrera-mente.jpg", desc: "Trivia colaborativa con desafíos mentales y lógica grupal." },
      { name: "Libera tu talento", image: "/images/libera-talento.jpg", desc: "Espacio para descubrir y compartir habilidades ocultas del equipo." },
      { name: "Recreación a la carta", image: "/images/recreacion-carta.jpg", desc: "Actividades personalizadas según los intereses del grupo o evento." },
      { name: "Quinta esencia", image: "/images/quinta-esencia.jpg", desc: "Experiencia sensorial y simbólica que trabaja la identidad grupal." },
      { name: "Feria de diseños", image: "/images/feria-disenos.jpg", desc: "Espacio expositivo y creativo para compartir innovaciones o ideas." },
      { name: "Oficinas olímpicas", image: "/images/oficinas-olimpicas.jpg", desc: "Competencia interna con desafíos físicos y mentales entre equipos." },
      { name: "Adventure Team Race", image: "/images/adventure-team.jpg", desc: "Carrera de aventura con pruebas colaborativas y al aire libre." },
      { name: "Hijos sin company", image: "/images/hijos-sin-company.jpg", desc: "Evento recreativo para hijos/as de empleados/as, sin participación directa de la empresa." },
    ],
  },
  {
    slug: "aprendizaje-desarrollo",
    title: "Aprendizaje y Desarrollo (AyD)",
    image: "/images/aprendizaje-desarrollo.jpg",
    description: "Propuestas que combinan formación y juego para desarrollar habilidades clave en equipos.",
    actividades: [
      { name: "Ludificación de la docencia", image: "/images/ludificacion.jpg", desc: "Uso de dinámicas lúdicas para transformar procesos educativos en experiencias memorables." },
      { name: "Ibirapita Campamentos", image: "/images/ibirapita-campamentos.jpg", desc: "Campamentos corporativos diseñados para fortalecer vínculos a través del juego y la naturaleza." },
    ],
  },
];

  
  export default servicios;
  