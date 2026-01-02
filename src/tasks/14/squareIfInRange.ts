export function squareIfInRange(n: number): number | null {
    if (n >= -5 && n <= 5) {
        return n * n;
    }
    return null; // возвращаем null, если число вне диапазона
}
