import { DataStorage } from "./DataStorage";

export class Results {
    /**
     * Visar alla sparade resultat i ett angivet HTML-element.
     * @param {HTMLElement} container - HTML-elementet där resultaten ska visas.
     */
    static displayResults(container) {
        // Hämta alla resultat
        const results = DataStorage.getResults()

        // Rensa tidigare innehåll
        Results.clearResults(container)

        // Lägg till resultat till containern
        Results.addResultsToContainer(results, container)
    }

    /**
   * Rensar tidigare resultat från containern.
   * @param {HTMLElement} container - HTML-elementet som ska rensas.
   */
    static clearResults(container) {
        container.innerHTML = ''
    }

    /**
   * Lägger till resultat till containern.
   * @param {Array} results - En lista med resultat.
   * @param {HTMLElement} container - HTML-elementet där resultaten ska visas.
   */
    static addResultsToContainer(results, container) {
        results.forEach(result => {
            const resultElement = Results.createResultElement(result)
            container.appendChild(resultElement)
        })
    }

    /**
   * Skapar ett HTML-element för ett resultat.
   * @param {Object} result - Ett resultatobjekt som innehåller datum och tid.
   * @returns {HTMLElement} - Ett HTML-element som representerar resultatet.
   */
    static createResultElement(result) {
        const resultElement = document.createElement('p')
        resultElement.textContent = `Date: ${new Date(result.date).toLocaleString()}, Time: ${result.time} seconds`
        return resultElement
    }
}