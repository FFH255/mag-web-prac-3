import { splitCamelCase } from './splitCamelCase'

type TestCase = {
    input: string
    want: string
}

const testCases: TestCase[] = [
    {
        input: 'camelCasing',
        want: 'camel Casing',
    },
    {
        input: 'SWAT',
        want: 'S W A T',
    },
    {
        input: 'simpleTestCase',
        want: 'simple Test Case',
    },
]

describe('splitCamelCase', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(splitCamelCase(input)).toBe(want)
        })
    })
})