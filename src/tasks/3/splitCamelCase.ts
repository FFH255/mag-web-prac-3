export function splitCamelCase(text: string): string {
    return text
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])(?=[A-Z])/g, '$1 ');
}

type TestCase = {
    input: string
    want: string
}

function runTests(testCases: TestCase[]) {
    testCases.forEach((testCase, i) => {
        const got = splitCamelCase(testCase.input)
        console.log(
            `TEST CASE: ${i + 1}\n` +
            `input: ${testCase.input}\n` +
            `want: ${testCase.want}\n` +
            `got: ${got}\n` +
            `OK: ${got === testCase.want}\n`
        )
    })
}