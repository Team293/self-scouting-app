class Button {
    loadKeys(parameters, object = this) {
        // Load parameters from constructor
        for (const key in parameters) {
            this.loadKey(object, key, parameters[key]);
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

    constructor(parameters) {
        // Default styles
        this.width = textWidth(this.text) + this.padding * 2;
        this.borderRadius = 0;
        this.content = "Button";
        this.width = null;
        this.height = null;
        this.x = 0;
        this.y = 0;

        this.currentWidth = null;
        this.currentHeight = null;

        this.styles = {
            padding: 2,
            paddingX: null,
            paddingY: null,
            fontSize: 12,
            borderRadius: 0,
            backgroundColor: "#ffffff",
            textColor: "#000000",
            hover: {
                backgroundColor: "#ffffff",
                textColor: "#000000",
            },
            active: {
                backgroundColor: "#ffffff",
                textColor: "#000000",
            },
        };

        this.active = false;

        this.loadKeys(parameters);

        this.updateSize();

        // Add this button to the render array
        render.push(this);
        console.log(this);
    }

    updateSize() {
        let width = this.width;
        let height = this.height;
        // If width or height is null, calculate it using the text provided
        if (width === null) {
            const padding = this.styles.paddingX ?? this.styles.padding;
            console.log(padding);
            textSize(this.styles.fontSize);
            width = textWidth(this.content) + padding * 2;
        }

        if (height === null) {
            const padding = this.styles.paddingY ?? this.styles.padding;
            height = this.styles.fontSize + padding * 2;
        }

        if (typeof width === "string" && width.endsWith("%")) {
            width = width.slice(0, -1);
            width = (windowWidth * parseInt(width)) / 100;
        }

        if (typeof height === "string" && height.endsWith("%")) {
            height = height.slice(0, -1);
            height = (windowHeight * parseInt(height)) / 100;
        }

        this.currentWidth = width;
        this.currentHeight = height;
    }

    draw() {
        const screenStyle = copy(this.styles);

        if (this.active) {
            screenStyle.backgroundColor = this.styles.active.backgroundColor;
            screenStyle.textColor = this.styles.active.textColor;
        }

        noStroke();
        setColor(screenStyle.backgroundColor, fill);
        rect(
            this.x,
            this.y,
            this.currentWidth,
            this.currentHeight,
            screenStyle.borderRadius
        );

        textSize(screenStyle.fontSize);

        textAlign(CENTER, CENTER);
        setColor(screenStyle.textColor, fill);
        text(
            this.content,
            this.x + this.currentWidth / 2,
            this.y + this.currentHeight / 2
        );

        if (this.isHovered()) {
            if (mouseIsPressed && !this.active) {
                this.onClick();
                this.active = true;
            }

            if (!mouseIsPressed) {
                this.active = false;
            }
        }
    }

    isHovered() {
        return (
            mouseX > this.x &&
            mouseX < this.x + this.currentWidth &&
            mouseY > this.y &&
            mouseY < this.y + this.currentHeight
        );
    }

    onClick() {
        // Override this function
    }

    setContent(content) {
        this.content = content;
        this.updateSize();
    }

    resize() {
        this.updateSize();
    }
}
