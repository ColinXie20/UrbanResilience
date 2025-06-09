// Add JavaScript code for your web site here and call it from index.html.
// Page switching
function showSection(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  const navButtons = document.querySelectorAll('.navButton');
  navButtons.forEach(navButton => navButton.classList.remove('active'));
  const activePage = document.getElementById(id);
  activePage.classList.add('active');
  const activeButton = document.getElementById(id+"Button");
  activeButton.classList.add('active');
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

// Interactive map stuff
let imageWidth = 2500, imageHeight = 800;
let curX = imageWidth/2, curY = imageHeight/2; // location of cat
let screenWidth = 600, screenHeight = 600;
let screenX = curX-screenWidth/2, screenY = curY-screenHeight/2; // top left corner
const speed = 25;
const canvas = document.getElementById("mapCanvas");
const context = canvas.getContext("2d");
let mapImg = new Image();
mapImg.onload = function(){
  context.drawImage(mapImg, screenX, screenY, screenWidth, screenHeight, 0, 0, 300, 150);
}
mapImg.src = "assets/map.png";
/*
let catImg = new Image();
catImg.onload = function(){
  context.drawImage(catImg, curX-screenX, curY-screenY);
}
catImg.src = "assets/cat.gif";
*/
//context.fillRect(curX-screenX-15, curY-screenY-15, 30, 30);
document.getElementById("mapDebug").textContent = screenX+" "+screenY;

document.addEventListener('keydown', function(event){
  if (event.key == "w" || event.key == "W"){
    if (curY > 0){
      curY -= speed;
    }
    if (screenY > 0){
      screenY -= speed;
    }
  }else if (event.key == "s" || event.key == "S"){
    if (curY < imageHeight){
      curY += speed;
    }
    if (screenY < imageHeight-screenHeight){
      screenY += speed;
    }
  }else if (event.key == "a" || event.key == "A"){
    if (curX > 0){
      curX -= speed;
    }
    if (screenX > 0){
      screenX -= speed;
    }
  }else if (event.key == "d" || event.key == "D"){
    if (curX < imageWidth){
      curX += speed;
    }
    if (screenX < imageWidth-screenWidth){
      screenX += speed;
    }
  }
  context.clearRect(0, 0, screenWidth, screenHeight);
  context.drawImage(mapImg, screenX, screenY, screenWidth, screenHeight, 0, 0, 300, 150);
  //context.drawImage(catImg, curX-screenX, curY-screenY);
  //context.fillRect(curX-screenX-15, curY-screenY-15, 30, 30);
  document.getElementById("mapDebug").textContent = screenX+" "+screenY;
});