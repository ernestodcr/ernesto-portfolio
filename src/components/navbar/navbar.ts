const navbar = document.getElementById("navbar");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

let menuOpen = false;

// toggle menu
btn?.addEventListener("click", () => {
  menuOpen = !menuOpen; // <-- Corregido: antes decía !open

  menu?.classList.toggle("hidden");
  
  // Pequeño timeout para permitir que las animaciones de Tailwind (opacity, scale) actúen
  setTimeout(() => {
    menu?.classList.toggle("opacity-0");
    menu?.classList.toggle("scale-95");
  }, 10);

  if (btn) {
    btn.textContent = menuOpen ? "✕" : "☰";
  }
});

// shadow on scroll
window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});

// close on click link
menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.add("opacity-0");
    menu.classList.add("scale-95");
    menuOpen = false;
    if (btn) btn.textContent = "☰";
  });
});
