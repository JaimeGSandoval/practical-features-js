const id = 'profilePhoto';
const yOffset = -100;
const element = document.getElementById(id);
const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

window.scrollTo({ top: y, behavior: 'smooth' });
