export const divisors = (n: number): number[] | string => {
    const result: number[] = [];

    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) result.push(i);
    }

    return result.length ? result : `${n} является простым`;
};