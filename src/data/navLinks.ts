interface Nav {
  label: string;
  href: string;
}

export const navLinks: readonly Nav[] =  [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Estudios", href: "#studies" },
  { label: "Experiencia", href: "#experience" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Proyectos", href: "#projects" }
];

