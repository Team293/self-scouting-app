new Q5("global");

const render = [];

setup = function () {
    resizeCanvas(windowWidth, windowHeight);
};

let VALUE = 2;

draw = function () {
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
    btn.setContent(VALUE);
};
