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
let screenWidth = 600, screenHeight = 600;
let screenX = imageWidth/2-screenWidth/2, screenY = imageHeight/2-screenHeight/2; // top left corner
let mouseX, mouseY;
const speed = 25;
const canvas = document.getElementById("mapCanvas");
canvas.width = 600;
canvas.height = 600;
const context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;
let mapImg = new Image();
mapImg.onload = function(){
  context.drawImage(mapImg, screenX, screenY, screenWidth, screenHeight, 0, 0, 600, 600);
}
mapImg.src = "assets/map.png";

let elements = [
  [0, 340, 122, 382, "Recycling Bins", "Recycling diverts waste from landfills, reducing both the environmental burden and energy consumption. Through recycling programs, cities can also prevent pollution and reduce emissions. This improves air quality and environmental sustainability."],
  [1010, 340, 1102, 385, "Recycling Bins", "Recycling diverts waste from landfills, reducing both the environmental burden and energy consumption. Through recycling programs, cities can also prevent pollution and reduce emissions. This improves air quality and environmental sustainability."],
  [1020, 175, 1222, 252, "Green Roofs", "Roofs planted with local indigenous vegetation can reduce runoff and protect against flooding. They also encourage water infiltration and help to regulate surface temperatures, which saves money on cooling and heating."],
  [585, 77, 700, 123, "Solar Panels", "Solar panels improve urban resilience by diversifying energy sources, which makes cities less susceptible to disruptions. As a renewable energy source, they also contribute to a cleaner, healthier urban environment."],
  [737, 20, 853, 68, "Solar Panels", "Solar panels improve urban resilience by diversifying energy sources, which makes cities less susceptible to disruptions. As a renewable energy source, they also contribute to a cleaner, healthier urban environment."],
  [1477, 30, 1604, 94, "Sun Drying", "Drying machines account for about 6% of household electricity usage. Drying clothes in the sun helps to reduce energy consumption, leading to a reduced carbon footprint and therefore climate change, which is a major stress on urban systems. In a way, sun drying also makes use of solar energy, a renewable and sustainable energy source."],
  [822, 588, 1175, 773, "Wildlife Crossings", "Green bridges and tunnels can link fragmented habitats and ensure biodiversity and reduction in motor accidents, as fewer animals need to cross dangerous highways. These are essential for both human and animal safety as roadkill becomes a serious problem with more than a million animals killed every day."],
  [289, 477, 534, 665, "Vegetable Gardens", "Vegetable gardens improve food security by increasing access to fresh food, which makes urban communities more resilient to climate change and extreme weather events. They can also reduce the carbon emissions associated with food production and transportation."],
  [906, 298, 1007, 371, "Vegetable Gardens", "Vegetable gardens improve food security by increasing access to fresh food, which makes urban communities more resilient to climate change and extreme weather events. They can also reduce the carbon emissions associated with food production and transportation."],
  [1266, 135, 1385, 229, "Vegetable Gardens", "Vegetable gardens improve food security by increasing access to fresh food, which makes urban communities more resilient to climate change and extreme weather events. They can also reduce the carbon emissions associated with food production and transportation."],
  [1210, 490, 2180, 800, "Community Parks", "Community parks are major green spaces, helping to filter pollutants and reduce the heat island effect, as well as increasing biodiversity by supporting plant and animal life. They also manage stormwater, making cities less vulnerable to floods."],
  [538, 369, 805, 474, "Public Transportation", "Buses and other public transportation options are more energy efficient and produce less emissions than private vehicles, reducing cities' carbon footprints. They also reduce the need for more roads and parking lots, which preserves important green spaces and increases air quality."],
  [1247, 285, 1277, 325, "Rainwater Collection", "By collecting rainwater, communities can mitigate water scarcity and reduce reliance on the water grid, saving energy on water treatment and distribution. Rainwater collection can also reduce stormwater runoff and the risk of floods."]
];

function checkHover(){
  for (let i=0; i<elements.length; ++i){
    if (mouseX >= elements[i][0] && mouseY >= elements[i][1] && mouseX <= elements[i][2] && mouseY <= elements[i][3]){
      document.getElementById("elementName").textContent = elements[i][4];
      document.getElementById("elementInfo").textContent = elements[i][5];
      return;
    }
  }
  document.getElementById("elementName").textContent = "Hover your mouse over an element to learn more!";
  document.getElementById("elementInfo").textContent = "-";
}

document.addEventListener('keydown', function(event){
  if (event.key == "w" || event.key == "W"){
    if (screenY > 0){
      screenY -= speed;
      mouseY -= speed;
    }
  }else if (event.key == "s" || event.key == "S"){
    if (screenY < imageHeight-screenHeight){
      screenY += speed;
      mouseY += speed;
    }
  }else if (event.key == "a" || event.key == "A"){
    if (screenX > 0){
      screenX -= speed;
      mouseX -= speed;
    }
  }else if (event.key == "d" || event.key == "D"){
    if (screenX < imageWidth-screenWidth){
      screenX += speed;
      mouseX += speed;
    }
  }
  context.clearRect(0, 0, screenWidth, screenHeight);
  context.drawImage(mapImg, screenX, screenY, screenWidth, screenHeight, 0, 0, 600, 600);
  checkHover();
});

document.addEventListener('mousemove', function(event){
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX-rect.left+screenX;
  mouseY = event.clientY-rect.top+screenY;
  checkHover();
});