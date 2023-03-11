new Q5("global"); //NOSONAR shut up about "uSeLeSs InStAnTiAtIoN"

const render = [];

setup = function () {
    resizeCanvas(windowWidth, windowHeight);
};

let VALUE = 2;

draw = function () {
    // reverse through render, and check if any buttons are clicked
    let mousePressed = mouseIsPressed;

    const clickPriority = render.reverse();
    // Loop through until a false value is returned
    clickPriority.every((r) => {
        return r.updateState(mousePressed);
    });

    render.forEach((r) => r.onUpdate());

    background(0, 0, 0);
    cursor("default");
    render.forEach((r) => r.draw());
};

windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
    render.forEach((r) => r.resize());
};

const btn = new Button({
    x: "50%",
    y: "50%",
    content: "2",
    width: "50vw",
    height: "30vw",
    styles: {
        verticalAlign: "center",
        horizontalAlign: "center",
        padding: 20,
        borderRadius: "50%",
        fontSize: "5vw",
        backgroundColor: "#032a69",
        textColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 0,
        active: {
            backgroundColor: "#09295c",
        },
        hover: {
            backgroundColor: "#0e3c87",
        },
    },
});

btn.onClick = () => {
    VALUE += 2;
};

btn.onUpdate = () => {
    btn.content = VALUE;
};

// PUT IN GRID.js
const gridSize = 100 / 11;
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 9; y++) {
        const gridButton = new GridButton({
            id: x * 9 + (y + 1),
            x: x * gridSize + "vh",
            y: `${y * gridSize}vh`,
            width: gridSize + "vh",
            height: gridSize + "vh",
            styles: {
                hover: {
                    backgroundColor: "#CCCCCC",
                },
                active: {
                    backgroundColor: "#888888",
                },
            },
        });
        gridButton.onClick = () => {
            if (gridButton.content === PIECE.CUBE) {
                gridButton.content = PIECE.EMPTY;
            } else {
                gridButton.content = PIECE.CUBE;
            }
        };
    }
}

const match = Match.fromTeamNumbers(1, 2, 3, 4, 5, 6);
const timer = new Timer(match);
// TODO: start timer with navbar frontend stuff
// timer.play();
