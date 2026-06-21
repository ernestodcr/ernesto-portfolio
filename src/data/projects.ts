export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
}

export const projects: readonly Project[] = [
  {
    title: "Sistema de Control Horario",
    description: "Aplicación web Full-Stack comercial estructurada como monorrepo. Implementa una SPA fluida y responsiva con Angular 21 (renderizado Zoneless) comunicada de forma asíncrona con una API REST en FastAPI y SQLite. [Nota: Enlace Demo limitado al Frontend visual; el login y la base de datos se ejecutan clonando el repositorio local].",
    tech: ["Angular 21", "TypeScript", "FastAPI", "Python", "Pydantic", "SQLite", "RxJS", "Vercel"],
    image: "/images/projects/control-horario.jpg",
    github: "https://github.com/ernestodcr/time-control-system",
    demo: "https://time-control-system.vercel.app"
  },
  {
    title: "Peluquería Palencia - Gestión Full Stack",
    description: "Aplicación Full Stack con arquitectura modular para la gestión de reservas e inventario de un salón de belleza. Implementa un motor dinámico anticolisiones horarias para evitar duplicidades, autenticación segura mediante tokens JWT y sincronización estricta de husos horarios con almacenamiento PostgreSQL en la nube.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    image: "/images/projects/peluqueria.jpg", 
    github: "https://github.com/ernestodcr/peluqueria-palencia"
  },
  {
    title: "Academia de Idiomas - Sistema de Gestión Escolar",
    description: "Aplicación Full Stack basada en la arquitectura Modelo-Vista-Controlador (MVC) para la administración de centros educativos. Implementa persistencia de datos relacionales con SQLite, lógica de negocio orientada a objetos en Python con Flask y una interfaz web dinámica que genera reportes automatizados en Excel y gráficos estadísticos.",
    tech: ["Python", "Flask", "SQLite", "SQL", "JavaScript", "HTML", "CSS"], 
    image: "/images/projects/academia-idiomas.jpg",
    github: "https://github.com/ernestodcr/academia-idiomas"
  },
  {
    title: "High Priority Tasks",
    description: "Gestor avanzado de tareas desarrollado con una arquitectura reactiva basada en Vue 3 (Composition API). Implementa comunicación desacoplada entre componentes mediante eventos personalizados, propiedades computadas para el cálculo de progreso en tiempo real y estilos encapsulados con Scoped CSS en un entorno de desarrollo optimizado.",
    tech: ["Vue 3", "Vite", "JavaScript", "Scoped CSS", "Node.js"],
    image: "/images/projects/tasks.jpg",
    github: "https://github.com/ernestodcr/high-priority-tasks",
    demo: "https://high-priority-tasks.vercel.app/"
  },
  {
    title: "Analizador de Notas con NumPy",
    description: "Software de análisis numérico enfocado en el procesamiento de datos académicos. Automatiza el cálculo estadístico y la estructuración matricial de información, alineado con mi especialización en Python.",
    tech: ["Python", "NumPy", "Jupyter Notebook", "Venv", "Git"],
    image: "/images/projects/notas-numpy.jpg",
    github: "https://github.com/ernestodcr/analizador-notas-numpy"
  },
  {
    title: "Weather App - Consulta en Tiempo Real",
    description: "Aplicación web modular enfocada en el consumo de APIs asíncronas y diseño adaptativo. Implementa una arquitectura desacoplada mediante composables en Vue 3 para gestionar el estado meteorológico global y la persistencia de datos.",
    tech: ["Vue 3", "Vite", "JavaScript", "Bootstrap 5", "Axios", "CSS Variables"],
    image: "/images/projects/weather-app.jpg",
    github: "https://github.com/ernestodcr/vue-weather-app/tree/main",
    demo: "https://vue-weather-app-omega-two.vercel.app/"
  },
  {
    title: "Palencia Burger Co - Carta Digital Interactiva",
    description: "Aplicación web comercial basada en WordPress y maquetada a medida con Elementor, diseñada bajo un enfoque mobile-first para la digitalización de menús en restauración. Implementa una estructura optimizada para la visualización fluida de productos en dispositivos móviles, persistencia en base de datos relacional para la gestión del catálogo de ingredientes y estilos visuales personalizados mediante un entorno de desarrollo local eficiente.",
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "Nginx", "LocalWP"],
    image: "/images/projects/palencia-burger.jpg",
    github: "https://github.com/ernestodcr/palencia-burger-web/tree/main",
    demo: "https://palencia-burger-web.vercel.app/"
  }
] as const;
