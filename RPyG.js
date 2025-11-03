// Desenvolva aqui o menu para interagir com o usuário em JS
import { Heroi } from "./personagens/heroi.js";
import { Arma } from "./itens/arma.js";
import { Armadura } from "./itens/armadura.js";
import { Monstro } from "./personagens/monstro.js";

let heroi = new Heroi("Migs", 100, 15, 5);
let goblin = new Monstro("Gomes Aterrorizante", 130, 8, 2, "Grande");
let dragao = new Monstro("Pedro Machadinho", 30, 30, 10, "Pequeno");

let espada = new Arma("Dark Blade", "Uma lamina negra misteriosa.", 10);
let escudo = new Armadura("Shield Hero", "Um escudo resistente o suficiente.", 7);
let pocaoVida = new Item("Flask of Crimson Tears", "Restaura 30 de vida.");