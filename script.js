 
var start = new Date().getTime();

function makeShapeAppear() {
    // To make the shapes appear.
    document.querySelector('.shape').style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    var left = Math.random () * 80;
    var top = Math.random () * 70;
    var width = (Math.random () * 200) + 200;
    var height = Math.random () * 300;
    
    if (Math.random() > 0.5){
        document.querySelector('.shape').style.borderRadius = "50px";
    }else{
        document.querySelector('.shape').style.borderRadius = "0%";
    }
    
    document.querySelector('.shape').style.backgroundColor = randomColorGen();
    
    document.querySelector('.shape').style.width = width + "px";
    document.querySelector('.shape').style.left = height + "px";
    
    document.querySelector('.shape').style.left = left + "%";
    document.querySelector('.shape').style.top = top + "%";
    
    // To have 2s time gap after clicking the first block. 
    setTimeout(makeShapeAppear, Math.random() * 2000);
    
}

document.querySelector('.shape').onclick = function() {
    // To make the shapes disappear when cliked.
    document.querySelector('.shape').style.display = "none"; 
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.querySelector(".score").innerHTML = timeTaken + "s";
    // To apply the function to this code. 
    appearAfterDelay();
    
}
function randomColorGen () {
    var letters = '123456789ABCD' .split('');
    var color = "#";
    for (var i = 0; i < 6; i++ )  {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
appearAfterDelay();

