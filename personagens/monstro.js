// Desenvolva aqui a classe Monstro em JS
const Personagem = require('./personagem');

class Monstro extends Personagem {
    constructor(nome, ataque, defesa, vida, tipo) {
        super(nome, ataque, defesa, vida);
        this.tipo = tipo;
    }
}

module.exports = Monstro;