import { ChartLibrary } from "./charts/ChartLibrary";
import { DataStorage } from "./components/DataStorage";
import { Results } from "./components/Results";
import { ShuffleSequence } from "./components/ShuffleSequence";
import { Timer } from "./components/Timer";

// Skapa timerinstans
const timer = new Timer()
const shuffleSequence = new ShuffleSequence()

// Hämtar referenser till HTML-element
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resultContainer = document.getElementById('resultContainer');
const chartContainer = document.getElementById('chartContainer');
const timerDisplay = document.getElementById('timerDisplay');
const sequenceDisplay = document.getElementById('sequenceDisplay');

let timerInterval = null

// Eventlisteners för knapparna
startButton.addEventListener('click', () => {
    timer.startTimer()
    startButton.disabled = true
    stopButton.disabled = false

    // Starta intervallet för att uppdatera tiden som visas
    timerInterval = setInterval(() => {
        timerDisplay.textContent = `Time: ${(timer.getCurrentTime() / 1000).toFixed(2)} seconds`
    }, 100)
})

stopButton.addEventListener('click', () => {
    const time = timer.stopTimer()
    clearInterval(timerInterval)
    timerDisplay.textContent = `Time: ${time} seconds`
    DataStorage.saveResult(time)
    Results.displayResults(resultContainer)
    updateChart()
    startButton.disabled = false
    stopButton.disabled = true

    // Generera och visa en ny blandningssekvens
    const newSequence = shuffleSequence.generateSequence()
    sequenceDisplay.textContent = `${newSequence}`
})

function updateChart() {
    const data = DataStorage.getResults().map(r => ({ 
        label: new Date(r.date).toLocaleString(), 
        value: r.time 
    }))
    const chartLibrary = new ChartLibrary()
    chartContainer.innerHTML = chartLibrary.createLineChart(data)
}

// Visa tidagare resultat vid sidans start
document.addEventListener('DOMContentLoaded', () => {
    Results.displayResults(resultContainer)
    updateChart()
    const initialSequence = shuffleSequence.generateSequence()
    sequenceDisplay.textContent = `${initialSequence}`
})