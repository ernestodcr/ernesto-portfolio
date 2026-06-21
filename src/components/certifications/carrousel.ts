import { certifications } from "../../data/certifications";

let currentIndex = 0;

const imgEl = document.getElementById("cert-image") as HTMLImageElement | null;
const titleEl = document.getElementById("cert-title");
const issuerEl = document.getElementById("cert-issuer");
const urlEl = document.getElementById("cert-url") as HTMLAnchorElement | null;
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateCarousel() {
  const cert = certifications[currentIndex];
  
  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.title;
  }
  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.textContent = cert.issuer;
  
  if (urlEl) {
    if (cert.url) {
      urlEl.href = cert.url;
      urlEl.classList.remove("hidden");
    } else {
      urlEl.classList.add("hidden");
    }
  }
}

prevBtn?.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn?.addEventListener("click", () => {
  currentIndex = currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});
