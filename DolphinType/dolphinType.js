const ctx = canvas.getContext("2d");

let percentBottlenose = 0;
let percentOrca       = 0;
let percentSpinner    = 0;
let percentRiver      = 0;
let percentBionic     = 0;


function checkDolphinType(){
    percentBottlenose = Math.round(Math.random() * 100);
    percentOrca       = Math.round(Math.random() * 100);
    percentSpinner    = Math.round(Math.random() * 100);
    percentRiver      = Math.round(Math.random() * 100);
    percentBionic     = Math.round(Math.random() * 100);
    drawBarChart();
}


function drawBarChart(){
    let barWidth = canvas.width / 15;
    let barPositionIncrement = canvas.width / 6;
    let barPositionOffsetY = 0;
    let maxBarHeight = canvas.height - 10 - barPositionOffsetY;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(10, 49, 129)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(72, 122, 222)";

    // Bottlenose Bar
    ctx.fillRect(barPositionIncrement * 1 - barWidth/2, canvas.height - (maxBarHeight / 100 * percentBottlenose) - barPositionOffsetY, barWidth, (maxBarHeight / 100 * percentBottlenose)) + 2;
    // Orca Bar
    ctx.fillRect(barPositionIncrement * 2 - barWidth/2, canvas.height - (maxBarHeight / 100 * percentOrca) - barPositionOffsetY, barWidth, (maxBarHeight / 100 * percentOrca)) + 2;
    // Spinner Bar
    ctx.fillRect(barPositionIncrement * 3 - barWidth/2, canvas.height - (maxBarHeight / 100 * percentSpinner) - barPositionOffsetY, barWidth, (maxBarHeight / 100 * percentSpinner)) + 2;
    // River Bar
    ctx.fillRect(barPositionIncrement * 4 - barWidth/2, canvas.height - (maxBarHeight / 100 * percentRiver) - barPositionOffsetY, barWidth, (maxBarHeight / 100 * percentRiver)) + 2;
    // Bionic Death Bar
    ctx.fillRect(barPositionIncrement * 5 - barWidth/2, canvas.height - (maxBarHeight / 100 * percentBionic) - barPositionOffsetY, barWidth, (maxBarHeight / 100 * percentBionic)) + 2;
    
}

// Resizes the canvas when the window is resized
window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;
    drawBarChart();
}