import { divisors } from "./divisors"

type TestCase = {
    input: number
    want: number[] | string
}

const testCases: TestCase[] = [
    {
        input: 16,
        want: [2, 4, 8],
    },
    {
        input: 13,
        want: '13 является простым',
    },
    {
        input: 12,
        want: [2, 3, 4, 6],
    },
    {
        input: 2,
        want: '2 является простым',
    },
]

describe('divisors', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(divisors(input)).toEqual(want)
        })
    })
})