import { isEven } from "./isEven"

type TestCase = {
    input: number
    want: string
}

const testCases: TestCase[] = [
    {
        input: 7,
        want: 'Odd',
    },
    {
        input: 10,
        want: 'Even',
    },
    {
        input: 0,
        want: 'Even',
    },
]

describe('isEven', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(isEven(input)).toBe(want)
        })
    })
})