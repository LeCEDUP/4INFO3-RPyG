import {Item} from './itens/item.js';
import {Arma} from './itens/arma.js';
import {Armadura} from './itens/armadura.js';
import {heroi} from './personagens/heroi.js';
import {monstro} from './personagens/monstro.js';

const heroi = new Heroi ("Arthur", 100, 15, 5);

const goblin = new Monstro ("Goblin", 30, 8, 2,"pequeno");

const dragao = new Monstro ("Dragão", 200, 30, 10, "grande");

const espada = new Arma ("Espada Longa", "Uma espada afiada.", 10);

const escudo = new Armadura ("Escudo de ferro", "Um escudo resistente", 5);

let pocaoVida = new item ("Poção de vida", "Restaura 30 de vida");

console.log("\n--Inicio da Aventura--\n");

heroi.inventario.push(espada);
heroi.inventario.push(escudo);
heroi.inventario.push(pocaoVida);

console.log(`${heroi.nome} encontrou uma ${espada.nome}, um ${escudo.nome} e uma ${pocaoVida.nome}!`);

heroi.equiparItem(espada);
heroi.equiparItem(escudo);

console.log("\n---Batalha contra o Goblin---");

while(heroi.estaVivo() && goblin.estaVivo()){
    heroi.atacar(goblin);

    if(goblin.estaVivo()){
        goblin.atacar(heroi);
    }
}

if (heroi.estaVivo()) {
    console.log(`\n${heroi.nome} derrotou o ${goblin.nome}!`);
    heroi.ganharExperiencia(50);
    console.log(`Vida de ${heroi.nome}: ${heroi.vida}`);
    console.log(`Inventário de ${heroi.nome}: ${heroi.inventario.map(item => item.nome)}`);
}

console.log("\n--- Herói usa poção ---");

pocaoVida = heroi.inventario.find(item => item.tipo === "poção");
if (pocaoVida) {
    heroi.vida += 30;
    heroi.inventario = heroi.inventario.filter(item => item !== pocaoVida);
    console.log(`${heroi.nome} usou ${pocaoVida.nome}. Vida atual: ${heroi.vida}`);
}

console.log("\n--- Batalha contra o Dragão (Desafio Final) ---");

while (heroi.estaVivo() && dragao.estaVivo()) {
    heroi.atacar(dragao);

    if (dragao.estaVivo()) {
        dragao.atacar(heroi);
    }
}

if (heroi.estaVivo()) {
    console.log(`\nParabéns, ${heroi.nome}! Você derrotou o ${dragao.nome} e salvou o reino!`);
    heroi.ganharExperiencia(200);
} else {
    console.log(`\n${heroi.nome} foi derrotado pelo ${dragao.nome}. Fim de jogo.`);
}

console.log("\n--- Fim da Aventura ---");