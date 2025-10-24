// Desenvolva aqui a classe Arma em JS
const Item = require('./item');

class arma extends Item {
    constructor( nome, descricao, bonus_ataque) {
        super(nome, descricao);
        this.bonus_ataque = bonus_ataque;
    }   
}

module.exports = arma;