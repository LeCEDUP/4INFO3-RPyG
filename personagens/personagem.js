// Desenvolva aqui a classe Personagem em JS
export class Personagem {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque 
        this.defesa = defesa
    }

    atacar(alvo){
       dano = max(0, this.ataque - alvo.defesa)
       alvo.receber_dano(dano)
       console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`) 
    }

    receber_dano(dano){
        this.vida -= dano
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome} foi derrotado MISERAVELMENTE !`)}
          else {
            console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`)}
    }
    esta_vivo(this){
        return this.vida >0
    }
    
}