// interface do RPG
// const readline = require('readline-sync');
import * as readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';

function perguntar(msg) {
    let resposta = readline.question(msg);
    if (resposta === "sair") {
        console.log("\nJogo encerrado. Até a próxima!");
        process.exit();
    }
    return resposta;
}

console.log('Bem vindo ao RPyG do Caio!!');
console.log("\nPara sair digite sair a qualquer momento!\n")
console.log('    Classes   | Atributos iniciais \n \n 1- Cavaleiro | Ataque: 10 | Vida: 10 (Itens : Espada(5 bonus de ataque) e Armadura do reino(9 bonus de defesa) ) \n 2- Arqueira  | Ataque: 13 | Vida: 10 (Itens: Arco(4 bonus de ataque) e Manta do arqueiro(5 bonus de defesa))\n 3- Assassino | Ataque: 15 | Vida: 10 (Itens: Faca almaldiçoada(10 bonus de ataque)');

let escolhaDeClasse = parseInt(perguntar('Faça a escolha da sua classe [1 | 2 | 3]: '));
while (escolhaDeClasse < 1 || escolhaDeClasse > 3) {
    console.log('Numero inválido, escolha apenas um numero entre essses [1 | 2 | 3]')
    escolhaDeClasse = parseInt(perguntar('Faca a escolha da sua classe [1 | 2 | 3]: '));
}

let nome = perguntar('Insira o nome do seu personagem: ');
let personPrincipal;
let armaInicial;
let armaduraInicial;


if (escolhaDeClasse === 1) {
    personPrincipal = new Heroi(nome, 10, 10, 0);
    armaInicial = new Arma("Espada", "Espada dada para todos os cavaleiros guardiões do rei", 5, "Comum");
    armaduraInicial = new Armadura("Armadura do reino", "Armadura dos cavaleiros guardiões", 8);
} else if (escolhaDeClasse === 2) {
    personPrincipal = new Heroi(nome, 13, 10, 0);
    armaInicial = new Arma("Arco", "Arco dado para a tropa de infantaria do reino", 4, "Comum");
    armaduraInicial = new Armadura("Manta do arqueiro", "Manta para diferenciar a tropa de infantaria da tropa de combate" ,5)
} else if (escolhaDeClasse === 3) {
    personPrincipal = new Heroi(nome, 10, 15, 0);
    armaInicial = new Arma("Faca Almaldiçoada", "Faca dos assassinos da organização secreta do reino", 10, "Comum");
}
personPrincipal.inventario.push(armaInicial);
personPrincipal.inventario.push(armaduraInicial);

personPrincipal.equiparItem(armaInicial);
personPrincipal.equiparItem(armaduraInicial);

// console.log(personPrincipal.inventario)
console.log(`\nParabéns seu personagem inicial está pronto! \n Nome: ${personPrincipal.nome} \n Ataque: ${personPrincipal.ataque} \n Vida: ${personPrincipal.vida} \n Defesa: ${personPrincipal.defesa}\n`);

// iniciando a boosfiht
console.log(`Bem vindo ${personPrincipal.nome}, está preparado para a primeira luta? \nEu não ligo se você não estiver então vamos começar!\n`)

const goblin = new Monstro('Goblin fraquin', 12, 8, 10, "basic");
goblin.exibirInformacoes();
perguntar('Aperte enter para iniciar: ');

console.log(`\nPrimeira Batalha! ${personPrincipal.nome} X ${goblin.nome}`);
console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]\n ");
perguntar("Aperte enter para girar: ");

let aleatorio = Math.round(Math.random() * 100);
if (aleatorio < 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
    perguntar("Aperte enter para atacar: \n")
    personPrincipal.atacar(goblin);
} else if (aleatorio >= 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${goblin.nome}!`);
    perguntar("Aperte enter para receber ataque: \n")
    goblin.atacar(personPrincipal);
}

while (personPrincipal.estaVivo() === true && goblin.estaVivo() === true) {
    perguntar("\nAperte enter para jogar mais uma rodada: ")
    if (aleatorio >= 50 && personPrincipal.estaVivo() === true && goblin.estaVivo() === true) {
        console.log(`\nVez do herói ${personPrincipal.nome}!`);
        perguntar("Aperte enter para atacar: ")
        personPrincipal.atacar(goblin);
        aleatorio = 1;

    } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && goblin.estaVivo() === true) {
        console.log(`\nVez do monstro ${goblin.nome}`);
        perguntar("Aperte enter para receber ataque: ")
        goblin.atacar(personPrincipal);
        aleatorio = 50;
    }
}

perguntar("\nAperte enter para receber niveis: \n")

if (!goblin.estaVivo()) {
    personPrincipal.ganharExperiencia(300);
    personPrincipal.exibirInformacoes();
}

perguntar("\nAperte enter para iniciar nova batalha: \n")

const dragao = new Monstro("Dragão rei", 30, 30, 15)

//batalha final!
console.log(`\Batalha Final! ${personPrincipal.nome} X ${dragao.nome}`);
console.log(dragao.exibirInformacoes());
console.log("Quem atacará primeiro? [0-49 Herói | 50-100 Monstro]\n ");
perguntar("Aperte enter para girar: ");

aleatorio = Math.round(Math.random() * 100);
if (aleatorio < 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o herói: ${personPrincipal.nome}!`);
    perguntar("Aperte enter para atacar: \n");
    personPrincipal.atacar(dragao);
} else if (aleatorio >= 50) {
    console.log(`O numero escolhido foi ${aleatorio}, quem começa atacando é o Montro: ${dragao.nome}!`);
    perguntar("Aperte enter para receber ataque: \n");
    dragao.atacar(personPrincipal);
}

while (personPrincipal.estaVivo() === true && dragao.estaVivo() === true) {
    perguntar("\nAperte enter para jogar mais uma rodada: ");
    if (aleatorio >= 50 && personPrincipal.estaVivo() === true && dragao.estaVivo() === true) {
        console.log(`\nVez do herói ${personPrincipal.nome}!`);
        perguntar("Aperte enter para atacar: ")
        personPrincipal.atacar(dragao);
        aleatorio = 1;

    } else if (aleatorio < 50 && personPrincipal.estaVivo() === true && dragao.estaVivo() === true) {
        console.log(`\nVez do monstro ${dragao.nome}`);
        perguntar("Aperte enter para receber ataque: ");
        dragao.atacar(personPrincipal);
        aleatorio = 50;
    }
}
if (!dragao.estaVivo()) {
    console.log("Parabens você zerou o game")
    perguntar("\nAperte enter para receber niveis: \n")
    personPrincipal.ganharExperiencia(2000);
    personPrincipal.exibirInformacoes();
} else {
    console.log("You loose, Wasted!\nJogue novamente para vencer!")
}

console.log("\nFim de game!\nObrigado por Jogar!");







// const testeObj = {'melhor aluno': 'Caio', 'melhor prof': 'Le'}
// console.log(Object.keys(testeObj).includes('melhor aluno'))
// console.log(Object.values(testeObj).includes('Caio'))