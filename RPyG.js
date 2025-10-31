// Desenvolva aqui o menu para interagir com o usuário em JS

import { Heroi } from "./personagens/heroi.js";
import { Arma } from "./itens/arma.js";
import { Armadura } from "./itens/armadura.js";
import { Monstro } from "./personagens/monstro.js";

let heroi = new Heroi("Arthur", 100, 15, 5);
let goblin = new Monstro("Goblin", 30, 8, 2, "Pequeno");
let dragao = new Monstro("Dragão", 100, 30, 10, "Grande");

let espada = new Arma("Espada Longa", "Uma espada afiada.", 10);
let escudo = new Armadura("Escudo de Ferro", "Um escudo resistente.", 5);
let pocaoVida = new Item("Poção de Vida", "Restaura 30 de vida.");

console.log("--- Início da Aventura ---");

heroi.inventario.push(espada, escudo, pocaoVida);
console.log(`${heroi.nome} encontrou uma ${espada.nome}, um ${escudo.nome} e uma ${pocaoVida.nome}.`);


heroi.equiparItem(espada);
heroi.equiparItem(escudo);


console.log("--- Batalha contra o Goblin ---");
while (heroi.estaVivo() && goblin.estaVivo()) {
  heroi.atacar(goblin);
  if (goblin.estaVivo()) {
    goblin.atacar(heroi);
  }
}

if (heroi.estaVivo()) {
  console.log(`${heroi.nome} derrotou o ${goblin.nome}!`);
  heroi.ganhoExperiencia = (xp) => console.log(`Ganhou ${xp} de experiência`);
  heroi.ganhoExperiencia(50);
  console.log(`Vida de ${heroi.nome}: ${heroi.vida}`);
  console.log(`Inventário de ${heroi.nome}: ${heroi.inventario.map(i => i.nome).join(", ")}`);
}

console.log("--- Herói usa poção ---");
heroi.usarItem(pocaoVida);

console.log("--- Batalha contra o Dragão (Desafio Final) ---");
while (heroi.estaVivo() && dragao.estaVivo()) {
  heroi.atacar(dragao);
  if (dragao.estaVivo()) {
    dragao.atacar(heroi);
  }
}

if (heroi.estaVivo()) {
  console.log(`\nParabéns, ${heroi.nome}! Você derrotou o ${dragao.nome} e salvou o reino!`);
  heroi.ganhoExperiencia(200);
} else {
  console.log(`\n${heroi.nome} foi derrotado pelo ${dragao.nome}. Fim de jogo.`);
}

console.log("--- Fim da Aventura ---");