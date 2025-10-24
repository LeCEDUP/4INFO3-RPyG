// Desenvolva aqui a classe Personagem em JS
class personagem{
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(alvo) {
        let dano = Math.max(0,this.ataque - alvo.defesa)
        alvo.receberDano(dano)
        console.log(${this})
    }
}