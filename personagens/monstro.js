import { Personagem } from './personagem.js';

export class Monstro extends Personagem {
  constructor(nome, vida, ataque, defesa, tipo) {
    super(nome, vida, ataque, defesa);
    this.tipo = tipo;
  }
}
