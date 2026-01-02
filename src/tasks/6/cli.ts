import * as readline from 'readline';
import { filterNumbers } from './filterNumbers';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите массив, содержащий целые числа и строки, через пробел: ', (input: string) => {
    console.log(filterNumbers(input).join(' '));
    rl.close();
});