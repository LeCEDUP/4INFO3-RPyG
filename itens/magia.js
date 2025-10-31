import { Item } from "./item.js";

export class Magia extends Item {
    constructor(nome, descricao, bonusMagia) {
        super(nome, descricao);
        this.bonusMagia = bonusMagia;
    }
}
