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
    updateButtonDisabledStates();
}

function doDock() {
    match.events.push(new Event(match, match.getRobot(selectedRobot), EVENT_TYPES.CHARGE_STATION_DOCK));
}

function doEngage() {
    match.events.push(new Event(match, match.getRobot(selectedRobot), EVENT_TYPES.CHARGE_STATION_ENGAGE));
}

function doSingleSubstation() {
    console.log("Single substation for robot", selectedRobot.teamNumber);
    match.getRobot(selectedRobot).setInventory(CONE)
    console.log(match.getRobot(selectedRobot).getInventory())
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

function selectGamePiece(gamePiece) {
    selectedGamePieceType = gamePiece;
    // todo: add selected
}

function updateDisabledButtonText() {
    let robot = match.getRobot(selectedRobot);
    document.getElementById("disabledBtn").innerHTML = robot.disabled ? "Enabled" : "Disabled";
}

function updateButtonDisabledStates() {
    let robot = match ? match.getRobot(selectedRobot) : null;
    if (robot === null) {
        document.getElementById("chargeStationRed").childNodes.forEach(x => {x.disabled = true;});
        document.getElementById("chargeStationBlue").childNodes.forEach(x => {x.disabled = true;});
        document.querySelector(".redSubstation").childNodes.forEach(x => {x.disabled = true;});
        document.querySelector(".blueSubstation").childNodes.forEach(x => {x.disabled = true;});
        document.querySelector(".centerBottom").childNodes.forEach(x => {
            if (x.classList.contains("gamePieceSelector")) return;
            x.disabled = true;
        });
        document.getElementById("redAlliance").childNodes.forEach(x => {x.disabled = true;});
        document.getElementById("blueAlliance").childNodes.forEach(x => {x.disabled = true;});
    } else {
        let isRed = robot.alliance.color === RED;
        document.getElementById("chargeStationRed").childNodes.forEach(x => {x.disabled = !isRed;});
        document.getElementById("chargeStationBlue").childNodes.forEach(x => {x.disabled = isRed;});
        document.querySelector(".redSubstation").childNodes.forEach(x => {x.disabled = !isRed;});
        document.querySelector(".blueSubstation").childNodes.forEach(x => {x.disabled = isRed;});
        document.querySelector(".centerBottom").childNodes.forEach(x => {
            if (x.id === "mobilityBonusBtn") return;
            if (x.classList.contains("gamePieceSelector")) return;
            x.disabled = false;
        });
        document.getElementById("redAlliance").childNodes.forEach(x => {x.disabled = !isRed;});
        document.getElementById("blueAlliance").childNodes.forEach(x => {x.disabled = isRed;});
    }
}

document.querySelectorAll("button[data-alliance=\"red\"],button[data-alliance=\"blue\"]")
    .forEach(x => x.addEventListener("click", event => robotButtonListener(x, event)));

window.addEventListener("load", updateButtonDisabledStates);