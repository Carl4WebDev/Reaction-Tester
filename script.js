// Get the shape element
const shapeElement = document.querySelector('.shape');

// Get the score element
const scoreElement = document.querySelector('.score');

const timeElement = document.querySelector('.time');
const gameoverElement = document.querySelector('.gameover-container');

// Get the background image element
const bgImgElement = document.getElementById('bg-img');



// Set the initial start time
let start = new Date().getTime();

//cursor
const cursorElement = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
    cursorElement.setAttribute('style', 'top:' +(e.pageY - 50 ) + 'px; left: ' +(e.pageX - 50) + 'px;')
})

// Generate a random color code
// function randomColorGen() {
//   const letters = '123456789ABCD'.split('');
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// Set a random background image class for the game
function randomImage() {
    const backgroundClasses = [
        'background-image1',
        'background-image2',
        'background-image3',
        'background-image4',
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
    const left = Math.random() * 80;
    const top = Math.random() * 70;
    const width = Math.random() * 100 + 100;
    const height = Math.random() * 100 + 100;
    
    if(Math.random() > 0.5) {
        shapeElement.style.borderRadius = '50px';
        bgImgElement.style.borderRadius = '50px';
    } else {
        shapeElement.style.borderRadius = '0%';
        bgImgElement.style.borderRadius = '0%';
    }
    // shapeElement.style.backgroundColor = randomColorGen();
    shapeElement.style.width = width + 'px';
    shapeElement.style.height = height + 'px';
    shapeElement.style.left = left + '%';
    shapeElement.style.top = top + '%';


    // Schedule the appearance of the shape after a random time delay
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

// Handle the click event on the shape element
let counter = 0;
function handleClick() {
    randomImage(); // Change the background image
    counter++
    shapeElement.style.display = 'none';
    const end = new Date().getTime();
    const timeTaken = (end - start) / 1000;
    timeElement.innerHTML = timeTaken + 's';
    gameover()
    scoreElement.innerHTML = counter;
    appearAfterDelay();
}
function gameover(){
    const end = new Date().getTime()
    let currentTime = (end - start) / 1000
    if( currentTime > 3){
        counter = 0;
        
        document.querySelector('.dashboard-container').classList.add('gameover');
        document.querySelector('.dashboard-container').innerHTML = 'Refresh The Page!';
        bgImgElement.style.display = 'none'
        document.querySelector('.cursor img').style.display = 'none'
        document.querySelector('body').style.cursor = 'pointer'

        
    }
    
} 


// Add a click event listener to the shape element
shapeElement.onclick = handleClick;

// Set an initial random background image
randomImage();

// Initiate the first appearance of the shape
appearAfterDelay();

