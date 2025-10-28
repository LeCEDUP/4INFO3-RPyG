import { Item } from "./item.js";

export class Arma extends Item {
    constructor(nome, descricao, bonusAtaque, raridade) {
        super(nome, descricao);
        this.bonusAtaque = bonusAtaque;
        this.raridade = raridade;
    }
}