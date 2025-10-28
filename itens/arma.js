// Desenvolva aqui a classe Arma em JS

// from .item import Item

// class Arma(Item):
//     def __init__(self, nome, descricao, bonus_ataque):
//         super().__init__(nome, descricao)
//         self.bonus_ataque = bonus_ataque

import Item from './item.js';

export class Arma extends Item {
    constructor(nome, descricao, bonus_ataque) {
        super(nome, descricao);
        this.bonus_ataque = bonus_ataque;
    }
}