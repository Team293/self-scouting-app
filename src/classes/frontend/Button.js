class Button extends DOMElement {
    constructor(parameters) {
        super(parameters);

        // Default attributes
        this.content = "Button";
        this.active = false;
        this.disabled = false;
        this.hovered = false;

        this.loadKeys(parameters);
    }

    render(styles) {
        this.isHovered();

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

        this.renderContent(styles, width, height);
    }

    renderContent(styles, width, height) {
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

    updateState(mouseIsPressed = false) {
        this.isHovered();

        if (this.hovered && mouseIsPressed && !this.active && !this.disabled) {
            this.onClick();
            this.active = true;
            return false;
        }

        if (!mouseIsPressed) {
            this.active = false;
        }
        return true;
    }

    isHovered() {
        if (
            mouseX > this.calculated.x &&
            mouseX < this.calculated.x + this.calculated.width &&
            mouseY > this.calculated.y &&
            mouseY < this.calculated.y + this.calculated.height
        ) {
            this.hovered = true;
            if (!this.disabled) {
                cursor(HAND);
            }
        } else {
            this.hovered = false;
        }
    }

    onClick() {
        // Override this function
    }
}
