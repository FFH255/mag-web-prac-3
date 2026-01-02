import { countDivisors } from "./countDivisors"

type TestCase = {
    input: number
    want: number
}

const testCases: TestCase[] = [
    {
        input: 12,
        want: 6, // 1, 2, 3, 4, 6, 12
    },
    {
        input: 1,
        want: 1,
    },
    {
        input: 16,
        want: 5, // 1, 2, 4, 8, 16
    },
    {
        input: 25,
        want: 3, // 1, 5, 25
    },
]

describe('countDivisors', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(countDivisors(input)).toEqual(want)
        })
    })
})