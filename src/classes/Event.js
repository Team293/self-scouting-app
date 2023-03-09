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

/**
 * Represents a pick up event in FRC Matches.
 * @class PickUpEvent
 * @param {Match} match
 * @param {Robot} robot
 * @param {string} eventType
 * @param {number} location
 */
class PickUpEvent extends Event {
  constructor(match, robot, location, pieceType) {
    super(match, robot, EVENT_TYPES.PICK_UP_PIECE);
    this.location = location;
    this.pieceType = pieceType;
  }
}
