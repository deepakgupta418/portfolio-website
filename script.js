const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('pointermove', (event) => {
  document.querySelector('.cursor-glow').style.left = `${event.clientX}px`;
  document.querySelector('.cursor-glow').style.top = `${event.clientY}px`;
});