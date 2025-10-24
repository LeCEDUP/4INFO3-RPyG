import { Personagem } from "./personagem";

export class Monstro extends Personagem {
    constructor(nome, vida, ataque, defesa, tipo) {
        super().this(nome,vida, ataque, defesa);
        this.tipo = tipo;
    }
}