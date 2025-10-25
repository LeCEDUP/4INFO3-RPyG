// Desenvolva aqui a classe Arma em JS

class Arma extends Item{
    constructor( nome, descricao, bonus_ataque){
        super(nome, descricao)
        this.bonus_ataque = bonus_ataque
    }
}