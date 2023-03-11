class Text extends DOMElement {
    constructor(params) {
        
    }

    render() {
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
}