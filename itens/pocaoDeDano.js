import { Item } from "./item.js";

export class Pocao extends Item{
    constructor(nome, descricao) {
        super(nome, descricao);
        this.taxa = 30;
        this.dano = 2;
    }
}