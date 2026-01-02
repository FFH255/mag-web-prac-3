import { getMiddleCharacter } from './getMiddleCharacter'

type TestCase = {
    input: string
    want: string
}

const testCases: TestCase[] = [
    { input: 'bebra', want: 'b' },
    { input: 'abcd', want: 'bc' },
]

describe('getMiddleCharacter', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(getMiddleCharacter(input)).toBe(want)
        })
    })
})