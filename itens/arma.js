// Desenvolva aqui a classe Arma em JSEX
import { Item } from './item.js';

class Arma extends Item {
    constructor(nome, descricao, bonus_ataque) {
        super(nome, descricao); 

       
        this.bonus_ataque = bonus_ataque;
    }
}