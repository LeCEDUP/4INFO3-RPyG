// Desenvolva aqui a classe Monstro em JS
import { Personagem } from "./personagem.js";
export class Monstro extends Personagem {
    constructor(nome, vida, ataque, defesa, tipo) {
        super(nome, Number(vida), Number(ataque), Number(defesa));        
        this.tipo = tipo;
    }
}