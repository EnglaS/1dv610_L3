export class ShuffleSequence {
    #options

    constructor() {
        this.options = [
            'F', 'B', 'L', 'R', 'U', 'D',
            'F2', 'B2', 'L2', 'R2', 'U2', 'D2',
            "F'", "B'", "L'", "R'", "U'", "D'"
        ]
    }

    generateSequence() {
        const sequence = [];
        for (let i = 0; i < 25; i++) {
            const randomIndex = Math.floor(Math.random() * this.options.length)
            sequence.push(this.options[randomIndex])
        }
        return sequence.join(' ')
    }
}