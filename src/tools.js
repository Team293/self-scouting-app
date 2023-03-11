// Convert hex such as #ffffff to rgb such as {r: 255, g: 255, b: 255}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    // If the input string is not valid, throw an error
    if (!result) {
        // throw new Error("Invalid hex color: " + hex);
        return null;
    }

    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function setColor(color, func) {
    try {
        color = hexToRgb(color);
        func(color.r, color.g, color.b);
    } catch (e) {
        // console.error(e);
        func(0, 0, 0);
        return;
    }
}

function copyObj(obj) {
    if (typeof obj !== "object") return obj;

    return JSON.parse(JSON.stringify(obj));
}
