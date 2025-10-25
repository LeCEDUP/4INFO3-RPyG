// Desenvolva aqui a classe Monstro em JS
import {personagem} from "./personagem.js";

class Monstro extends Personagem {
    constructor(nome, ataque, defesa, vida, tipo) {
        super(nome, ataque, defesa, vida);
        this.tipo = tipo;
    }
}

module.exports = Monstro;