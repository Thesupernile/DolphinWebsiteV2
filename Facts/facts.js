const bottlenoseHabitat = "Bottlenose dolphins inhabit the world's tropical and temparate water including bays, seas and estuaries. They inhabit both costal waters and deepwater oceans.";
const bottlenoseDiet = "Bottlenose dolphins eat a diet composing of fish, squid and crustaceans, such as crabs, shrimps and shellfish. A bottlenose dolphin tends to eat about 5% of their body weight per day. Bottlenose dolphins hunt in groups known as pods. One example of a group hunting tactic used by bottlenose dolphins has the group surround a school of fish. They then each take turns to swim through the middle of the school to feed.";
const bottlenoseAdditionalFacts = "Bottlenose dolphins feature prominently in both media and in history. Movies like Flipper have made bottlenose dolphins into the archetypal dolphin, despite not being the most common type of dolphin in the wild. Bottlenose Dolphins have been known to be trained by humans for a multitude of tasks from assisting fishermen in driving fish into their nets to alterting sailors of sea mines. Dolphins are also famous for their intelligence. Dolphins give names to each other, can recognise themselves in mirrors and are capable of understanding the concept of the greater good, all signs that they are highly intelligent.";

const orcaHabitat = "Orcas can be found in almost every ocean in the world. However, they are most commonly found in northern regions, near the Arctic and Antarctic Oceans. Some groups of orcas are migratory and move with their prey, while others are resident and remiain in the same location year round. Groups of orcas in different areas can have completely different social heirarchies and diets much like humans do.";
const orcaDiet = "Orcas diet can consist of nearly any sea creatures. Many pods will hunt fish and squid but others can hunt sharks and even other species of dolphins. Orcas are known to teach their young their hunting tactics, so what diet a specific orca has is dependent on which pod it is a part of. Orcas in the San Francisco Bay area have been observed flipping sharks upside down to immobalise them and teaching this practice to their children. Other hunting techniques include creating large waves to wash seals off of ice and beaching themselves to catch prey along the shore. (Like deer and moose)";
const orcaAdditionalFacts = "Despite their predatory nature, there are no documented fatal attacks by an orca on humans in the wild. However in captivity, orcas have been responsible for four human deaths. Some theorise that poor reactions to captivity are responsible for this difference. Their nickname, the killer whale, comes from sailors who observed the orca hunting and killing whales.";

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

