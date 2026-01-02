import * as readline from 'readline';
import { checkMountain } from './checkMountain';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите массив: ', (input: string) => {
    console.log(checkMountain(input.split(' ').map(Number)));
    rl.close();
});