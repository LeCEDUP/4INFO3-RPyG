// Desenvolva aqui a classe Armadura em JS

// from .item import Item

// class Armadura(Item):
//     def __init__(self, nome, descricao, bonus_defesa):
//         super().__init__(nome, descricao)
//         self.bonus_defesa = bonus_defesa


import Item from './item.js';

    export class Armadura extends Item {
        constructor(nome, descricao, bonus_defesa) {
        super(nome, descricao);
        this.bonus_defesa = bonus_defesa;
    }
}