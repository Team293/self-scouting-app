new Q5("global"); //NOSONAR shut up about "uSeLeSs InStAnTiAtIoN"

const render = [];

const isMobile = window.matchMedia("(pointer: coarse)").matches;

setup = function () {
    resizeCanvas(windowWidth, windowHeight);
};

let VALUE = 2;

let mousePosX = 0;
let mousePosY = 0;
let mouseButtonIsPressed = false;
let touchList = [];

draw = function () {
    if (mouseIsPressed === true || touchList.length > 0) {
        mouseButtonIsPressed = true;
    } else {
        mouseButtonIsPressed = false;
    }

    const clickPriority = render.reverse();
    // Loop through until a false value is returned
    clickPriority.forEach((r) => {
        const pressed = r.updateState(mousePosX, mousePosY, mouseButtonIsPressed);
        if (!pressed) {
            mouseButtonIsPressed = false;
        }
    });
    render.reverse();

    render.forEach((r) => r.onUpdate());

    background(0, 0, 0);
    cursor("default");
    render.forEach((r) => r.draw());
};

windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
    render.forEach((r) => r.resize());
};



const match = Match.fromTeamNumbers(1, 2, 3, 4, 5, 6);
const timer = new Timer(match);
// TODO: start timer with navbar frontend stuff
// timer.play();

const grid = new Grid();
const navbar = new Navbar();

// print list of taps on tap
onmousemove = function (e) {
    mousePosX = e.clientX;
    mousePosY = e.clientY;
}

ontouchstart = function(e) {
    mousePosX = e.touches[0].clientX;
    mousePosY = e.touches[0].clientY;
    touchList = e.touches;
}

ontouchend = function(e) {
    touchList = e.touches;
}