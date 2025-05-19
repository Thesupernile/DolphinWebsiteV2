const ctx = canvas.getContext("2d");
playerAlive = false;
dolphinPostionX = 10;
dolphinPositionY = 10;
score = 0;
obstacles = [];

obstacle = {
    positionX: 0,
    positionY: 0,
    width: 100,
    length: 100,
    image: ""
}


function drawCanvas(){
    // Clear the canvas // 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(10, 49, 129)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the dolphin //
    ctx.drawImage("../Assets/movingDolphin.gif", dolphinPostionX, dolphinPositionY);

    // Draw the obstacles //
    for (let i = 0; i < obstacles.length(); i++){
        obstacle = obstacles[i];
        ctx.drawImage(obstacle.image, obstacle.positionX, obstacle.positionY);
    }


}

function checkForCollisions(){

}

function runGameFrame(){
    // Move the obstacles towards the player //


    // Check for collisions //
    checkForCollisions();

    // Draw the canvas //
    drawCanvas();

    // Increase score //
    score++;

    // If player has died, bring up death screen //
    if (playerAlive == false){
        playerDied();
    }
    else{
        // The game will run at aprox 60fps with delay time of 17ms //
        nextFrame = setTimeout(runGameFrame, 17);
    }
}

function playerDied(){
    // Bring up the player death screen //

}

function gameStarted(){
    // Revive the player and hide the welcome screen/death screen //
    playerAlive = true;
    score = 0;
}

window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;
}