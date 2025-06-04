// Add JavaScript code for your web site here and call it from index.html.
// Page switching
function showSection(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  const activePage = document.getElementById(id);
  activePage.classList.add('active');
}
//home page overview 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

// Brainstorm ideas
const ideas = [
  "I don't know yet",
  "no idea",
  "idk"
];

function showIdea(index) {
  document.getElementById('idea-text').innerHTML = ideas[index];
}