import Personagem from './personagem.js';

export default class Monstro extends Personagem {
  constructor(nome, hpMax, forca, defesa, xpDrop) {
    super(nome, hpMax, forca, defesa);
    this.xpDrop = xpDrop || 5;
  }
}