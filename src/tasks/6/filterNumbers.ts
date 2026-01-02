export function filterNumbers(text: string): number[] {
    return [...new Set(text
        .split(' ')
        .filter(item => /^\d+$/.test(item))
        .map(Number))];
}