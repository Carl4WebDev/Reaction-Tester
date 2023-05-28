// Get the shape element
const shapeElement = document.querySelector('.shape');

// Get the score element
const scoreElement = document.querySelector('.score');

// Get the background image element
const bgImgElement = document.getElementById('bg-img');

// Set the initial start time
let start = new Date().getTime();

// Generate a random color code
function randomColorGen() {
  const letters = '123456789ABCD'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set a random background image class for the game
function randomImage() {
  const backgroundClasses = [
    'background-image1',
    'background-image2',
    'background-image3',
  ];
  const randomIndex = Math.floor(Math.random() * backgroundClasses.length);
  const randomBackgroundClass = backgroundClasses[randomIndex];
  bgImgElement.classList = [randomBackgroundClass];
}

// Make the shape appear on the screen
function makeShapeAppear() {
  shapeElement.style.display = 'block';
  start = new Date().getTime();
}

// Set the shape properties, such as position, size, and color, and schedule the appearance of the shape after a delay
function appearAfterDelay() {
    // const left = Math.random() * 80;
    // const top = Math.random() * 70;
    const width = Math.random() * 200 + 200;
    const height = Math.random() * 300;
    
    shapeElement.style.borderRadius = Math.random() > 0.5 ? '50px' : '0%';
    shapeElement.style.backgroundColor = randomColorGen();
    shapeElement.style.width = width + 'px';
    shapeElement.style.height = height + 'px';
    // shapeElement.style.left = left + '%';
    // shapeElement.style.top = top + '%';
    shapeElement.style.left = '100px';
    // shapeElement.style.top = top + '%';
    
    // Schedule the appearance of the shape after a random time delay
    randomImage(); // Change the background image
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

// Handle the click event on the shape element
function handleClick() {
  shapeElement.style.display = 'none';
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  scoreElement.innerHTML = timeTaken + 's';
  appearAfterDelay();
}

// Add a click event listener to the shape element
shapeElement.onclick = handleClick;

// Set an initial random background image


// Initiate the first appearance of the shape
appearAfterDelay();
