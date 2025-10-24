// Desenvolva aqui a classe Armadura em JS
const Item = require('./item');

class Armadura extends Item {   
    constructor(nome, descricao, bonus_defesa) {
        super(nome, descricao);
        this.bonus_defesa = bonus_defesa;
    }
}

module.exports = Armadura;