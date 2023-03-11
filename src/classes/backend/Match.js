class Match {
    isAuto = true;
    constructor(redAlliance, blueAlliance) {
        this.redAlliance = redAlliance;
        this.blueAlliance = blueAlliance;
        this.events = [];
    }

    static fromTeamNumbers(red1, red2, red3, blue1, blue2, blue3) {
        return new Match(
            new Alliance(new Robot(red1), new Robot(red2), new Robot(red3)),
            new Alliance(new Robot(blue1), new Robot(blue2), new Robot(blue3))
        );
    }

    getColorOfRobot(robot) {
        if (this.redAlliance.hasRobot(robot)) return ALLIANCE_COLOR.RED;
        if (this.blueAlliance.hasRobot(robot)) return ALLIANCE_COLOR.BLUE;
        return null;
    }

    addEvent(event) {
        this.events.push(event);
    }
}
