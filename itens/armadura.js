// Desenvolva aqui a classe Armadura em JS

import Item from './item.js';

export default class Armadura extends Item {
  constructor(nome, descricao = '', bonus_defesa = 0) {
    super(nome, descricao);
    this.bonus_defesa = bonus_defesa;
  }
}
