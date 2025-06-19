const ctx = canvas.getContext("2d");
playerAlive = false;
dolphinPostionX = 10;
dolphinPositionY = 2;
playerWidth = 100;
playerHeight = 100;
score = 0;
numberOfObstacles = 3;
obstacles = [];

const DOUBLEOBSTACLESPAWNCHANCE = 4;
const MAXPOSXOFFSET = 800;
const OBSTACLEMOVESPEED = 10;
const SPAWNINTERVAL = 500;

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
        let obstacle = obstacles[i];
        ctx.drawImage(document.getElementById(obstacle.image), obstacle.positionX, obstacle.positionY);
    }
}

function checkForCollisions(){
    for (let obstacle in obstacles){
        // For every obstacle, check if it intersects with the player //
        if ((obstacle.positionX <= dolphinPostionX && obstacle.positionX + obstacle.width >= dolphinPostionX + playerWidth)){
            if (obstacle.positionY <= dolphinPositionY && obstacle.positionY + obstacle.width >= dolphinPositionY + playerHeight){
                playerAlive = false;
            }
        }
    }
}

async function obstacleController(){
    // Spawns new obstacles at a regular time interval
}

function runGameFrame(){

    moveObstacles();
    
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

function createObstacle(obsPosX = null, obsPosY = null){
    if (obsPosY == null){
        // Sets the obsPosY to one of the three preset lanes ( +52 used as a spacer)
        let obsPosFormat = Math.floor(Math.random() * 3);
        obsPosY = obsPosFormat * (canvas.height/3)  + 64;
    }
    if (obsPosX == null){
        // Sets the obsPosX to the canvas width plus some random offset
        let obsPosXOffset = Math.floor(Math.random() * MAXPOSXOFFSET);
        obsPosX = canvas.width + obsPosXOffset;
    }
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
        createObstacle();
    }
    runGameFrame();
    obstacleController();
}

function moveObstacles(){
    for (let i = 0; i < obstacles.length; i++){
        let item = obstacles[i];
        item.positionX -= OBSTACLEMOVESPEED;
        // Remove the obstacle if it is off the other side of the map
        if (item.positionX < 0){
            let index = obstacles.indexOf(item);
            obstacles.splice(index, 1);
            //createObstacle();
        }
    }
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
        // case ("KeyD"):
        //     // Sprint
        //     moveObstacles();
        //     break;
    }
}

document.body.addEventListener("keydown", moveDolphinUp());

window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;
}