import { Item } from "./item";

export class Arma extends Item {
    constructor(nome, descricao, bonus_ataque) {
        super(nome, descricao);
        this.bonus_ataque = bonus_ataque;
    }
}