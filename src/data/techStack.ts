interface Tech {
  name: string;
  icon: string;
  category: string;
}

export const techStack: readonly Tech[] = [
  // FRONTEND
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Vue.js", icon: "/icons/vue.svg", category: "frontend" },
  { name: "Angular", icon: "/icons/angular.svg", category: "frontend" },
  { name: "Astro", icon: "/icons/astro.svg", category: "frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "frontend" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "frontend" },
  { name: "HTML", icon: "/icons/html.svg", category: "frontend" },
  { name: "CSS", icon: "/icons/css.svg", category: "frontend" },

  // BACKEND
  { name: "Node.js", icon: "/icons/node.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },
  { name: "Python", icon: "/icons/python.svg", category: "backend" },
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "backend" },
  { name: "Java", icon: "/icons/java.svg", category: "backend" },
  { name: "PHP", icon: "/icons/php.svg", category: "backend" },

  // DATA SCIENCE
  { name: "Pandas", icon: "/icons/pandas.svg", category: "data-science" },
  { name: "NumPy", icon: "/icons/numpy.svg", category: "data-science" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "data-science" },
  { name: "Jupyter Notebook", icon: "/icons/jupyter.svg", category: "data-science" },

  // DATABASES
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "SQLite", icon: "/icons/sqlite.svg", category: "database" },
  { name: "SQL", icon: "/icons/sql.svg", category: "database" },

  // CMS
  { name: "WordPress", icon: "/icons/wordpress.svg", category: "cms" },

  // TOOLS & DEPLOYMENT
  { name: "Git", icon: "/icons/git.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },
  { name: "Vite", icon: "/icons/vite.svg", category: "tools" },
  { name: "npm", icon: "/icons/npm.svg", category: "tools" },
  { name: "Linux", icon: "/icons/linux.svg", category: "tools" },
  { name: "Bash", icon: "/icons/bash.svg", category: "tools" },
  { name: "LocalWP", icon: "/icons/localwp.svg", category: "tools" },

  // IDEs
  { name: "VSCode", icon: "/icons/vscode.svg", category: "tools" },
  { name: "IntelliJ IDEA", icon: "/icons/intellij.svg", category: "tools" },
  { name: "PyCharm", icon: "/icons/pycharm.svg", category: "tools" }
] as const;
