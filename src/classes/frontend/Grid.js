class Grid {
    constructor(){
        const gridSize = this.gridSize = 100 / 12;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 9; y++) {
                const gridButton = new GridButton({
                    id: x * 9 + (y + 1),
                    x: `${x * gridSize}vh`,
                    y: `${y * gridSize + gridSize}vh`,
                    width: gridSize + "vh",
                    height: gridSize + "vh",
                    styles: {
                        hover: {
                            backgroundColor: "#CCCCCC",
                        },
                        active: {
                            backgroundColor: "#888888",
                        },
                    },
                });
                gridButton.onClick = () => {
                    if (gridButton.content === PIECE.CUBE) {
                        gridButton.content = PIECE.EMPTY;
                    } else {
                        gridButton.content = PIECE.CUBE;
                    }
                };
            }
        }
    }
}