import * as readline from 'readline-sync';

import { Heroi } from './personagens/heroi.js';

console.log("Bem-vindo ao RPyG!");
const nomeHeroi = readline.question("Digite o nome do seu herói: ");

const heroi = new Heroi(nomeHeroi, 100, 20, 10);

console.log(`Herói ${heroi.nome} criado com sucesso! Vida: ${heroi.vida}, Ataque: ${heroi.ataque}, Defesa: ${heroi.defesa}`);





