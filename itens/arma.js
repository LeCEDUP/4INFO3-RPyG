import Item from './item.js';

export default class Arma extends Item {
  constructor(nome, danoMin, danoMax, descricao) {
    super(nome, descricao);
    this.danoMin = danoMin;
    this.danoMax = danoMax;
  }

  dano() {
    return Math.floor(Math.random() * (this.danoMax - this.danoMin + 1)) + this.danoMin;
  }
}