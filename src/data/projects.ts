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
  },
  {
    title: "Corporate Workstation Deployment",
    description: "Simulación y despliegue técnico automatizado de un puesto de trabajo corporativo bajo Windows 10 Pro enfocado a soporte técnico de TI Nivel 1 para TecnoSoluciones S.A. Implementación y optimización del entorno sobre hipervisores Oracle, configuración avanzada de redes locales interconectadas mediante el modo Puente (Bridged) para comunicación directa en la oficina, optimización del rendimiento del sistema con Guest Additions y auditoría de conectividad base mediante herramientas de diagnóstico por línea de comandos (Windows CMD).",
    tech: ["Windows 10 Pro (22H2)","Oracle VM VirtualBox","Bridged Networking (Red Puente)","VirtualBox Guest Additions","Windows CMD (Línea de Comandos)","Markdown"],
    image: "/images/projects/corporate-workstation.jpg",
    github: "https://github.com/ernestodcr/Corporate-Workstation-Deployment/blob/main",
  },
  {
    title: "Linux Server Administration",
    description: "Despliegue y administración avanzada de un servidor empresarial Ubuntu Server en consola pura para el ecosistema corporativo de TecnoSoluciones S.A. Implementación de una arquitectura de almacenamiento elástico LVM, automatización de plantillas de seguridad con máscaras de usuario (umask) y blindaje de accesos mediante permisos octales. Configuración de redes empresariales estáticas via Netplan, optimización del aprovisionamiento de paquetes y gestión remota altamente segura a través de OpenSSH, concluyendo con auditorías forenses de ciberseguridad sobre la caja negra del sistema (journalctl).",
    tech: ["Ubuntu Server 26.04","LVM Storage","OpenSSH","Netplan","Systemd (systemctl)","Journalctl","Apt Package Manager","Linux File Permissions (chmod/umask)","Htop / Top","GNU Nano","Markdown"],
    image: "/images/projects/linux-server.jpg",
    github: "https://github.com/ernestodcr/Linux-Server-Administration",
  },
  {
    title: "Windows Server 2022 Deployment",
    description: "Despliegue e instalación visual de un servidor corporativo Windows Server 2022 en modo Experiencia de Escritorio. Configuración de la identidad de red SRV-WIN-01, direccionamiento IPv4 estático empresarial y aprovisionamiento del rol Active Directory (AD DS).",
    tech: ["Windows Server 2022", "Active Directory", "Networking IPv4", "VirtualBox", "Markdown"],
    image: "/images/projects/windows-server.jpg",
    github: "https://github.com/ernestodcr/Windows-Server-Deployment",
  },
  {
    title: "Enterprise Firewall Deployment (pfSense)",
    description: "Implementación y aislamiento de la frontera de red corporativa mediante el sistema operativo especializado pfSense. Configuración de arquitectura perimetral dual (WAN/LAN) sobre sistema de archivos ZFS para auditoría y filtrado seguro de tráfico de datos.",
    tech: ["pfSense", "FreeBSD", "Network Security", "ZFS File System", "VirtualBox", "Cybersecurity"],
    image: "/images/projects/pfsense-firewall.jpg",
    github: "https://github.com/ernestodcr/Enterprise-Firewall-pfSense",
  },
  {
    title: "Industrial Quality Monitor",
    description: "Desarrollo de un sistema modular para el control de calidad, monitorización de líneas de producción y análisis de eficiencia en planta. Separa la automatización de la infraestructura en segundo plano de la visualización interactiva de datos mediante un cuadro de mando (Dashboard) de KPIs en tiempo real.",
    tech: ["Python", "Pandas", "Streamlit", "Sistemas", "Git/GitHub"],
    image: "/images/projects/quality-monitor.jpg",
    github: "https://github.com/ernestodcr/industrial-quality-monitor.git",
  },
  {
    title: "SaaS-O-Matic - Simulador Contable",
    description: "Desarrollo de un ecosistema integral para la gestión de cuentas corporativas y modelado financiero de costes por tramos de consumo. Incorpora un motor de validación fiscal condicional aislado en el flujo de entrada y un sistema de conversión multidivisa visual en tiempo real que preserva la inmutabilidad de los registros históricos en la base de datos relacional.",
    tech: ["FastAPI", "React 19", "TypeScript", "SQLAlchemy", "Tailwind v4", "Render", "Vercel"],
    image: "/images/projects/saas-o-matic.jpg",
    github: "https://github.com/ernestodcr/saas-o-matic",
    demo: "https://saas-o-matic.vercel.app/"
  },
  {
    title: "Fruit Counter - Sistema de Inspección Industrial Clásico",
    description: "Desarrollo de un pipeline automatizado de visión computacional clásico para el conteo de activos esféricos en flujos de producción continuos. Implementa un motor de segmentación cromática aislado en el espacio de color HSV mediante filtrado adaptativo por umbrales y un algoritmo de transformada de Hough optimizado para la detección de primitivas geométricas en tiempo real.",
    tech: ["Python 3", "OpenCV", "NumPy", "Git", "Pip", "Virtualenv (Venv)", "Markdown"],
    image: "/images/projects/fruit-counter.jpg",
    github: "https://github.com/ernestodcr/fruit-counter-opencv",
    demo: "/video/demo-naranjas.mp4"
  },
] as const;
