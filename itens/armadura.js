
import { Item } from './item.js';

class Armadura extends Item {
  constructor(nome, descricao, bonusDefesa) {
    super(nome, descricao);
    this.bonusDefesa = bonusDefesa;
  }
}

export { Armadura };