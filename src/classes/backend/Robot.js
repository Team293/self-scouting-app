class Robot {
    constructor(teamNumber) {
        this.teamNumber = teamNumber;
        this.initialHeldPiece = PIECE.EMPTY;
    }

    setInitialHeldPiece(initialHeldPiece) {
        this.initialHeldPiece = initialHeldPiece;
    }

    equals(otherRobot) {
        return this.teamNumber === otherRobot.teamNumber;
    }

    processEvents(events, initialValue, updateFuncs) {
        let value = initialValue;
        for (let event of events) {
            if (!event.robot.equals(this)) continue;
            let updateFunc = updateFuncs[event.eventType];
            if (updateFunc !== undefined) {
                if (typeof updateFunc === "function")
                    value = updateFunc(value, event.args);
                else value = updateFunc;
            }
        }
        return value;
    }

    getInventoryAfterEvents(events) {
        return this.processEvents(events, this.initialHeldPiece, {
            [EVENT_TYPE.PICK_UP_GAME_PIECE]: (pieceType, args) => {
                if (pieceType !== PIECE.EMPTY)
                    throw new TypeError(
                        "Cannot pick up a piece if one is already held"
                    );
                if (args.pieceType === PIECE.EMPTY)
                    throw new TypeError("Cannot pick up a nonexistant piece");
                return args.pieceType;
            },
            [EVENT_TYPE.DROP_GAME_PIECE]: (pieceType, args) => {
                if (pieceType === PIECE.EMPTY)
                    throw new TypeError("Cannot drop a nonexistant piece");
                return PIECE.EMPTY;
            },
            [EVENT_TYPE.SCORE_GAME_PIECE]: (pieceType, args) => {
                if (pieceType === PIECE.EMPTY)
                    throw new TypeError("Cannot score a nonexistant piece");
                return PIECE.EMPTY;
            },
        });
    }

    isEnabledAfterEvents(events) {
        return this.processEvents(events, true, {
            [EVENT_TYPE.DISABLED]: false,
            [EVENT_TYPE.ENABLED]: true,
        });
    }
}
