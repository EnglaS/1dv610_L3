import { expect } from "chai";
import { ShuffleSequence } from "../components/ShuffleSequence.js"

describe("ShuffleSequence Class Tests", () => {
    let shuffleSequence;

    beforeEach(() => {
        shuffleSequence = new ShuffleSequence();
    });

    it("should generate a sequence with 25 moves", () => {
        const sequence = shuffleSequence.generateSequence();
        const moves = sequence.split(" ");
        expect(moves).to.have.lengthOf(25);
    });

    it("should generate valid moves in the sequence", () => {
        const validMoves = [
            "F", "B", "L", "R", "U", "D",
            "F2", "B2", "L2", "R2", "U2", "D2",
            "F'", "B'", "L'", "R'", "U'", "D'"
        ];
        const sequence = shuffleSequence.generateSequence();
        const moves = sequence.split(" ");
        moves.forEach(move => {
            expect(validMoves).to.include(move);
        });
    });
});