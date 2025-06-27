function showInfoScreen(textOption){
    // 0 is bottlenose, 1 is orca, 2 is spinner and 3 is amazon river dolphin
    let habitatFilepath = "InfoParagraphs/Habitat-${textOption}.txt";
    let dietFilepath = "InfoParagraphs/Diet-Bottlenose.txt";
    let additionalFactFilepath = "InfoParagraphs/AdditionalFacts-Bottlenose";
}


function bottlenoseButtonClicked(){
    showInfoScreen("bottlenose");
}

function orcaButtonClicked(){
    showInfoScreen("orca");
}

function spinnerButtonClicked(){
    showInfoScreen("spinner");
}

function amazonRiverButtonClicked(){
    showInfoScreen("amazonRiver");
}

