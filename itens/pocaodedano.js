import { Item } from "./item.js";

export class PocaoDeDano extends Item {
    constructor(nome, descricao, dano) {
        super(nome, descricao);
        this.dano = dano;
    }
}