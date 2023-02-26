// TODO: Make these buttons actually work

function robotButtonListener(button, event) {
    const teamNumber = button.getAttribute("team-number");
    const color = button.getAttribute("data-alliance") === "red" ? RED : BLUE;
    document.querySelectorAll("#robots>button").forEach(b => {
        b.classList.remove("selected");
    });
    button.classList.add("selected");
    selectedRobot = {teamNumber, color};
    updateDisabledButtonText();
}

function colorCheck(color) {
    return selectedRobot && selectedRobot.color === color;
}

function doDock() {
    console.log("Docking for robot", selectedRobot.teamNumber);
}

function doEngage() {
    console.log("Engaging for robot", selectedRobot.teamNumber);
}

function doSingleSubstation() {
    console.log("Single substation for robot", selectedRobot.teamNumber);
}

function doDoubleSubstation() {
    console.log("Double substation for robot", selectedRobot.teamNumber);
}

function doFieldPickup() {
    console.log("Field pickup for robot", selectedRobot.teamNumber);
}

function doFieldDrop() {
    console.log("Field drop for robot", selectedRobot.teamNumber);
}

function doMobilityBonus() {
    console.log("Mobility bonus for robot", selectedRobot.teamNumber);
}

function doDisabled() {
    let robot = match.getRobot(selectedRobot);
    robot.disabled = !robot.disabled;
    updateDisabledButtonText();
}

function fieldButtonPressed(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const color = event.target.parentElement == redAlliance ? RED : BLUE;
    console.log(index, color);
}

function updateDisabledButtonText() {
    let robot = match.getRobot(selectedRobot);
    document.getElementById("disabledBtn").innerHTML = robot.disabled ? "Enabled" : "Disabled";
}

document.querySelectorAll("button[data-alliance=\"red\"],button[data-alliance=\"blue\"]")
    .forEach(x => x.addEventListener("click", event => robotButtonListener(x, event)));