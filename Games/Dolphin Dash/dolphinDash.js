const ctx = canvas.getContext("2d");
playerAlive = false;
dolphPosX = 10;
dolphPosY = 2;
playerWidth = 128;
playerHeight = 128;
score = 0;
numberOfObstacles = 3;
obstacles = [];

const OBSTSPEEDINIT = 10;
const OBSTSPEEDMAX = 30;
const SPEEDRAMPUPTIME = 3600;
const DOUBLEOBSTACLESPAWNCHANCE = 4;
const MAXPOSXOFFSET = 800;
const OBSTTICK = 1800;
const DEBUGMODE = false;

obstMoveSpeed = OBSTSPEEDINIT;

class obstacle {
    constructor(positionX, positionY, image){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = 128;
        this.height = 128;
        this.image = image;
    }
}


function drawCanvas(){
    // Clear the canvas // 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(10, 49, 129)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the dolphin //
    // Dolphin Position is the middle of the player
    let dolphPosYAbs = dolphPosY * ( canvas.height / 3 ) + canvas.height/12;
    ctx.drawImage(document.getElementById("dolphinImage"), dolphPosX, dolphPosYAbs);

    // Draw the obstacles //
    for (let i = 0; i < obstacles.length; i++){
        let obst = obstacles[i];
        ctx.drawImage(document.getElementById(obst.image), obst.positionX, obst.positionY);
    }
}

function checkForCollisions(){
    for (let i = 0; i < obstacles.length; i++){
        // Known issue where passing over an obstacle in the bottom row causes a collision to be detected
        let obst = obstacles[i];

        let dolphinLeft = dolphPosX;
        let dolphinRight = dolphinLeft + playerWidth;
        let dolphinTop = ( dolphPosY * (canvas.height / 3) );
        let dolphinBottom = dolphinTop + playerHeight;

        let obstLeft = obst.positionX;
        let obstRight = obstLeft + obst.width;
        let obstTop = obst.positionY;
        let obstBottom = obstTop + obst.height;

        // For every obstacle, check if it intersects with the player //
        if ((obstRight >= dolphinLeft && obstLeft <= dolphinRight)){
            if (obstTop <= dolphinBottom && obstBottom >= dolphinTop){
                playerAlive = false;
            }
        }

        // DEBUG
        if (DEBUGMODE){
            // Draws corners of the dolphin hitbox
            ctx.fillStyle = "red";
            ctx.fillRect(dolphinLeft, dolphinTop, 5, 5);
            ctx.fillRect(dolphinLeft, dolphinBottom - 5, 5, 5);
            ctx.fillRect(dolphinRight - 5, dolphinTop, 5, 5);
            ctx.fillRect(dolphinRight - 5, dolphinBottom - 5, 5, 5);
        }
    }
}

async function obstacleController(){
    // Spawns new obstacles at a regular time interval (CONST OBSTTICK)
    // For this game, we have a random chance of spawning zero one or two obstacles in each tick
    // Ten percent Chance for 2, Thirty Percent Chance for 1 and 60% chance for 0
    let rand = Math.floor(Math.random() * 10);
    if (rand <= 3){
        let clearSpace = Math.floor(Math.random() * 3);
        for (let i = 0; i < 3; i++){
            if (i != clearSpace){
                createObstacle(canvas.width, canvas.height * i + 32);
            }
        }
    }
    else if (rand <= 6){
        createObstacle(canvas.width);
    }
    createObstacle(canvas.width);
    if (playerAlive){
        //
        const playerSpeedMulti = ((obstMoveSpeed) / OBSTSPEEDINIT) + 1;

        obstTimeout = window.setTimeout(obstacleController, OBSTTICK / playerSpeedMulti);   
    }
}

function runGameFrame(){

    moveObstacles();

    // Draw the canvas //
    drawCanvas();

    // Check for collisions //
    checkForCollisions();

    // Increase score //
    score++;
    document.getElementById("scoreBox").innerHTML = "Score: " + score;

    // If player has died, bring up death screen //
    if (playerAlive == false){
        playerDied();
    }
    else{
        // The game will run at aprox 60fps with delay time of 17ms //
        nextFrame = setTimeout(runGameFrame, 17);
        if (obstMoveSpeed < OBSTSPEEDMAX){
            let obstSpeedInrease = (OBSTSPEEDMAX - OBSTSPEEDINIT) / SPEEDRAMPUPTIME;
            obstMoveSpeed += obstSpeedInrease;
        }
    }
}

function createObstacle(obsPosX = null, obsPosY = null){
    if (obsPosY == null){
        // Sets the obsPosY to one of the three preset lanes ( +32 used as a spacer)
        let obsPosFormat = Math.floor(Math.random() * 3);
        obsPosY = obsPosFormat * (canvas.height/3)  + 32;
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
    document.getElementById("scoreParagraph").innerHTML = "Score: " + score;
    // Cancels the object spawning timer
    window.clearTimeout(obstTimeout);
}

function gameStarted(){
    // Revive the player and hide the welcome screen/death screen //
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("deathScreen").style.display = "none";
    playerAlive = true;
    score = 0;
    obstacles = [];
    obstMoveSpeed = OBSTSPEEDINIT;
    runGameFrame();
    obstacleController();
}

function moveObstacles(){
    for (let i = 0; i < obstacles.length; i++){
        let item = obstacles[i];
        item.positionX -= obstMoveSpeed;
        // Remove the obstacle if it is off the other side of the map
        if (item.positionX < 0){
            let index = obstacles.indexOf(item);
            obstacles.splice(index, 1);
            i--;  
        }
    }
}

function moveDolphinUp(){
    if (dolphPosY != 0){
        dolphPosY--;
    }
}

function moveDolphinDown(){
    if (dolphPosY != 2){
        dolphPosY++;
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

function displayLoadingScreen(){
    document.getElementById("loadText").innerHTML = "Loading...";
    loadTimeout = setTimeout(pageLoaded, 500);
}

function pageLoaded(){
    resizePage();
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("loadingScreen").style.display = "none";
}

function resizePage(){
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;
}

window.onload = displayLoadingScreen();


window.onresize = function() {
    resizePage();
}