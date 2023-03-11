class Alliance {
    constructor(robot1, robot2, robot3) {
        this.robots = [robot1, robot2, robot3];
    }

    hasRobot(robot) {
        return this.robots.some((x) => x.equals(robot));
    }
}
