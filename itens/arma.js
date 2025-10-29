import { Item } from './item.js';

export class Arma extends Item {
  constructor(nome, descricao, bonusAtaque) {
    super(nome, descricao);
    this.bonusAtaque = bonusAtaque;
  }
}




