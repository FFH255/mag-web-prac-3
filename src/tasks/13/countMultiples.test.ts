import { countMultiples } from "./countMultiples";

type TestCase = {
    input: [number[], number]; // [массив, делитель]
    want: number;
}

const testCases: TestCase[] = [
    { input: [[2, 5, 10, 7, 15], 5], want: 3 },
    { input: [[1, 2, 3, 4], 5], want: 0 },
    { input: [[], 3], want: 0 },
    { input: [[-6, -3, 0, 3, 6], 3], want: 5 },
    { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2], want: 5 },
];

describe('countMultiples', () => {
    testCases.forEach(({ input, want }) => {
        it(`countMultiples(${JSON.stringify(input[0])}, ${input[1]}) -> ${want}`, () => {
            expect(countMultiples(input[0], input[1])).toEqual(want);
        });
    });
});
