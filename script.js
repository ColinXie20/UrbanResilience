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
const ideaNames = [
  "Vegetable garden that utilizes water from your green roof",
  "Timer incorporated into shower and faucets",
  "Sun tracking shelf",
];
const ideas = [
  "You can utilize existing design to make your home even more sustainable. Who doesn’t want to save water while enjoying home-grown vegetables at the same time. However, make sure the vegetables you grow are suitable for your local climate.",
  "Did you know that you can save 75 gallons a month by just cutting your shower one minute shorter?",
  "A rotating or adjustable indoor shelf (manual or solar-timed) that you turn throughout the day to follow the sunlight — perfect for growing herbs, drying dishes, or warming laundry naturally.",
];

function showIdea(index) {
  document.getElementById('idea-name').innerHTML = ideaNames[index];
  document.getElementById('idea-text').innerHTML = ideas[index];
}