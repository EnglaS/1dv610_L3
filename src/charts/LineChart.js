// Linjediagram logik:

// Räkna ut koordinaterna för varje datapunkt.
// Skapa en linje som går genom alla datapunkter


/**
 * Class for creating a line chart from data.
 *
 * @export
 * @class LineChart
 * @typedef {LineChart}
 */
export class LineChart {
    constructor(data) {
        this.data = data
    }
    
    /**
     * Publik metod för att rendera diagrammet.
     *
     * @returns {HTMLElement} - the svg tag.
     */
    render() {
        const svgElement = this.#createSvgElement() // Skapa SVG-elementet
        const points = this.#generatePointsAndElements(svgElement) // Generera punkterna och cirklarna
        this.#drawPolyline(svgElement, points) // Rita linjen baserat på punkterna
        return svgElement.outerHTML
    }
    
    /**
     * Privat metod för att skapa SVG-elementet.
     *
     * @returns {HTMLElement} - the svg tag.
     */
    #createSvgElement() {
        const chartWidth = 800
        const chartHeight = 300
        const labelSpacing = 40
        const padding = 40
        const totalHeight = chartHeight + labelSpacing

        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svgElement.setAttribute('width', chartWidth + padding * 2)
        svgElement.setAttribute('height', totalHeight + padding)
        svgElement.setAttribute('style', 'background: #eee;')

        return svgElement
    }
    
    /**
     * Privat metod för att generera datapunkterna, cirklar och textetiketter.
     *
     * @param {HTMLElement} svgElement - the svg tag.
     * @returns {HTMLElement} - the svg tag.
     */
    #generatePointsAndElements(svgElement) {
        const chartWidth = 800
        const chartHeight = 300
        const maxDataValue = Math.max(...this.data.map(d => d.value))
        const pointSpacing = chartWidth / (this.data.length - 1)
        const padding = 40

        let points = ""

        this.data.forEach((item, index) => {
            const x = index * pointSpacing + padding
            const y = chartHeight - (item.value / maxDataValue) * chartHeight + padding
            points += `${x},${y} `

            this.#createCircle(svgElement, x, y)
            this.#createTextLabel(svgElement, item.label, x, chartHeight + padding + 15)
            this.#createValueLabel(svgElement, item.value, x, y - 20)
        })

        return points.trim()
    }

    // Privat metod för att skapa en cirkel vid varje punkt
    #createCircle(svgElement, x, y) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('cx', x)
        circle.setAttribute('cy', y)
        circle.setAttribute('r', 4)
        circle.setAttribute('fill', 'teal')
        svgElement.appendChild(circle)
    }

    // Privat metod för att skapa en textlabel under punkten
    #createTextLabel(svgElement, label, x, y) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        text.setAttribute('x', x)
        text.setAttribute('y', y)
        text.setAttribute('text-anchor', 'middle')
        text.textContent = label
        svgElement.appendChild(text)
    }

    // Privat metod för att skapa värdetext nära punkten
    #createValueLabel(svgElement, value, x, y) {
        const värdeText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        värdeText.setAttribute('x', x)
        värdeText.setAttribute('y', y)
        värdeText.setAttribute('text-anchor', 'middle')
        värdeText.setAttribute('font-size', '14px')
        värdeText.setAttribute('fill', 'black')
        värdeText.textContent = value
        svgElement.appendChild(värdeText)
    }

    // Privat metod för att rita en polyline baserat på punkterna
    #drawPolyline(svgElement, points) {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
        polyline.setAttribute('points', points)
        polyline.setAttribute('fill', 'none')
        polyline.setAttribute('stroke', 'teal')
        polyline.setAttribute('stroke-width', 2)
        svgElement.appendChild(polyline)
    }
}