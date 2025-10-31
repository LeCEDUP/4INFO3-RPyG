import {Item} from './item.js';

export class Arma extends Item{
    constructor(nome, descrição,bonusAtaque){
        super(nome, descrição);
        this.bonusAtaque = bonusAtaque;
    }
}