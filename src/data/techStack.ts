interface Tech {
  name: string;
  icon: string;
  category: string;
}

export const techStack: readonly Tech[] = [
  { name: "Python", icon: "/icons/python.svg", category: "languages" },
  { name: "OpenCV", icon: "/icons/pandas.svg", category: "data-science" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
  { name: "PHP", icon: "/icons/php.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "languages" },
 
  { name: "HTML", icon: "/icons/html.svg", category: "markup-styles" },
  { name: "CSS", icon: "/icons/css.svg", category: "markup-styles" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "markup-styles" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "markup-styles" },
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Vue.js", icon: "/icons/vue.svg", category: "frontend" },
  { name: "Angular", icon: "/icons/angular.svg", category: "frontend" },
  { name: "Astro", icon: "/icons/astro.svg", category: "frontend" },
  { name: "Vite", icon: "/icons/vite.svg", category: "frontend" },

  { name: "Node.js", icon: "/icons/node.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "backend" },

  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "SQLite", icon: "/icons/sqlite.svg", category: "database" },
  { name: "SQL", icon: "/icons/sql.svg", category: "database" },

  { name: "Pandas", icon: "/icons/pandas.svg", category: "data-science" },
  { name: "NumPy", icon: "/icons/numpy.svg", category: "data-science" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "data-science" },
  { name: "Jupyter Notebook", icon: "/icons/jupyter.svg", category: "data-science" },

  { name: "WordPress", icon: "/icons/wordpress.svg", category: "cms" },
  { name: "Git", icon: "/icons/git.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },
  { name: "npm", icon: "/icons/npm.svg", category: "tools" },
  { name: "Windows", icon: "/icons/windows.svg", category: "tools" },
  { name: "Linux", icon: "/icons/linux.svg", category: "tools" },
  { name: "Bash", icon: "/icons/bash.svg", category: "tools" },
  
] as const;
