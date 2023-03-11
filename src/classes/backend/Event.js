class Event {
    constructor(eventType, args) {
        // args is other information about the event (e.g. robot, piece type, score location)
        this.eventType = eventType;
        this.args = args;
    }
}

class PickupEvent extends Event {
    constructor({ time, robot, location, pieceType }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         * location = The PICK_UP_LOCATION
         * pieceType = The PIECE that was picked up
         */
        super(EVENT_TYPE.PICK_UP_GAME_PIECE, {
            time,
            robot,
            location,
            pieceType,
        });
    }
}

class DropEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.DROP_GAME_PIECE, {
            time,
            robot,
        });
    }
}

class ScoreEvent extends Event {
    constructor({ time, robot, positionIndex }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         * positionIndex = The index of the node where the piece was scored
         */
        super(EVENT_TYPE.SCORE_GAME_PIECE, {
            time,
            robot,
            positionIndex,
        });
    }
}

class DislodgeEvent extends Event {
    constructor({ time, robot, positionIndex }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         * positionIndex = The index of the node where the piece was scored
         */
        super(EVENT_TYPE.DISLODGE_GAME_PIECE, {
            time,
            robot,
            positionIndex,
        });
    }
}

class EarnMobilityBonusEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.EARN_MOBILITY_BONUS, {
            time,
            robot,
        });
    }
}

class DisabledEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.DISABLED, {
            time,
            robot,
        });
    }
}

class EnabledEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.ENABLED, {
            time,
            robot,
        });
    }
}

class DockEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.CHARGE_STATION_DOCK, {
            time,
            robot,
        });
    }
}

class EngageEvent extends Event {
    constructor({ time, robot }) {
        /*
         * time = The time (in fractional seconds)
         * robot = The robot that performed this event
         */
        super(EVENT_TYPE.CHARGE_STATION_ENGAGE, {
            time,
            robot,
        });
    }
}
