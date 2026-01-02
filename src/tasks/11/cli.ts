import * as readline from 'readline';
import { startsWithA } from './startsWithA';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите строку: ', (input: string) => {
    console.log(startsWithA(input));
    rl.close();
});