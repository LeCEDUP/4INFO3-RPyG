// Desenvolva aqui a classe Item em JS

export default class Item {
  constructor(nome, descricao = '') {
    this.nome = nome;
    this.descricao = descricao;
  }
}