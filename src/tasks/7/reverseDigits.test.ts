import { reverseDigits } from "./reverseDigits"

type TestCase = {
    input: number
    want: number[]
}

const testCases: TestCase[] = [
    {
        input: 69,
        want: [9, 6],
    },
    {
        input: 12345,
        want: [5, 4, 3, 2, 1],
    },
    {
        input: 0,
        want: [0],
    },
]

describe('reverseDigits', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(reverseDigits(input)).toEqual(want)
        })
    })
})