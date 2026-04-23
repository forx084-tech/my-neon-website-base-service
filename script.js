// Smooth scroll for navbar links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Simple fade-in animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const offset = section.offsetTop - 500;

    if (scrollY > offset) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "0.6s ease";
    } else {
      section.style.opacity = 0;
      section.style.transform = "translateY(30px)";
    }
  });
});
const container = document.querySelector(".ripple-container");

document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  container.appendChild(ripple);

  // remove after animation
  setTimeout(() => {
    ripple.remove();
  }, 800);
});
for (let i = 0; i < 2; i++) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  ripple.style.animationDelay = i * 0.2 + "s";
  container.appendChild(ripple);

  setTimeout(() => ripple.remove(), 1000);
}
document.addEventListener("click", function(e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 800);
});
document.addEventListener("click", function(e) {
  for (let i = 0; i < 2; i++) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.animationDelay = i * 0.2 + "s";

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  }
});