import * as readline from 'readline';
import { isPangram } from './isPangram';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите фразу: ', (input: string) => {
    console.log(isPangram(input));
    rl.close();
});