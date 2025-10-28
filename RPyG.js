import * as readlineSync from 'readline-sync';
import { Heroi } from './personagens/heroi.js';


console.log("Bem-vindo ao RPyG!");

const nomeHeroi = readlineSync.question("Escolha o nome do seu herói: ");
const heroi = new Heroi(nomeHeroi);
const pocao = new Item("Poção de Vida", 20);
heroi.inventario.push(pocao);

function batalha() {
    const monstro = new Monstro("Goblin");
    console.log(`Um ${monstro.nome} apareceu!`);
    
    while (heroi.vida > 0 && monstro.vida > 0) {
        console.log("\n1. Atacar\n2. Usar item");
        const escolha = readlineSync.questionInt("O que deseja fazer? ");

        if (escolha === 1) {
            heroi.atacar(monstro);
        } else if (escolha === 2) {
            if (heroi.inventario.length === 0) {
                console.log("Sem itens!");
            } else {
                heroi.usarItem(0, heroi); // só usa o primeiro item
            }
        } else {
            console.log("Opção inválida!");
        }

        if (monstro.vida > 0) monstro.atacar(heroi);
    }

    if (heroi.vida <= 0) console.log("Você foi derrotado!");
    else console.log("Você venceu a batalha!");
}

function menu() {
    let opcao = 0;
    do {
        console.log("\nMenu:\n1. Iniciar batalha\n2. Sair");
        opcao = readlineSync.questionInt("Escolha: ");

        if (opcao === 1) batalha();
        else if (opcao === 2) console.log("Saindo do jogo...");
        else console.log("Opção inválida!");
    } while (opcao !== 2);
}

menu();
