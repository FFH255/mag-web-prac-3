type IsPangram = 'true' | 'false';

export function isPangram(input: string) : IsPangram {
    input = input.toLowerCase();

    const letters = new Set<string>();

    for (const char of input) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    } 

    return letters.size === 26 ? 'true' : 'false';
}