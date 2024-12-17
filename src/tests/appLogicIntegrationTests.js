import { expect } from "chai";
import { Timer } from "../components/Timer.js";
import { DataStorage } from "../components/DataStorage.js";

describe("Application Integration Tests", () => {
    it("should save and retrieve a timer result", () => {
        const timer = new Timer();
        timer.startTimer();
        const time = timer.stopTimer();
        DataStorage.saveResult(parseFloat(time));

        const results = DataStorage.getResults();
        expect(results).to.have.lengthOf(1);
        expect(results[0]).to.have.property("time", parseFloat(time));
    });
});