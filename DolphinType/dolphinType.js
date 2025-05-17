const ctx = canvas.getContext("2d");

let percentBottlenose = 0;
let percentOrca       = 0;
let percentSpinner    = 0;
let percentRiver      = 0;
let percentBionic     = 0;

const scrabbleConversions = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1,
    'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
    'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1,
    'P': 3, 'Q': 10,'R': 1, 'S': 1, 'T': 1,
    'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4,
    'Z': 10
}

const loadingScreenMessages = {
    0: "Loading...",
    1: "Finding fishes...",
    2: "Dodging sharks...",
    3: "Blowing bubbles...",
    4: "Speaking calculus...",
    5: "Cleaning the oceans...",
    6: "Logging star movements...",
    7: "Tracking dolphin types...",
    8: "Searching for dolphins..."
}

function dolphinButtonClicked(){
    let loadMessageNum = Math.floor(Math.random() * 9);
    document.getElementById("loadingScreen").style.display = "block";
    document.getElementById("loadText").innerHTML = loadingScreenMessages[loadMessageNum];
    timeout = setTimeout(checkDolphinType, 500);
}


function checkDolphinType(){
    // Removes the loader
    document.getElementById("loadingScreen").style.display = "none";

    // So the way this works is werid but kinda cool. 
    // Bottlenose percent is based off of the average value of the letters in your name
    // Orca is based on the difference between the first and last letter
    // Spinner is based on the range of letters in your name
    // River is based on the standard deviation of the letters in your name
    // Bionic is based on the number of uncommon letters in your name 

    let inputBox = document.getElementById("userInputTextBox");
    let userInput = (inputBox.value).toUpperCase();
    let seedSum = 0;
    let standardDeviation = 0;
    let average = 0;
    let uncommonLetterScore = 0; // We literally just find the average scrabble value of the letters in the name

    // Find the sum and average of the letters in the input (both for real value and for scrabble value)
    let largestLetter = 0;
    let smallestLetter = 26;
    let firstValidLetter = 0;
    let lastValidLetter = 0;
    let totalValidCharacterCount = 0;
    for (let i = 0; i < userInput.length; i++){
        let character = userInput.charCodeAt(i) - 64;
        if (character >= 1 && character <= 26){
            if (firstValidLetter == 0){ firstValidLetter = character}
            lastValidLetter = character;

            if (character < smallestLetter){ smallestLetter = character; }
            if (character > largestLetter){ largestLetter = character; }

            seedSum += character;
            totalValidCharacterCount += 1;
            uncommonLetterScore += Math.pow(scrabbleConversions[userInput[i]], 2);
        }
    }
    let firstLastLetterDifference = Math.abs(firstValidLetter - lastValidLetter);
    let range = largestLetter - smallestLetter;
    average = seedSum/totalValidCharacterCount;
    uncommonLetterScore = Math.sqrt(uncommonLetterScore/totalValidCharacterCount);
    // Find standard deviation (done after we have the average because average is necessary for the calculation)
    for (let i = 0; i < userInput.length; i++){
        let character = userInput.charCodeAt(i) - 64;
        if (character >= 1 && character <= 26){
            standardDeviation += Math.pow((character - average), 2);
        }
    }
    standardDeviation = Math.sqrt(standardDeviation/totalValidCharacterCount);

    let scoreBottlenose = Math.round(((27-average)/26) * 100); // An average letter of 'A' achieves a top bottlenose score
    let scoreOrca       = Math.round((firstLastLetterDifference/26) * 100); // A larger difference means more percent orca
    let scoreSpinner    = Math.round((range/26) * 100); // A large range means a larger percent spinner dolphin
    let scoreRiver      = Math.round((1-(standardDeviation/13)) * 100);
    let scoreBionic     = Math.round((uncommonLetterScore/10) * 100); // Higher uncommon letter score, higher bionic death dolphin percentage
    let totalScore = scoreBottlenose + scoreBionic + scoreOrca + scoreRiver + scoreSpinner;

    percentBottlenose   = scoreBottlenose/totalScore * 100;
    percentOrca         = scoreRiver/totalScore * 100;
    percentSpinner      = scoreSpinner/totalScore * 100;
    percentRiver        = scoreRiver/totalScore * 100;
    percentBionic       = scoreBionic/totalScore * 100;

    // Display the result
    document.getElementById("resultsScreen").style.display = "inline";
    if (percentBottlenose >= percentOrca && percentBottlenose >= percentSpinner && percentBottlenose >= percentRiver && percentBottlenose >= percentBionic){
        document.getElementById("bottlenoseResult").style.display = "inline";
    }
    else if (percentOrca >= percentBottlenose && percentOrca >= percentSpinner && percentOrca >= percentRiver && percentOrca >= percentBionic){
        document.getElementById("orcaResult").style.display = "inline";
    }
    else if (percentSpinner >= percentBottlenose && percentSpinner >= percentOrca && percentSpinner >= percentRiver && percentSpinner >= percentBionic){
        document.getElementById("spinnerResult").style.display = "inline";
    }
    else if (percentRiver >= percentBottlenose && percentRiver >= percentOrca && percentRiver >= percentSpinner && percentRiver >= percentBionic){
        document.getElementById("riverResult").style.display = "inline";
    }
    else if (percentBionic >= percentBottlenose && percentBionic >= percentOrca && percentBionic >= percentSpinner && percentBionic >= percentRiver){
        document.getElementById("bionicResult").style.display = "inline";
    }

    drawBarChart();
}


function drawBarChart(){
    let barWidth = canvas.width / 10;
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

function closeResultsMenu(){
    document.getElementById("resultsScreen").style.display = "none";
    document.getElementById("bottlenoseResult").style.display = "none";
    document.getElementById("orcaResult").style.display = "none";
    document.getElementById("spinnerResult").style.display = "none";
    document.getElementById("riverResult").style.display = "none";
    document.getElementById("bionicResult").style.display = "none";
}

// Resizes the canvas when the window is resized

function displayLoadingScreen(){
    let loadMessageNum = Math.floor(Math.random() * 9);
    document.getElementById("loadText").innerHTML = loadingScreenMessages[loadMessageNum];
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
    canvas.height = window.innerHeight * 0.7;
    drawBarChart();
}

window.onload = displayLoadingScreen();


window.onresize = function() {
    resizePage();
}