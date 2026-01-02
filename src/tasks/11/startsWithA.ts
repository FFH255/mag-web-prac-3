export const startsWithA = (text: string): boolean =>
    text.length > 0 && /^a/i.test(text);