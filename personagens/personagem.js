// Desenvolva aqui a classe Personagem em JS 
export class Personagem {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome;
        this.vida = Number(vida);
        this.ataque = Number(ataque);
        this.defesa = Number(defesa);
    }

    atacar(alvo) {
        const dano = Math.max(0, this.ataque - alvo.defesa);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
        alvo.receberDano(dano);
    }

    receberDano(dano) {
        this.vida -= dano;
        if(this.vida <= 0) {
            this.vida = 0;
            console.log(`${this.nome} foi derrotado!`);
        } else {
            console.log(`${this.nome} recebeu ${dano} de dano. Vida Restante: ${this.vida}`);
        }
    }
    estaVivo() {
        return this.vida > 0;
    }
    
}