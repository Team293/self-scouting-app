function robotButtonListener(button, event) {
    const teamNumber = button.getAttribute("team-number");
    const color = button.getAttribute("data-alliance") == "red" ? RED : BLUE;
    console.log(`Selecting robot ${teamNumber} on alliance ${color}`);
}

function doDock(color) {
    console.log("Docking:", color);
}

function doEngage(color) {
    console.log("Engaging:", color);
}

function doSingleSubstation(color) {
    console.log("Single substation:", color);
}

function doDoubleSubstation(color) {
    console.log("Double substation:", color);
}

function doFieldPickup() {
    console.log("Field pickup");
}

function doFieldDrop() {
    console.log("Field drop");
}

function doMobilityBonus() {
    console.log("Mobility bonus");
}

function doDisabled() {
    console.log("Disabled");
}

function fieldButtonPressed(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const color = event.target.parentElement == redAlliance ? RED : BLUE;
    console.log(index, color);
}

document.querySelectorAll("button[data-alliance=\"red\"],button[data-alliance=\"blue\"]")
    .forEach(x => x.addEventListener("click", event => robotButtonListener(x, event)));