export interface TechCategory {
  id: string;
  name: string;
}

export interface Tech {
  name: string;
  icon: string;
  category: string;
}

export const categories: readonly TechCategory[] = [
  {
    id: "core",
    name: "Core Technologies",
  },
  {
    id: "backend",
    name: "Backend",
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Data",
  },
  {
    id: "frontend",
    name: "Frontend",
  },
  {
    id: "database",
    name: "Databases",
  },
  {
    id: "systems",
    name: "Systems & DevOps",
  },
  {
    id: "tools",
    name: "Tools",
  },
  {
    id: "cms",
    name: "CMS & Web",
  },
];

export const techStack: readonly Tech[] = [
  // Core Technologies — tecnologías principales de desarrollo
  { name: "Python", icon: "/icons/python.svg", category: "core" },
  { name: "Java", icon: "/icons/java.svg", category: "core" },
  { name: "PHP", icon: "/icons/php.svg", category: "core" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "core" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "core" },

  // Backend — desarrollo de servidores y APIs
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "backend" },
  { name: "Node.js", icon: "/icons/node.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },

  // Computer Vision & Data — visión artificial y procesamiento de datos
  { name: "OpenCV", icon: "/icons/openCV.svg", category: "computer-vision" },
  { name: "Ultralytics YOLO", icon: "/icons/ultralytics.svg", category: "computer-vision" },
  { name: "NumPy", icon: "/icons/numpy.svg", category: "computer-vision" },
  { name: "Pandas", icon: "/icons/pandas.svg", category: "computer-vision" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "computer-vision" },
  { name: "Jupyter Notebook", icon: "/icons/jupyter.svg", category: "computer-vision" },

  // Frontend — desarrollo de interfaces web
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Angular", icon: "/icons/angular.svg", category: "frontend" },
  { name: "Vue.js", icon: "/icons/vue.svg", category: "frontend" },
  { name: "Astro", icon: "/icons/astro.svg", category: "frontend" },
  { name: "Vite", icon: "/icons/vite.svg", category: "frontend" },
  { name: "HTML", icon: "/icons/html.svg", category: "frontend" },
  { name: "CSS", icon: "/icons/css.svg", category: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "frontend" },

  // Databases — sistemas de bases de datos
  { name: "SQL", icon: "/icons/sql.svg", category: "database" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "SQLite", icon: "/icons/sqlite.svg", category: "database" },

  // Systems & DevOps — sistemas operativos, terminal y control de versiones
  { name: "Linux", icon: "/icons/linux.svg", category: "systems" },
  { name: "Windows", icon: "/icons/windows.svg", category: "systems" },
  { name: "Bash", icon: "/icons/bash.svg", category: "systems" },
  { name: "Git", icon: "/icons/git.svg", category: "systems" },

  // Tools — herramientas de desarrollo y despliegue
  { name: "npm", icon: "/icons/npm.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },

  // CMS & Web — gestión de contenidos
  { name: "WordPress", icon: "/icons/wordpress.svg", category: "cms" },
] as const;