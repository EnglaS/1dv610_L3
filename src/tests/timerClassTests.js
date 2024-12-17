import { expect } from "chai";
import { Timer } from "../components/Timer.js"

describe("Timer Class Tests", () => {
    let timer;

    beforeEach(() => {
        timer = new Timer();
    });

    it("should start the timer", () => {
        timer.startTimer();
        expect(timer.startTime).to.be.a("number");
    });

    it("should stop the timer and return elapsed time", () => {
        timer.startTimer();
        const elapsedTime = timer.stopTimer();
        expect(parseFloat(elapsedTime)).to.be.a("number");
        expect(elapsedTime).to.match(/^\d+\.\d{2}$/);
    });

    it("should get current time after starting", (done) => {
        timer.startTimer();
        setTimeout(() => {
            const currentTime = timer.getCurrentTime();
            expect(currentTime).to.be.above(0);
            done();
        }, 100);
    });

    it("should handle stopTimer before startTimer gracefully", () => {
        const result = timer.stopTimer();
        expect(result).to.be.undefined;
    });
});