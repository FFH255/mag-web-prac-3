export const reverseDigits = (num: number): number[] =>
    String(num).split('').reverse().map(Number);