import * as readline from 'readline-sync';

import { Item } from './itens/item.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';

// Criando personagens
const heroi = new Heroi("Vichenzo", 1000, 250, 50);
const goblin = new Monstro("Goblin", 300, 90, 20, "Pequeno");
const dragao = new Monstro("Dragão", 500, 50, 30, "Grande");

// Criando itens
const espada = new Arma("Espada Longa", "Uma espada afiada.", 30);
const escudo = new Armadura("Escudo de Ferro", "Um escudo resistente.", 5);
const pocaoVida = new Item("Poção de Vida", "Restaura 40 de vida.");

console.log("--- Início da Aventura ---");

// Herói encontra itens
heroi.inventario.push(espada);
heroi.inventario.push(escudo);
heroi.inventario.push(pocaoVida);
console.log(`${heroi.nome} encontrou uma ${espada.nome}, um ${escudo.nome} e uma ${pocaoVida.nome}.`);

// Herói equipa itens
heroi.equiparItem(espada);
heroi.equiparItem(escudo);

console.log("\n--- Batalha contra o Goblin ---");
while (heroi.estaVivo() && goblin.estaVivo()) {
  heroi.atacar(goblin);
  if (goblin.estaVivo()) {
    goblin.atacar(heroi);
  }
}

if (heroi.estaVivo()) {
  console.log(`${heroi.nome} derrotou o ${goblin.nome}!`);
  heroi.ganharExperiencia(50);
  console.log(`Vida de ${heroi.nome}: ${heroi.vida}`);
  console.log(`Inventário de ${heroi.nome}: ${heroi.inventario.map(item => Item.nome).join(', ')}`);
}

console.log("\n--- Herói usa poção ---");
const indicePocao = heroi.inventario.indexOf(pocaoVida);
if (indicePocao !== -1) {
  heroi.vida += 30;
  heroi.inventario.splice(indicePocao, 1);
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



