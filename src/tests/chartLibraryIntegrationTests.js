import { expect } from "chai";
import { ChartLibrary } from "../charts/ChartLibrary.js";

describe("ChartLibrary Class Tests", () => {
    let chartLibrary;
    const testData = [
        { label: "January", value: 30 },
        { label: "February", value: 50 }
    ];

    beforeEach(() => {
        chartLibrary = new ChartLibrary();
    });

    it("should create a valid bar chart SVG", () => {
        const svgBarChart = chartLibrary.createBarChart(testData);
        expect(svgBarChart).to.be.a("string");
        expect(svgBarChart).to.include("<svg");
        expect(svgBarChart).to.include("</svg>");
    });

    it("should create a valid line chart SVG", () => {
        const svgLineChart = chartLibrary.createLineChart(testData);
        expect(svgLineChart).to.be.a("string");
        expect(svgLineChart).to.include("<svg");
        expect(svgLineChart).to.include("</svg>");
    });

    it("should handle empty data input gracefully", () => {
        const svgBarChart = chartLibrary.createBarChart([]);
        expect(svgBarChart).to.include("<svg");
    });
});