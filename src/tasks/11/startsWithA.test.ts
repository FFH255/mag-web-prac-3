import { startsWithA } from "./startsWithA";

type TestCase = {
    input: string
    want: boolean
}

const testCases: TestCase[] = [
    { input: 'apple', want: true },
    { input: 'Apple', want: true },
    { input: 'banana', want: false },
    { input: 'Apricot', want: true },
    { input: '', want: false },
];

describe('startsWithA', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(startsWithA(input)).toEqual(want)
        })
    })
})