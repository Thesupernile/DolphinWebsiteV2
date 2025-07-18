const bottlenoseHabitat = "Bottlenose dolphins inhabit the world's tropical and temparate water including bays, seas and estuaries. They inhabit both costal waters and deepwater oceans.";
const bottlenoseDiet = "Bottlenose dolphins eat a diet composing of fish, squid and crustaceans, such as crabs, shrimps and shellfish. A bottlenose dolphin tends to eat about 5% of their body weight per day. Bottlenose dolphins hunt in groups known as pods. One example of a group hunting tactic used by bottlenose dolphins has the group surround a school of fish. They then each take turns to swim through the middle of the school to feed.";
const bottlenoseAdditionalFacts = "Bottlenose dolphins feature prominently in both media and in history. Movies like Flipper have made bottlenose dolphins into the archetypal dolphin, despite not being the most common type of dolphin in the wild. Bottlenose Dolphins have been known to be trained by humans for a multitude of tasks from assisting fishermen in driving fish into their nets to alterting sailors of sea mines. Dolphins are also famous for their intelligence. Dolphins give names to each other, can recognise themselves in mirrors and are capable of understanding the concept of the greater good, all signs that they are highly intelligent.";

const orcaHabitat = "Orcas can be found in almost every ocean in the world. However, they are most commonly found in northern regions, near the Arctic and Antarctic Oceans. Some groups of orcas are migratory and move with their prey, while others are resident and remiain in the same location year round. Groups of orcas in different areas can have completely different social heirarchies and diets much like humans do.";
const orcaDiet = "Orcas diet can consist of nearly any sea creatures. Many pods will hunt fish and squid but others can hunt sharks and even other species of dolphins. Orcas are known to teach their young their hunting tactics, so what diet a specific orca has is dependent on which pod it is a part of. Orcas in the San Francisco Bay area have been observed flipping sharks upside down to immobalise them and teaching this practice to their children. Other hunting techniques include creating large waves to wash seals off of ice and beaching themselves to catch prey along the shore. (Like deer and moose)";
const orcaAdditionalFacts = "Despite their predatory nature, there are no documented fatal attacks by an orca on humans in the wild. However in captivity, orcas have been responsible for four human deaths. Some theorise that poor reactions to captivity are responsible for this difference. Their nickname, the killer whale, comes from sailors who observed the orca hunting and killing whales.";

const spinnerHabitat = "Spinner dolphins are found in tropical and subropical waters across the world. Spinner dolphins tend to be found in areas of deep water nearby coastal waters. They typically move into deeper waters to hunt but return to coastal waters to socialise and rest. These coastal areas tend to have calmer water and a sandy floor, which helps them to see predators.";
const spinnerDiet = "Spinner dolphins typically eat small fish, shrimp, squid and other small shallow water marine animals. Spinner dolphins hunt at night, when their prey species have moved from deep open waters into shallower costal waters. ";
const spinnerAdditionalFacts = "Spinner dolphins are named for their tendancy to leap and spin out of the water. Their latin name however, longirostris, means long beak named for their thinly shaped nose. Spinner dolphins are capable of spinning up to six times in a single leap. Spinner dolphins are relatively small compared to other dolphin species measuring between 1.5 and 2.1 metres long. During rest, spinner dolphins move in large groups as a single unit, spaced just widely enough not to hit into eachother. When ending their rest period, spinner dolphins swim towards open waters and then back to the coast in a zig zag pattern. It's thought that this movement is a social cue to coordinate their movements after a period of rest.";

const amazonRiverHabitat = "Amazon river dolphins have the widest range of any river dolphin. They inhabit almost the entire amazon river basin, an area spanning 7 million square kilometres. Some subspecies have become completely isolated due to rapids and waterfalls preventing their movements, causing slight genetic deviations between species. During the dry season, dolphins are confined to the deepest parts of the river beds however in the wet season the dolphins disperse across the flooded areas, allowing them a greater range to hunt.";
const amazonRiverDiet = "Amazon river dolphins have a wide ranging diet consisting of catfish, piranhas, river turtles, crabs, frogs and croakers. In total, their diet consists of over fifty three different species of fish.";
const amazonRiverAdditionalFacts = "The amazon river dolphin is the world's largest species of river dolphin with fully grown adult males can measure up to 2.5m. Although they're born grey, amazon river dolphins become more pink as they mature with males being typically pinker than females. This lends them one of their nicknames, the pink river dolphin.";


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

