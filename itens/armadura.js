
import { Item } from "./item.js";

export class Armadura extends Item{
    constructor(nome, descricao, bonusDefesa) {
        super(nome, descricao);
        this.bonusDefesa = bonusDefesa;
    }
};