export const navItems = [
  { name: "Sobre mi", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Contacto", link: "#contact" },
  // { name: "Experiencia", link: "#experience" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Priorizo la colaboración con el cliente, fomentando la comunicación abierta.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Soy muy flexible con las comunicaciones por zona horaria.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi stack",
    description: "Intento constantemente mejorar.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de la tecnología con pasión por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente estoy construyendo un producto digital desde 0 con IA.",
    description: "Primicia",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Queres empezar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sitio web animado de Apple iPhone 3D",
    des: "Desarrollada con React. Se implementaron animaciones fluidas utilizando GSAP y Sentry para el monitoreo",
    img: "/iphone.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/francorinque/Iphone-website",
    deployLink: "https://iphone-website-chi.vercel.app/",
  },
  {
    id: 2,
    title: "RMovies, sitio web de peliculas y series de tv.",
    des: "Utilizando la API de TMDB, con animaciones creadas con Framer Motion y estilos implementados mediante Styled Components",
    img: "/rmovies.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/francorinque/RMovies",
    deployLink: "https://r-movies-two.vercel.app/",
  },
  {
    id: 3,
    title: "RNews, sitio web de noticias.",
    des: "Noticias en línea que integra la API del New York Times. Permite búsqueda, filtrado por etiquetas y paginación infinita mediante scroll",
    img: "/rnews.png",
    iconLists: ["/re.svg", "/tail.svg", "/zustand.svg"],
    link: "https://github.com/francorinque/RNews-Times",
    deployLink: "https://r-news-times.vercel.app/",
  },
  {
    id: 4,
    title: "Twitch Subscription",
    des: "Prototipo personal que demuestra el concepto de suscripción a múltiples canales de Twitch con un solo clic",
    img: "/twitch.png",
    iconLists: ["/html5.svg", "/tail.svg", "/css_old.svg"],
    link: "https://github.com/francorinque/twitch-subscription",
    deployLink: "https://twitch-subscription.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/francorinque",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/franco-agustin-rinque/",
  },
];
