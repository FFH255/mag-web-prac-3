import { gcd } from "./gcd";

type TestCase = {
    input: [number, number]
    want: number
}

const testCases: TestCase[] = [
    { input: [12, 18], want: 6 },
    { input: [101, 103], want: 1 },
    { input: [48, 18], want: 6 },
    { input: [7, 21], want: 7 },
];

describe('gcd', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(gcd(input[0], input[1])).toEqual(want)
        })
    })
})