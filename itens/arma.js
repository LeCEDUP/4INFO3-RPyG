import { Item } from './item.js';

class Arma extends Item {
  constructor(nome, descricao, bonusAtaque) {
    super(nome, descricao);
    this.bonusAtaque = bonusAtaque;
  }
}

export { Arma };


