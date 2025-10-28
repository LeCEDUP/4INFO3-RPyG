// interface do RPG
// const readline = require('readline-sync');
import * as readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';

console.log('Bem vindo ao RPyG do Caio!!');
console.log('    Classes   | Atributos iniciais \n \n 1- Cavaleiro | Ataque: 10 | Vida: 10 (Itens : Espada(2 bonus de ataque) e Armadura do reino(12 bonus de defesa) ) \n 2- Arqueira  | Ataque: 13 | Vida: 10 (Itens: Arco(4 bonus de ataque) e Manta do arqueiro(5 bonus de defesa))\n 3- Assassino | Ataque: 15 | Vida: 8 (Itens: Faca almaldiçoada(10 bonus de ataque)');

let escolhaDeClasse = readline.questionInt('Faça a escolha da sua classe [1 | 2 | 3]: ');

while (escolhaDeClasse < 1 || escolhaDeClasse > 3) {
    console.log('Numero inválido, escolha apenas um numero entre essses [1 | 2 | 3]')
    escolhaDeClasse = readline.questionInt('Faca a escolha da sua classe [1 | 2 | 3]: ');
}

let nome = readline.question('Insira o nome do seu personagem: ');
let personPrincipal;
let armaInicial;
let armaduraInicial;


if (escolhaDeClasse === 1) {
    personPrincipal = new Heroi(nome, 10, 10, 0);
    armaInicial = new Arma("Espada", "Espada dada para todos os cavaleiros guardiões do rei", 2, "Comum");
    armaduraInicial = new Armadura("Armadura do reino", "Armadura dos cavaleiros guardiões", 12);
} else if (escolhaDeClasse === 2) {
    personPrincipal = new Heroi(nome, 13, 10, 0);
    armaInicial = new Arma("Arco", "Arco dado para a tropa de infantaria do reino", 4, "Comum");
} else if (escolhaDeClasse === 3) {
    personPrincipal = new Heroi(nome, 20, 6, 0);
    armaInicial = new Arma("Faca Almaldiçoada", "Faca dos assassinos da organização secreta do reino", 10, "Comum");
}

personPrincipal.equiparItem(armaduraInicial);
personPrincipal.equiparItem(armaInicial);
console.log(`\nParabéns seu personagem inicial está pronto! \n Nome: ${personPrincipal.nome} \n Ataque: ${personPrincipal.ataque} \n Vida: ${personPrincipal.vida} \n Defesa: ${personPrincipal.defesa}\n`);
// console.log(personPrincipal.inventario)
// iniciando a boosfiht

console.log(`Bem vindo ${personPrincipal.nome}, está preparado para a primeira luta? \nEu não ligo se você não estiver então vamos começar!\n`)

const goblin = new Monstro('Goblin tutorial', 5, 3, 10, "basic");
goblin.exibirInformacoes();

// console.log(v)

// while(personPrincipal.vida > 0 || Monstro.vida > 0) {
//     console.log
// }
