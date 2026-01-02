import * as readline from 'readline';
import { countMultiples } from "./countMultiples";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber(question: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(Number(answer));
        });
    });
}

async function main() {
    const size = await askNumber('Введите размер массива: ');
    const arr: number[] = [];

    for (let i = 0; i < size; i++) {
        const num = await askNumber(`Введите элемент ${i + 1}: `);
        arr.push(num);
    }

    const divisor = await askNumber('Введите число для проверки кратности: ');
    const count = countMultiples(arr, divisor);

    console.log(`Количество элементов, кратных ${divisor}: ${count}`);
    rl.close();
}

main();
