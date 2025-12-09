import * as readline from 'readline-sync';

const nomeDoHeroi = readline.question('Insira um nome para o seu herói: ')
console.log(`O nome do seu herói é ${nomeDoHeroi}`)