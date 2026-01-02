import { squareIfInRange } from "./squareIfInRange";

type TestCase = {
    input: number;
    want: number | null;
}

const testCases: TestCase[] = [
    { input: 3, want: 9 },
    { input: -4, want: 16 },
    { input: 5, want: 25 },
    { input: -5, want: 25 },
    { input: 6, want: null },
    { input: -10, want: null },
    { input: 0, want: 0 },
];

describe('squareIfInRange', () => {
    testCases.forEach(({ input, want }) => {
        it(`squareIfInRange(${input}) -> ${want}`, () => {
            expect(squareIfInRange(input)).toEqual(want);
        });
    });
});
