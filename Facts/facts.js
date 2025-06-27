function showInfoScreen(textOption){
    // 0 is bottlenose, 1 is orca, 2 is spinner and 3 is amazon river dolphin
    let habitatFilepath = "InfoParagraphs/Habitat-" + textOption + ".txt";
    let dietFilepath = "InfoParagraphs/Diet-" + textOption + ".txt";
    let additionalFactFilepath = "InfoParagraphs/AdditionalFacts-" + textOption + ".txt";

    let habitatText;
    let dietText;
    let additionalText;

    var reader = new FileReader();

    habitatText = reader.readAsText(habitatFilepath);

    document.getElementById("habitatInfo").innerHTML = habitatText;
    document.getElementById("dietInfo").innerHTML = dietText;
    document.getElementById("additionalInfo").innerHTML = additionalText;

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

