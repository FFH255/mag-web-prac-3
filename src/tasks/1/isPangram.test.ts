import { isPangram } from './isPangram';

type TestCase = {
    input: string;
    want: string;
};

const testCases: TestCase[] = [
    { input: 'The quick brown fox jumps over the lazy dog', want: 'true' },
    { input: 'Sphinx of black quartz, judge my vow.', want: 'true' },
    { input: 'Pack my box with five dozen liquor jugs', want: 'true' },
    { input: 'Hello, World!', want: 'false' },
    { input: '', want: 'false' },
];

describe('isPangram', () => {
    testCases.forEach(({ input, want }) => {
        it(`"${input}" -> "${want}"`, () => {
            expect(isPangram(input)).toBe(want);
        });
    });
});