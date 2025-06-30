const bottlenoseHabitat = "Bottlenose Habitat";
const bottlenoseDiet = "Bottlenose Diet";
const bottlenoseAdditionalFacts = "Extra Bottlenose Facts";
const orcaHabitat = "";
const orcaDiet = "";
const orcaAdditionalFacts = "";

const spinnerHabitat = "";
const spinnerDiet = "";
const spinnerAdditionalFacts = "";

const amazonRiverHabitat = "";
const amazonRiverDiet = "";
const amazonRiverAdditionalFacts = "";


function showInfoScreen(textOption){
    let habitatText;
    let dietText;
    let additionalText;

    switch (textOption){
        case "Bottlenose":
            habitatText = bottlenoseHabitat;
            dietText = bottlenoseDiet;
            additionalText = bottlenoseAdditionalFacts;
            break;
        case "Orca":
            habitatText = orcaHabitat;
            dietText = orcaDiet;
            additionalText = orcaAdditionalFacts;
            break;
        case "Spinner":
            habitatText = spinnerHabitat;
            dietText = spinnerDiet;
            additionalText = spinnerAdditionalFacts;
            break;
        case "AmazonRiver":
            habitatText = amazonRiverHabitat;
            dietText = amazonRiverDiet;
            additionalText = amazonRiverAdditionalFacts;
            break;
    }


    document.getElementById("habitatInfo").innerHTML = habitatText;
    document.getElementById("dietInfo").innerHTML = dietText;
    document.getElementById("additionalInfo").innerHTML = additionalText;


    document.getElementById("dolphinFacts").style.display = "block";
}


function bottlenoseButtonClicked(){
    showInfoScreen("Bottlenose");
}

function orcaButtonClicked(){
    showInfoScreen("Orca");
}

function spinnerButtonClicked(){
    showInfoScreen("Spinner");
}

function amazonRiverButtonClicked(){
    showInfoScreen("AmazonRiver");
}

