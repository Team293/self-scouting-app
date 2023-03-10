new Q5("global");

const render = [];

setup = function () {
    resizeCanvas(windowWidth, windowHeight);
};

let VALUE = 2;

draw = function () {
    background(0, 0, 0);
    render.forEach((r) => r.draw());
};

windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
    render.forEach((r) => r.resize());
};

const btn = new Button({
    x: 100,
    y: 100,
    width: "50%",
    height: "50%",
    content: "Button 0",
    styles: {
        padding: 20,
        borderRadius: 10,
        fontSize: 40,
        backgroundColor: "#FFFFFF",
        textColor: "#000010",
        active: {
            backgroundColor: "#AAAAAA",
        },
    },
});

btn.onClick = () => {
    VALUE *= 2;
    btn.setContent(VALUE);
};
