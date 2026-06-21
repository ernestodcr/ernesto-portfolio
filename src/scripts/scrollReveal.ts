const sections = document.querySelectorAll(".reveal");
const items =document.querySelectorAll(".reveal, .timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

items.forEach((item) => observer.observe(item))