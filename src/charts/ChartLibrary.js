// Detta är huvudklassen som hanterar genereringen av de olika diagramtyperna

import { BarChart } from "./BarChart.js"
import { LineChart } from "./LineChart.js"

export class ChartLibrary {
    
    /**
     * Creates a bar chart based on sent in data.
     *
     * @param {JSON} data - data to be used in bar chart.
     */
    createBarChart(data) {
        const chart = new BarChart(data)
        const svgBarChart = chart.render()
        return svgBarChart
    }

    createLineChart(data) {
        const chart = new LineChart(data)
        const svgLineChart = chart.render()
        return svgLineChart
    }

    createPieChart(data) {
        // TODO: Implementera denna!!
    }
}