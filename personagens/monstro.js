import { Personagem } from "./personagem.js";

export class Monstro extends Personagem {
    constructor(nome, ataque, vida, defesa, tipo) {
        super(nome, ataque, vida, defesa);
        this.tipo = tipo;
    }
}