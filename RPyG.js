// interface do RPG
// const readline = require('readline-sync');
import * as readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';

console.log('Bem vindo ao RPyG do Caio!!');
console.log('    Classes   | Atributos iniciais \n \n 1- Cavaleiro | Ataque: 10 | Vida: 10 | Defesa: 10 \n 2- Arqueira  | Ataque: 13 | Vida: 10  | Defesa: 5 \n 3- Assassino | Ataque: 20 | Vida: 6  | Defesa: 0');

let escolhaDeClasse = readline.questionInt('Faça a escolha da sua classe [1 | 2 | 3]: ');

while (escolhaDeClasse < 1 || escolhaDeClasse > 3) {
    console.log('Numero inválido, escolha apenas um numero entre essses [1 | 2 | 3]')
    escolhaDeClasse = readline.questionInt('Faca a escolha da sua classe [1 | 2 | 3]: ');
}

let nome = readline.question('Insira o nome do seu personagem: ');
let personPrincipal;


if (escolhaDeClasse === 1) {
    personPrincipal = new Heroi(nome, 10, 10, 10);
} else if (escolhaDeClasse === 2) {
    personPrincipal = new Heroi(nome, 13, 10, 5);
} else if (escolhaDeClasse === 3) {
    personPrincipal = new Heroi(nome, 20, 6, 0);
}
console.log(`Parabéns seu personagem inicial está pronto! \n Nome: ${personPrincipal.nome} \n Ataque: ${personPrincipal.ataque} \n Vida: ${personPrincipal.vida} \n Defesa: ${personPrincipal.defesa}`);

// iniciando a boosfiht

console.log(`Bem vindo ${personPrincipal.nome}, está preparado para a primeira luta? eu não ligo se você não estiver então vamos começar!`)

const goblin = new Monstro('Goblin tutorial', 5, 3, 10, "basic");
goblin.exibirInformacoes();


