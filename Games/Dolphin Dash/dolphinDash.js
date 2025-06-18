const ctx = canvas.getContext("2d");
playerAlive = false;
dolphinPostionX = 10;
dolphinPositionY = 2;
playerWidth = 100;
playerHeight = 100;
score = 0;
numberOfObstacles = 3;
obstacles = [];

class obstacle {
    constructor(positionX, positionY, image){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = 64;
        this.length = 64;
        this.image = image;
    }
}


function drawCanvas(){
    // Clear the canvas // 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(10, 49, 129)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the dolphin //
    ctx.drawImage(document.getElementById("dolphinImage"), dolphinPostionX, dolphinPositionY * (canvas.height / 3) - 20 );

    // Draw the obstacles //
    for (let i = 0; i < obstacles.length; i++){
        obstacle = obstacles[i];
        ctx.drawImage(document.getElementById(obstacle.image), obstacle.positionX, obstacle.positionY);
    }
}

function checkForCollisions(){
    for (obstacle in obstacles){
        // For every obstacle, check if it intersects with the player //
        if ((obstacle.positionX <= dolphinPostionX && obstacle.positionX + obstacle.width >= dolphinPostionX + playerWidth)){
            if (obstacle.positionY <= dolphinPositionY && obstacle.positionY + obstacle.width >= dolphinPositionY + playerHeight){
                playerAlive = false;
            }
        }
    }
}

function runGameFrame(){
    let positionXIncrement = 10;

    // Move the obstacles towards the player //
    for (let i = 0; i < obstacles.length; i++){
        let item = obstacles[i];
        item.positionX -= positionXIncrement;
        // Remove the obstacle if it is off the other side of the fmap
        if (item.positionX < 0){
            let index = obstacles.indexOf(item);
            obstacles.splice(index, 1);
            // Temp Code //
            createObstacle(canvas.width, canvas.height/3 + 20);
        }
    }

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

function createObstacle(obsPosX, obsPosY){
    let obstacleInit = new obstacle(obsPosX, obsPosY, "obstacleImage");
    obstacles.push(obstacleInit);
}

function playerDied(){
    // Bring up the player death screen //
    document.getElementById("deathScreen").style.display = "inline";
}

function gameStarted(){
    // Revive the player and hide the welcome screen/death screen //
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("deathScreen").style.display = "none";
    playerAlive = true;
    score = 0;
    obstacles = [];
    for (let i = 0; i < numberOfObstacles; i++){
        // Temp Code //
        createObstacle(canvas.width - 64, canvas.height/3 + 20 + 32);
    }
    runGameFrame();
}

function moveDolphinUp(){
    if (dolphinPositionY != 0){
        dolphinPositionY--;
    }
}

function moveDolphinDown(){
    if (dolphinPositionY != 2){
        dolphinPositionY++;
    }
}

document.body.onkeydown = function(key){
    switch(key.code){
        case ("KeyW"):
            moveDolphinUp();
            break;
        case ("KeyS"):
            moveDolphinDown();
            break;
    }
}

document.body.addEventListener("keydown", moveDolphinUp());

window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;
}