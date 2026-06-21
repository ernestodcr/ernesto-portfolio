interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const experience: readonly Experience[] = [
  {
    title: "Desarrollador Python (Prácticas)",
    company: "ECM Ingeniería Ambiental – Palencia (Online)",
    date: "Abr 2026 – May 2026",
    description: [
      "Desarrollé scripts de automatización con Python para el procesamiento y filtrado de datos internos.",
      "Programé una aplicación móvil en Java utilizando Android Studio, configurando conexiones seguras a bases de datos relacionales para la exportación optimizada de registros en archivos TXT."
    ]
  },
  {
    title: "Desarrollador de Aplicaciones Multiplataforma (Prácticas)",
    company: "ACATUR – Palencia",
    date: "Oct 2025 – Dic 2025",
    description: [
      "Desarrollé sistemas digitales enfocados en la experiencia de usuario (UX/UI), optimizando el rendimiento de sus interfaces.",
      "Gestioné el despliegue automático de aplicaciones multiplataforma utilizando servidores y entornos en la nube."
    ]
  },
  {
    title: "Soporte Técnico y Documentación",
    company: "ACATUR – Palencia",
    date: "Jun 2025 – Sep 2025",
    description: [
      "Coordiné el soporte técnico integral del centro bajo estándares de arquitectura de software seguro.",
      "Elaboré documentación técnica detallada (manuales, esquemas e informes de despliegue) para facilitar la puesta en producción de los proyectos."
    ]
  },
  {
    title: "Desarrollador Web (Prácticas)",
    company: "ACATUR – Palencia",
    date: "Oct 2024 – Dic 2024",
    description: [
      "Gestioné el mantenimiento preventivo y correctivo de sitios web corporativos y de pruebas.",
      "Realicé auditorías de código (code reviews) e implementé políticas estrictas de copias de seguridad para garantizar la integridad de los datos."
    ]
  },
  {
    title: "Técnico de Sistemas y Redes (Prácticas)",
    company: "SOLYECA SL – Palencia",
    date: "Mar 2022 – Jun 2022",
    description: [
      "Diagnostiqué y resolví incidencias críticas de hardware y software en equipos de clientes.",
      "Instalé, configuré y mantuve la infraestructura de la red local (LAN), garantizando la máxima conectividad y seguridad perimetral."
    ]
  }
] as const;
