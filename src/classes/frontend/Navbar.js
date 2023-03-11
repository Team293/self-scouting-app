class Navbar {
    constructor(){
        const numItems = 3;
        const vw = 100 / numItems;
        for (let x = 0; x < numItems; x++) {
            const btn = new GridButton({
                id: x + 27,
                x: `${x * vw}vw`,
                y: "0",
                width: `${vw}vw`,
                height: `${Grid.gridSize}vh`,
                styles: {
                    hover: {
                        backgroundColor: "#CCCCCC",
                    },
                    active: {
                        backgroundColor: "#888888",
                    },
                },
            });
            // gridButton.onClick = () => {
            //     if (gridButton.content === PIECE.CUBE) {
            //         gridButton.content = PIECE.EMPTY;
            //     } else {
            //         gridButton.content = PIECE.CUBE;
            //     }
            // };
        }
    }
}