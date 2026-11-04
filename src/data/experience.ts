interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const experience: readonly Experience[] = [
  {
    title: "Técnico de Control de Visión y Aplicaciones de IA",
    company: "Renault Group – Villamuriel de Cerrato, Modalidad Presencial (Beca FGULEM)",
    date: "Sept 2026 – Actualidad",
    description: [
      "Participación en actividades de visión artificial e Inteligencia Artificial aplicadas al control de calidad y de cotas geométricas en entornos industriales.",
      "Análisis de proyectos de visión artificial e integración de cámaras y PLC.",
      "Entrenamiento y validación de modelos YOLO mediante Python.",
      "Etiquetado de imágenes OK/NOK y aplicación de técnicas de Data Augmentation."
    ]
  },
  {
    title: "Desarrollador Python",
    company: "ECM Ingeniería Ambiental – Palencia, Modalidad Online (Prácticas FCT – CIFP Camino de la Miranda, Palencia)",
    date: "Abr 2026 – May 2026",
    description: [
      "Desarrollé scripts de automatización con Python para el procesamiento y filtrado de datos internos.",
      "Programé una aplicación móvil en Java utilizando Android Studio, configurando conexiones seguras a bases de datos relacionales para la exportación optimizada de registros en archivos TXT."
    ]
  },
  {
    title: "Desarrollador de Aplicaciones Multiplataforma",
    company: "ACATUR – Palencia (Prácticas FCT – CIFP Camino de la Miranda, Palencia)",
    date: "Oct 2025 – Dic 2025",
    description: [
      "Desarrollé sistemas digitales enfocados en la experiencia de usuario (UX/UI), optimizando el rendimiento de sus interfaces.",
      "Gestioné el despliegue automático de aplicaciones multiplataforma utilizando servidores y entornos en la nube."
    ]
  },
  {
    title: "Desarrollador Web",
    company: "ACATUR – Palencia (Prácticas FCT – CIFP Camino de la Miranda, Palencia)",
    date: "Oct 2024 – Dic 2024",
    description: [
      "Gestioné el mantenimiento preventivo y correctivo de sitios web corporativos y de pruebas.",
      "Realicé auditorías de código (code reviews) e implementé políticas estrictas de copias de seguridad para garantizar la integridad de los datos."
    ]
  },
  {
    title: "Técnico de Sistemas y Redes",
    company: "SOLYECA SL – Palencia (Prácticas de formación exentas de cotización – CIFP Camino de la Miranda, Palencia)",
    date: "Mar 2022 – Jun 2022",
    description: [
      "Diagnostiqué y resolví incidencias críticas de hardware y software en equipos de clientes.",
      "Instalé, configuré y mantuve la infraestructura de la red local (LAN), garantizando la máxima conectividad y seguridad perimetral."
    ]
  }
] as const;
