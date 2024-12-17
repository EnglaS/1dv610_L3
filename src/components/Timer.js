// Logik för att starta och stoppa timern


/**
 * Logik för kubtimern.
 *
 * @export
 * @class Timer
 * @typedef {Timer}
 */
export class Timer {   
    /**
     * Creates an instance of Timer.
     *
     * @constructor
     */
    constructor() {
        this.startTime = null
        this.endTime = null
    }

    /**
     * Saves the time the timer is started.
     */
    startTimer() {
        this.startTime = Date.now()
    }

    
    /**
     * Saves the time the timer is stopped.
     *
     * @returns {String} - the total time with two decimals.
     */
    stopTimer() {
        if (!this.startTime) return undefined;
        this.endTime = Date.now();
        return ((this.endTime - this.startTime) / 1000).toFixed(2); // Tid i sekunder med två decimaler
    }

    
    /**
     * Checks how much time has passed since the timer was started.
     *
     * @returns {number} - time that has passed.
     */
    getCurrentTime() {
        if (this.startTime) {
            return Date.now() - this.startTime
        }
    }
}