

// Remember: variables that are defined outside of the function can be reuse, in the contrast.
// 
var start = new Date().getTime();

function makeShapeAppear() {
    // To make the shapes appear.
    document.getElementById("red").style.display = "block";
    start = new Date().getTime();
}
function appearAfterDelay() {
    var left = Math.random () * 80;
    var top = Math.random () * 70;
    var width = (Math.random () * 200) + 200;
    var height = Math.random () * 300;
    
    if (Math.random() > 0.5){
        document.getElementById("red").style.borderRadius = "50px";
    }else{
        document.getElementById("red").style.borderRadius = "0%";
    }

    document.getElementById("red").style.backgroundColor = randomColorGen();

    document.getElementById("red").style.width = width + "px";
    document.getElementById("red").style.left = height + "px";

    document.getElementById("red").style.left = left + "%";
    document.getElementById("red").style.top = top + "%";
  
    // To have 2s time gap after clicking the first block. 
    setTimeout(makeShapeAppear, Math.random() * 2000);
    
}
appearAfterDelay();
document.getElementById("red").onclick = function() {
    // To make the shapes disappear when cliked.
    document.getElementById("red").style.display = "none"; 
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
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

