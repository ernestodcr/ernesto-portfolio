export interface Study {
  title: string;
  institute: string;
  period: string;
}

export const studies: readonly Study[] = [
  {
    title: "Curso de Especialización Desarrollo de Aplicaciones en Lenguaje Python",
    institute: "CIFP Camino de la Miranda",
    period: "2025 - 2026",
  },
  {
    title: "Desarrollo de Aplicaciones Multiplataforma",
    institute: "CIFP Camino de la Miranda",
    period: "2024 - 2025",
  },
  {
    title: "Desarrollo de Aplicaciones Web",
    institute: "CIFP Camino de la Miranda",
    period: "2022 - 2024",
  },
  {
    title: "Sistemas Microinformáticos y Redes",
    institute: "CIFP Camino de la Miranda",
    period: "2020 - 2022",
  },
  {
    title: "Educación Secundaria Obligatoria",
    institute: "La Salle Palencia",
    period: "2016 - 2020",
  },
] as const;