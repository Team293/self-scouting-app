const ALIGN = {
    TOP: 0,
    LEFT: 0,
    CENTER: 0.5,
    BOTTOM: 1,
    RIGHT: 1,
};

const PIECE = {
    EMPTY: 0,
    CUBE: 1,
    CONE: 2,
};

const EVENT_TYPE = {
    PICK_UP_GAME_PIECE: "pick up piece",
    DROP_GAME_PIECE: "drop piece",
    SCORE_GAME_PIECE: "score piece",
    DISLODGE_GAME_PIECE: "dislodge piece",
    EARN_MOBILITY_BONUS: "earn mobility bonus",
    DISABLED: "disabled",
    ENABLED: "enabled",
    CHARGE_STATION_DOCK: "charge station dock",
    CHARGE_STATION_ENGAGE: "charge station engage",
};

const PICK_UP_LOCATION = {
    SINGLE_SUBSTATION: 0,
    DOUBLE_SUBSTATION: 1,
};

const ALLIANCE_COLOR = {
    RED: 0,
    BLUE: 1,
};
