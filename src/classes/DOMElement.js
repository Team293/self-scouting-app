const ALIGN = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1,
};

class DOMElement {
    constructor(parameters) {
        this.width = null;
        this.height = null;
        this.x = 0;
        this.y = 0;

        // Default styles
        this.styles = {
            verticalAlign: "top",
            horizontalAlign: "left",
            padding: 2,
            paddingX: null,
            paddingY: null,
            fontSize: 12,
            borderRadius: 0,
            backgroundColor: "#ffffff",
            textColor: "#000000",
            borderColor: "#000000",
            borderWidth: 0,
            active: {},
            hover: {},
        };

        this.calculated = {};
        this.resize();

        // Add this button to the render array
        render.push(this);
    }

    loadKeys(parameters, object = this) {
        // Load parameters from constructor
        for (const key in parameters) {
            if (key === "styles") {
                this.loadStyles(parameters[key]);
                continue;
            }
            this.loadKey(object, key, parameters[key]);
        }
        this.resize();
    }

    loadStyles(styles, object = this.styles) {
        console.log(styles, object);
        // Loop over the styles object
        for (const key in styles) {
            const value = styles[key];
            // styles: {
            //     padding: 20,
            //     borderRadius: 5,
            //     fontSize: 40,
            //     backgroundColor: "#FFFFFF",
            //     textColor: "#000010",
            //     active: {
            //         backgroundColor: "#DDDDDD",
            //     },
            // },

            // Check if the key is a style
            if (this.styles[key] === undefined) {
                console.error(
                    `Style ${key} is not defined in ${this.constructor.name}`
                );
                continue;
            }

            // Check if the value is an object
            if (typeof value === "object") {
                // Pass the object to the next iteration
                this.loadStyles(value, object[key]);
                continue;
            }

            object[key] = value;
        }
    }

    loadKey(object, key, value) {
        // Check that object key is not undefined
        if (typeof value === "object") {
            for (const subKey in value) {
                // Recursively load subkeys
                this.loadKey(object[key], subKey, value[subKey]);
            }
            return;
        }

        if (object[key] === undefined) {
            console.error(
                `Key ${key} is not defined in ${this.constructor.name}`
            );
            return;
        }
        object[key] = value;
    }

    calculateStyles(styles) {
        const style = copy(styles);

        if (this.active === true) {
            for (const key in styles.active) {
                style[key] = styles.active[key];
            }
            return style;
        }

        if (this.hovered === true) {
            for (const key in styles.hover) {
                style[key] = styles.hover[key];
            }
            return style;
        }

        return style;
    }

    draw() {
        const styles = this.calculateStyles(
            this.calculated.styles ?? this.styles
        );
        this.render(styles);
    }

    calc(value, percent = undefined) {
        if (percent === undefined) {
            percent = windowWidth;
        }

        if (typeof value === "string") {
            if (value.endsWith("%")) {
                value = value.slice(0, -1);
                return (percent * parseInt(value)) / 100;
            }

            if (value.endsWith("px")) {
                value = value.slice(0, -2);
                return parseInt(value);
            }

            if (value.endsWith("vw")) {
                value = value.slice(0, -2);
                return (windowWidth * parseInt(value)) / 100;
            }

            if (value.endsWith("vh")) {
                value = value.slice(0, -2);
                return (windowHeight * parseInt(value)) / 100;
            }
        }

        return value;
    }

    calculateValues(value = this) {
        // loop through each key in the object, and each subobject, calculate the values and return the object
        const calculatedValues = {};

        for (const key in value) {
            if (typeof value[key] === "object") {
                calculatedValues[key] = this.calculateValues(value[key]);
                continue;
            }

            if (key.includes("height")) {
                calculatedValues[key] = this.calc(
                    value[key],
                    this.calc(this.y, windowHeight)
                );
                continue;
            }
            calculatedValues[key] = this.calc(
                value[key],
                this.calc(this.x, windowWidth)
            );
        }

        return calculatedValues;
    }

    render(styles) {
        // Render the element
    }

    resize() {
        this.calculated = this.calculateValues();
        // delete this.calculated.calculated;
        delete this.calculated.calculated;

        this.calculated.x = this.calc(this.x, windowWidth);
        this.calculated.y = this.calc(this.y, windowHeight);
        this.calculated.width = this.calc(this.width, windowWidth);
        this.calculated.height = this.calc(this.height, windowHeight);

        // Align the element using style.verticalAlign and style.horizontalAlign
        this.calculated.x -=
            this.calculated.width * ALIGN[this.styles.horizontalAlign];
        this.calculated.y -=
            this.calculated.height * ALIGN[this.styles.verticalAlign];
    }
}
