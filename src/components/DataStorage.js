
/**
 * Klass som hanterar sparandet och hämtande till och från localStorage.
 *
 * @export
 * @class DataStorage
 * @typedef {DataStorage}
 */
export class DataStorage {
    
    /**
     * Sparar ett resultat (tid) i localStorage.
     *
     * @static
     * @param {number} elapsedTimeInSeconds - Tiden som ska sparas, i sekunder.
     */
    static saveResult(elapsedTimeInSeconds) {
        // Hämta befintliga resultat från localStorage
        const results = this.getResults()

        // Lägg till det nya resultatet med aktuell tidpunkt
        results.push({ date: new Date().toISOString(), time: elapsedTimeInSeconds })

        // Spara tillbaka alla resultat till localStorage
        localStorage.setItem('results', JSON.stringify(results)) 
    }

    
    /**
     * Hämtar alla sparade resultat från localStorage.
     *
     * @static
     * @returns {Array} - En lista med sparade resultat.
     */
    static getResults() {
        // Hämta resultaten som en JSON-sträng och omvandla till objekt
        const results = localStorage.getItem('results')
        return results ? JSON.parse(results) : [] // Om inga resultat finns, returnera en tom lista
    }
}