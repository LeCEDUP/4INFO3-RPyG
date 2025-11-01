// Desenvolva aqui a classe Arma em JS
import Item from './item.js';

export default class Arma extends Item {
    constructor( nome, descricao, bonus_ataque) {
        super(nome, descricao);
        this.bonus_ataque = bonus_ataque;
    }   
}

export class Armar extends Arma{}

export const espadaLonga = new Arma('Espada Longa', 'Uma espada longa e afiada, ideal para combates corpo a corpo.', 5);
export const arcoCurto = new Arma('Arco Curto', 'Um arco leve e fácil de manusear, perfeito para ataques à distância.', 3);
