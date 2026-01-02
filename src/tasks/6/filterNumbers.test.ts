import { filterNumbers } from "./filterNumbers"

type TestCase = {
    input: string
    want: number[]
}

const testCases: TestCase[] = [
    {
        input: '23 ert 1 fg4ew 012 or 2',
        want: [23, 1, 12, 2],
    },
    {
        input: '1 2 aasf 123',
        want: [1, 2, 123],
    },
    {
        input: 'abc 007 x 42',
        want: [7, 42],
    },
]

describe('filterNumbers', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(filterNumbers(input)).toEqual(want)
        })
    })
})