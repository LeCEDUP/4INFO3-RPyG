import {item} from './item.js';

export class Arma extends item{
    constructor(nome, descrição,bonusAtaque){
        super(nome, descrição);
        this.bonusAtaque = bonusAtaque;
    }
}