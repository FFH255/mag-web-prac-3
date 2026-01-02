import { checkMountain } from "./checkMountain";

type TestCase = {
    input: number[]
    want: string
}

const testCases: TestCase[] = [
    { input: [1, 5, 4], want: 'yes 1' },
    { input: [1, 3, 2, 1], want: 'yes 1' },
    { input: [2, 1], want: 'no' },
    { input: [1, 2, 3], want: 'no' },
    { input: [3, 5, 5, 2], want: 'no' },
    { input: [0, 3, 2, 1], want: 'yes 1' },
];

describe('checkMountain', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(checkMountain(input)).toEqual(want)
        })
    })
})