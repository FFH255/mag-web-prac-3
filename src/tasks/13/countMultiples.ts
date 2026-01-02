export function countMultiples(arr: number[], divisor: number): number {
    return arr.filter(n => n % divisor === 0).length;
}