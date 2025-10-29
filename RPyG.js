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
    personPrincipal = new Heroi(nome, 8, 20, 0);
    armaInicial = new Arma("Faca Almaldiçoada", "Faca dos assassinos da organização secreta do reino", 10, "Comum");
}

// personPrincipal.equiparItem(armaduraInicial);
personPrincipal.equiparItem(armaInicial);
console.log(`\nParabéns seu personagem inicial está pronto! \n Nome: ${personPrincipal.nome} \n Ataque: ${personPrincipal.ataque} \n Vida: ${personPrincipal.vida} \n Defesa: ${personPrincipal.defesa}\n`);
// personPrincipal.exibirInformacoes();
// console.log(personPrincipal.inventario)
// iniciando a boosfiht


console.log(`Bem vindo ${personPrincipal.nome}, está preparado para a primeira luta? \nEu não ligo se você não estiver então vamos começar!\n`)

const goblin = new Monstro('Goblin fraquin', 10, 3, 5, "basic");
goblin.exibirInformacoes();
readline.question('Aperte enter para iniciar: ')

console.log(`\nPrimeira Batalha! ${personPrincipal.nome} X ${goblin.nome}`);
console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]\n ");
readline.question("Aperte enter para girar: ")

let aleatorio = Math.round(Math.random() * 100);
if (aleatorio < 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
    readline.question("Aperte enter para atacar: \n")
    personPrincipal.atacar(goblin);
} else if (aleatorio >= 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${goblin.nome}!`);
    readline.question("Aperte enter para receber ataque: \n")
    goblin.atacar(personPrincipal);
}

while(personPrincipal.vida > 0 && goblin.vida > 0) {
    readline.question("\nAperte enter para jogar mais uma rodada: ")
    if(aleatorio >= 50 && personPrincipal.vida > 0 && goblin.vida > 0) {
        console.log(`\nVez do herói ${personPrincipal.nome}!`);
        readline.question("Aperte enter para atacar: ")
        personPrincipal.atacar(goblin);

    } else if (aleatorio < 50 && personPrincipal.vida > 0 && goblin.vida > 0) {
        console.log(`\nVez do monstro ${goblin.nome}`);
        readline.question("Aperte enter para receber ataque: ")
        goblin.atacar(personPrincipal);
    }
}