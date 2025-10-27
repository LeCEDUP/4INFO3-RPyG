// Desenvolva aqui a classe Armadura em JS
import { Item } from './Item.js';

class Armadura extends Item {
    constructor (nome, descricao, bonus_defesa){
        super(nome, descricao);

        this.bonus_defesa = bonus_defesa;
    }
}