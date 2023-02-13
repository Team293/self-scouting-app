/**
 * Represents events in FRC Matches.
 * @class Event
 * @param {Match} match
 * @param {Robot} robot
 * @param {string} eventType
 */
 class Event {
    /**
     * @constructor
     * @param {Match} match
     * @param {Robot} robot
     * @param {string} eventType
     */
    constructor(match, robot, eventType) {
        this.match = match;
        this.robot = robot;
        this.eventType = eventType;
    }
}
