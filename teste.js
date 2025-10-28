import {Item} from './itens/item.js';
import {Arma} from './itens/arma.js';
import {Armadura} from './itens/armadura.js';
import {heroi} from './personagens/heroi.js';
import {monstro} from './personagens/monstro.js';

const heroi = new Heroi ("Arthur", 100, 15, 5);

const goblin = new Monstro ("Goblin", 30, 8, 2,"pequeno");

const dragao = new Monstro ("Dragão", 200, 30, 10, "grande");

const espada = new Arma ("Espada Longa", "Uma espada afiada.", 10);