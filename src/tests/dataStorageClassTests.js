import { expect } from "chai";
import { DataStorage } from "../components/DataStorage.js"

describe("DataStorage Class Tests", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("should save a result to localStorage", () => {
        DataStorage.saveResult(25.45);
        const results = DataStorage.getResults();
        expect(results).to.have.lengthOf(1);
        expect(results[0]).to.have.property("time", 25.45);
    });

    it("should retrieve all results from localStorage", () => {
        DataStorage.saveResult(10.23);
        DataStorage.saveResult(15.67);
        const results = DataStorage.getResults();
        expect(results).to.have.lengthOf(2);
        expect(results[1]).to.have.property("time", 15.67);
    });

    it("should handle empty localStorage gracefully", () => {
        const results = DataStorage.getResults();
        expect(results).to.be.an("array").that.is.empty;
    });
});