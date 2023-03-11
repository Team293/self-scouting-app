class Button extends DOMElement {
    constructor(parameters) {
        super(parameters);

        // Default attributes
        this.content = "Button";
        this.state = "default";

        this.loadKeys(parameters);
    }

    render(styles) {
        this.updateState();
        if (this.hovered) {
            cursor(HAND);
            if (mouseIsPressed && !this.active) {
                this.onClick();
                this.active = true;
            }

            if (!mouseIsPressed) {
                this.active = false;
            }
        }

        if (this.state === "active") {
            styles.backgroundColor = this.styles.active.backgroundColor;
            styles.textColor = this.styles.active.textColor;
        }

        noStroke();
        setColor(styles.backgroundColor, fill);

        textSize(styles.fontSize);

        const width = this.contentCalc(
            this.calculated.width,
            textWidth(this.content),
            styles.paddingX ?? styles.padding
        );

        const height = this.contentCalc(
            this.calculated.height,
            styles.fontSize,
            styles.paddingY ?? styles.padding
        );

        rect(
            this.calculated.x,
            this.calculated.y,
            width,
            height,
            this.calc(styles.borderRadius)
        );

        textSize(styles.fontSize);
        textAlign(CENTER, CENTER);
        setColor(styles.textColor, fill);
        text(
            this.content,
            this.calculated.x + width / 2,
            this.calculated.y + height / 2
        );
    }

    contentCalc(value, target, padding) {
        if (value === null) {
            return target + padding * 2;
        }

        return value;
    }

    updateState() {
        if (
            mouseX > this.calculated.x &&
            mouseX < this.calculated.x + this.calculated.width &&
            mouseY > this.calculated.y &&
            mouseY < this.calculated.y + this.calculated.height
        ) {
            this.hovered = true;
        } else {
            this.hovered = false;
        }
    }

    onClick() {
        // Override this function
    }

    setContent(content) {
        this.content = content;
    }
}
