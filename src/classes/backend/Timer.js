class Timer {
    time = 0;
    running = false;
    autoLength = 15;
    matchLength = 135;
    lastUpdate = Date.now();
    deltaTime = 0;
    isAuto = true;

    constructor(match) {
        this.match = match;
        setInterval(() => {
            this.update();
        }, 1000 / 60);
    }

    /**
     * @method reset
     * @description Reset the timer to 0
     * @memberof Timer
     */
    reset() {
        this.time = 0;
        this.running = false;
    }

    /**
     * @method play
     * @description Start the timer
     * @memberof Timer
     */
    play() {
        if (this.time < this.matchLength) this.running = true;
    }

    /**
     * @method pause
     * @description Pause the timer
     * @memberof Timer
     */
    pause() {
        this.running = false;
    }

    /**
     * @method toggle
     * @description Toggle the timer
     * @memberof Timer
     */
    toggle() {
        if (this.time < this.matchLength) this.running = !this.running;
    }

    /**
     * @method setTime
     * @description Set the time of the timer
     * @param {number} time The time to set the timer to
     * @memberof Timer
     */
    setTime(time) {
        this.time = time;
    }

    /**
     * @method delta
     * @description Calculate the delta time
     * @memberof Timer
     * @returns {number} The delta time
     */
    delta() {
        const now = Date.now();
        this.deltaTime = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        return this.deltaTime;
    }

    /**
     * @method update
     * @description Update the timer
     * @memberof Timer
     */
    update() {
        // update the timer
        this.delta(); // calculate the delta time

        if (this.running) {
            // increment the timer
            this.time += this.deltaTime;
        }
        if (this.time > this.matchLength) {
            // set the timer to the max time
            this.time = this.matchLength;
            this.running = false;
        }

        // update the game state
        if (this.time > this.autoLength) {
            // change the game state to teleop
            this.match.isAuto = false;
        } else {
            // change the game state to auto
            this.match.isAuto = true;
        }

        // TODO: UPDATE FRONT END
    }

    /**
     * @method toString
     * @description Convert the timer to a string
     * @memberof Timer
     * @returns {string} The timer as a string
     */
    toString() {
        // Calculate minutes from time
        const minutes = Math.floor(this.time / 60);
        // Calculate seconds from time
        const seconds = Math.floor(this.time % 60);
        // Calculate milliseconds from time
        const milliseconds = Math.floor((this.time % 1) * 100);
        // Return a formatted string
        return `${minutes.toString()}:${seconds
            .toString()
            .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
    }
}
