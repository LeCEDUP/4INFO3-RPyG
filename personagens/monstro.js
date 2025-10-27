// Desenvolva aqui a classe Monstro em JS
import {Personagem} from "./personagem.js";

export class Monstro extends Personagem {
    constructor(nome, ataque, defesa, vida, tipo) {
        super(nome, ataque, defesa, vida);
        this.tipo = tipo;
    }
}

