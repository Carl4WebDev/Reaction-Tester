// // Get the shape element
// const shapeElement = document.querySelector('.shape');

// // Get the score element
// const scoreElement = document.querySelector('.score');

// const timeElement = document.querySelector('.time');
// const gameoverElement = document.querySelector('.gameover-container');

// // Get the background image element
// const bgImgElement = document.getElementById('bg-img');



// // Set the initial start time
// let start = new Date().getTime();

// //cursor
// const cursorElement = document.querySelector('.cursor')
// document.addEventListener('mousemove', e => {
//     cursorElement.setAttribute('style', 'top:' +(e.pageY - 50 ) + 'px; left: ' +(e.pageX - 50) + 'px;')
// })

// // Generate a random color code
// // function randomColorGen() {
// //   const letters = '123456789ABCD'.split('');
// //   let color = '#';
// //   for (let i = 0; i < 6; i++) {
// //       color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }

// // Set a random background image class for the game
// let audioIndex;
// function randomImage() {
//     const backgroundClasses = [
//         'background-image0',
//         'background-image1',
//         'background-image2',
//         'background-image3',
//         'background-image4',
//         'background-image5',
//         'background-image6',
//         'background-image7',
//         'background-image8',
//         'background-image9',
//   ];
//   const randomIndex = Math.floor(Math.random() * backgroundClasses.length);
//   audioIndex = randomIndex
//   const randomBackgroundClass = backgroundClasses[randomIndex];
//   bgImgElement.classList = [randomBackgroundClass];
//   return randomIndex
// }

// // Make the shape appear on the screen
// function makeShapeAppear() {
//     shapeElement.style.display = 'block';
//     start = new Date().getTime();
// }

// // Set the shape properties, such as position, size, and color, and schedule the appearance of the shape after a delay
// function appearAfterDelay() {
//     const left = Math.random() * 80;
//     const top = Math.random() * 70;
//     const width = Math.random() * 100 + 100;
//     const height = Math.random() * 100 + 100;
    
//     if(Math.random() > 0.5) {
//         shapeElement.style.borderRadius = '50px';
//         bgImgElement.style.borderRadius = '50px';
//     } else {
//         shapeElement.style.borderRadius = '0%';
//         bgImgElement.style.borderRadius = '0%';
//     }
//     // shapeElement.style.backgroundColor = randomColorGen();
//     shapeElement.style.width = width + 'px';
//     shapeElement.style.height = height + 'px';
//     shapeElement.style.left = left + '%';
//     shapeElement.style.top = top + '%';


//     // Schedule the appearance of the shape after a random time delay
//     setTimeout(makeShapeAppear, Math.random() * 2000);
// }

// // Handle the click event on the shape element
// let counter = -1;
// function handleClick() {
//     gunShot()
//     randomImage(); // Change the background image
//     if(randomImage() >= 0 && randomImage() <= 5){
//         catSound()
//         console.log(randomImage())
//     }
//     else{
//         dogSound()
//         console.log(randomImage())

//     }
//     gameover(counter)
//     levelUP(counter)
//     counter++
//     shapeElement.style.display = 'none';
//     const end = new Date().getTime();
//     const timeTaken = (end - start) / 1000;
//     timeElement.innerHTML = timeTaken + 's';
//     scoreElement.innerHTML = counter;
    
//     appearAfterDelay();
    
// }
// function gameover(score){
//     const end = new Date().getTime()
//     let currentTime = (end - start) / 1000
//     if( currentTime > 3){
//         counter = 0;
//         document.querySelector('.dashboard-container').classList.add('gameover');
//         document.querySelector('.dashboard-container').innerHTML = `Time:${currentTime}-Score:${score} - Refresh the page!`;
//         bgImgElement.style.display = 'none'
//         document.querySelector('.cursor img').style.display = 'none'
//         document.querySelector('body').style.cursor = 'pointer'
//     }
    
// } 


// function levelUP(score){
//     const end = new Date().getTime()
//     let currentTime = (end - start) / 1000
//     if( score >= 10){ 

//         document.querySelector('.dashboard-content h2').innerHTML = 'You have level up! Kill under 2 seconds';
//         setTimeout(makeShapeAppear, Math.random() * 1000);
//         if(currentTime > 2){
//             counter = 0;
//             document.querySelector('.dashboard-container').classList.add('gameover');
//             document.querySelector('.dashboard-container').innerHTML =  `Time:${currentTime}-Score:${score} - Refresh the page!`;
//             bgImgElement.style.display = 'none'
//             document.querySelector('.cursor img').style.display = 'none'
//             document.querySelector('body').style.cursor = 'pointer'
//         }


//     }
//     if( score >= 20){ 

//         document.querySelector('.dashboard-content h2').innerHTML = 'You are good in this! Kill under 1 second';
//         setTimeout(makeShapeAppear, Math.random() * 500);
//         if(currentTime > 1){
//             counter = 0;
//             document.querySelector('.dashboard-container').classList.add('gameover');
//             document.querySelector('.dashboard-container').innerHTML =  `Time:${currentTime}-Score:${score} - Refresh the page!`;
//             bgImgElement.style.display = 'none'
//             document.querySelector('.cursor img').style.display = 'none'
//             document.querySelector('body').style.cursor = 'pointer'
//         }


//     }
//     if( score >= 40){ 

//         document.querySelector('.dashboard-content h2').innerHTML = 'You are good in this! Kill under 0.999 second';
//         setTimeout(makeShapeAppear, Math.random() * 100);
//         const left = Math.random() * 80;
//         const top = Math.random() * 70;
//         const width = Math.random() * 50 + 50;
//         const height = Math.random() * 50 + 50;
        
//         if(Math.random() > 0.5) {
//             shapeElement.style.borderRadius = '50px';
//             bgImgElement.style.borderRadius = '50px';
//         } else {
//             shapeElement.style.borderRadius = '0%';
//             bgImgElement.style.borderRadius = '0%';
//         }
//         // shapeElement.style.backgroundColor = randomColorGen();
//         shapeElement.style.width = width + 'px';
//         shapeElement.style.height = height + 'px';
//         shapeElement.style.left = left + '%';
//         shapeElement.style.top = top + '%';
//         if(currentTime > 0.500){
//             counter = 0;
//             document.querySelector('.dashboard-container').classList.add('gameover');
//             document.querySelector('.dashboard-container').innerHTML =  `Time:${currentTime}-Score:${score} - Refresh the page!`;
//             bgImgElement.style.display = 'none'
//             document.querySelector('.cursor img').style.display = 'none'
//             document.querySelector('body').style.cursor = 'pointer'
//         }


//     }

// }
// function gunShot(){
//     const audio = document.getElementById('gunShot'); 
//     shapeElement.addEventListener('click', function(){
//         // Pause and reset the audio
//         audio.pause();
//         audio.currentTime = 0;

//         // Play the audio
//         audio.play();
//     })
// }  
// function catSound(){
//     const audio = document.getElementById('catSound'); 
//     shapeElement.addEventListener('click', function(){
//         // Pause and reset the audio
//         audio.pause();
//         audio.currentTime = 0;

//         // Play the audio
//         audio.play();
//     })
// }  
// function dogSound(){
//     const audio = document.getElementById('dogSound'); 
//     shapeElement.addEventListener('click', function(){
//         // Pause and reset the audio
//         audio.pause();
//         audio.currentTime = 0;

//         // Play the audio
//         audio.play();
//     })
// }  



// // Add a click event listener to the shape element
// shapeElement.onclick = handleClick;
// handleClick()

// // Set an initial random background image
// randomImage();

// // Initiate the first appearance of the shape
// appearAfterDelay();



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

// Cursor
const cursorElement = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursorElement.setAttribute('style', 'top:' + (e.pageY - 50) + 'px; left: ' + (e.pageX - 50) + 'px;');
});

// Set a random background image class for the game
let audioIndex;
function randomImage() {
    const backgroundClasses = [
        'background-image0', // mongoose sound
        'background-image1', // monkey sound
        'background-image2', // Cat sound
        'background-image3', // cat sound
        'background-image4', // cat sound
        'background-image5', // cat sound
        'background-image6', // dog sound
        'background-image7', // dog sound
        'background-image8', // dog sound
        'background-image9', // dog sound
    ];
    const randomIndex = Math.floor(Math.random() * backgroundClasses.length);
    audioIndex = randomIndex; // Store the random index for sound determination
    const randomBackgroundClass = backgroundClasses[randomIndex];
    bgImgElement.classList = [randomBackgroundClass];
    return randomIndex;
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

    if (Math.random() > 0.5) {
        shapeElement.style.borderRadius = '50px';
        bgImgElement.style.borderRadius = '50px';
    } else {
        shapeElement.style.borderRadius = '0%';
        bgImgElement.style.borderRadius = '0%';
    }

    shapeElement.style.width = width + 'px';
    shapeElement.style.height = height + 'px';
    shapeElement.style.left = left + '%';
    shapeElement.style.top = top + '%';

    // Schedule the appearance of the shape after a random time delay
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

// Handle the click event on the shape element
let counter = -1;
function handleClick() {
    gunShot(); // Play gunshot sound on click
    playAnimalSound(audioIndex); // Play the appropriate animal sound based on the index
    randomImage(); // Change the background image
    gameover(counter); // Check game-over condition
    levelUP(counter); // Check level-up condition
    counter++;
    shapeElement.style.display = 'none';
    const end = new Date().getTime();
    const timeTaken = (end - start) / 1000;
    timeElement.innerHTML = timeTaken + 's';
    scoreElement.innerHTML = counter;

    appearAfterDelay(); // Schedule the next appearance
}

function playAnimalSound(index) {
    // Determine if the sound is for a cat or a dog based on index range
    if (index >= 2 && index <= 5) {
        playSound('catSound'); // Play cat sound
    } 
    else if(index >= 6 && index <= 9) {
        playSound('dogSound'); // Play dog sound
    }
    else if(index == 0){
        playSound('mongooseSound');
    }
    else if(index == 1){
        playSound('monkeySound');
    }
}

function playSound(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        // Pause and reset the audio before playing
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}

function gameover(score) {
    const end = new Date().getTime();
    let currentTime = (end - start) / 1000;
    if (currentTime > 3) {
        counter = 0;
        document.querySelector('.dashboard-container').classList.add('gameover');
        document.querySelector('.dashboard-container').innerHTML = `Time:${currentTime}-Score:${score} - Refresh the page!`;
        bgImgElement.style.display = 'none';
        document.querySelector('.cursor img').style.display = 'none';
        document.querySelector('body').style.cursor = 'pointer';
    }
}

function levelUP(score) {
    const end = new Date().getTime();
    let currentTime = (end - start) / 1000;
    if (score >= 10) {
        document.querySelector('.dashboard-content h2').innerHTML = 'You have leveled up! Kill under 2 seconds';
        setTimeout(makeShapeAppear, Math.random() * 1000);
        if (currentTime > 2) {
            counter = 0;
            document.querySelector('.dashboard-container').classList.add('gameover');
            document.querySelector('.dashboard-container').innerHTML = `Time:${currentTime}-Score:${score} - Refresh the page!`;
            bgImgElement.style.display = 'none';
            document.querySelector('.cursor img').style.display = 'none';
            document.querySelector('body').style.cursor = 'pointer';
        }
    }
    if (score >= 20) {
        document.querySelector('.dashboard-content h2').innerHTML = 'You are good at this! Kill under 1 second';
        setTimeout(makeShapeAppear, Math.random() * 500);
        if (currentTime > 1) {
            counter = 0;
            document.querySelector('.dashboard-container').classList.add('gameover');
            document.querySelector('.dashboard-container').innerHTML = `Time:${currentTime}-Score:${score} - Refresh the page!`;
            bgImgElement.style.display = 'none';
            document.querySelector('.cursor img').style.display = 'none';
            document.querySelector('body').style.cursor = 'pointer';
        }
    }
    if (score >= 40) {
        document.querySelector('.dashboard-content h2').innerHTML = 'You are a master! Kill under 0.5 seconds';
        setTimeout(makeShapeAppear, Math.random() * 100);
        const left = Math.random() * 80;
        const top = Math.random() * 70;
        const width = Math.random() * 50 + 50;
        const height = Math.random() * 50 + 50;

        if (Math.random() > 0.5) {
            shapeElement.style.borderRadius = '50px';
            bgImgElement.style.borderRadius = '50px';
        } else {
            shapeElement.style.borderRadius = '0%';
            bgImgElement.style.borderRadius = '0%';
        }
        shapeElement.style.width = width + 'px';
        shapeElement.style.height = height + 'px';
        shapeElement.style.left = left + '%';
        shapeElement.style.top = top + '%';
        if (currentTime > 0.5) {
            counter = 0;
            document.querySelector('.dashboard-container').classList.add('gameover');
            document.querySelector('.dashboard-container').innerHTML = `Time:${currentTime}-Score:${score} - Refresh the page!`;
            bgImgElement.style.display = 'none';
            document.querySelector('.cursor img').style.display = 'none';
            document.querySelector('body').style.cursor = 'pointer';
        }
    }
}

function gunShot() {
    const audio = document.getElementById('gunShot');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

// Add a click event listener to the shape element
shapeElement.onclick = handleClick;
handleClick();

// Set an initial random background image
randomImage();

// Initiate the first appearance of the shape
appearAfterDelay();
