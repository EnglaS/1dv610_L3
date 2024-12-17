// Bar Chart = stapeldiagram

// createBarChart(data): Skapar ett stapeldiagram från datan.

// Stapeldiagram logik:

// Bestäm maxvärdet i datan för att skala diagrammet korrekt.
// Skapa rektanglar (bars) för varje datapunkt.
// Beräkna x- och y-koordinaterna för varje rektangel

export class BarChart {
    constructor(data) {
        this.data = data
    }

    /**
     * Metod för att rendera diagrammet.
     *
     * @returns {HTMLOrSVGElement} - the bar chart.
     */
    render() {
        const svgElement = this.#createSvgElement()
        this.#createBarsAndLabels(svgElement)
        return svgElement.outerHTML
    }

    // Privat metod för att skapa SVG-elementet
    #createSvgElement() {
        const chartWidth = 900
        const chartHeight = 300
        const labelSpacing = 40
        const totalHeight = chartHeight + labelSpacing

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttribute('width', chartWidth)
        svg.setAttribute('height', totalHeight)
        svg.setAttribute('style', 'background: #eee;')

        return svg
    }

    // Privat metod för att skapa staplar och etiketter
    #createBarsAndLabels(svgElement) {
        const chartWidth = 900
        const chartHeight = 300
        const barWidth = 50
        const barSpacing = 20
        const maxDataValue = Math.max(...this.data.map(d => d.value))

        this.data.forEach((item, index) => {
            const barHeight = (item.value / maxDataValue) * chartHeight
            const x = index * (barWidth + barSpacing)

            this.#createBar(svgElement, x, barHeight, barWidth, chartHeight)
            this.#createTextLabel(svgElement, item.label, x + barWidth / 2, chartHeight + 25)
            this.#createValueLabel(svgElement, item.value, x + barWidth / 2, chartHeight - barHeight + 20)
        })
    }

    // Privat metod för att skapa en stapel
    #createBar(svgElement, x, barHeight, barWidth, chartHeight) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        rect.setAttribute('x', x)
        rect.setAttribute('y', chartHeight - barHeight) // Placera från botten
        rect.setAttribute('width', barWidth)
        rect.setAttribute('height', barHeight)
        rect.setAttribute('fill', 'purple')
        svgElement.appendChild(rect)
    }

    // Privat metod för att skapa en textlabel under stapeln
    #createTextLabel(svgElement, label, x, y) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        text.setAttribute('x', x)
        text.setAttribute('y', y)
        text.setAttribute('text-anchor', 'middle')
        text.setAttribute('font-size', '14px')
        text.setAttribute('fill', 'black')
        text.textContent = label
        svgElement.appendChild(text)
    }

    // Privat metod för att skapa värdetext nära toppen av stapeln
    #createValueLabel(svgElement, value, x, y) {
        const värdeText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        värdeText.setAttribute('x', x)
        värdeText.setAttribute('y', y)
        värdeText.setAttribute('text-anchor', 'middle')
        värdeText.setAttribute('font-size', '14px')
        värdeText.setAttribute('fill', 'white')
        värdeText.textContent = value
        svgElement.appendChild(värdeText)
    }
}