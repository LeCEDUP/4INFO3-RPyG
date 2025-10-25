
import { Item } from 

class Arma extends Item {
  constructor(nome, descricao, bonusAtaque) {
    super(nome, descricao);
    this.bonusAtaque = bonusAtaque;
  }
}
