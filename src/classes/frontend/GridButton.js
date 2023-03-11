class GridButton extends Button {
    constructor(parameters) {
        super(parameters);

        this.id = null;

        this.loadKeys(parameters);
    }

    renderContent(styles, width, height) {
        if (this.content === PIECE.CUBE) {
            setColor("#0044FF", fill);
            rect(
                this.calculated.x + width / 4,
                this.calculated.y + height / 4,
                width / 2,
                height / 2
            );
        }
    }
}
