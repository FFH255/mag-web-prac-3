import { getCentury } from "./getCentury"

type TestCase = {
    input: number
    want: number
}

const testCases: TestCase[] = [
    {
        input: 1706,
        want: 18,
    },
    {
        input: 1705,
        want: 18,
    },
    {
        input: 1900,
        want: 19,
    },
    {
        input: 2000,
        want: 20,
    },
    {
        input: 2001,
        want: 21,
    },
]

describe('getCentiry', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(getCentury(input)).toBe(want)
        })
    })
})