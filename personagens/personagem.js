export class Personagem {
    constructor(nome, vida, ataque, defesa, magia = 0){
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
        this.defesa = defesa;
        this.magia = magia;
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

    exibirInformacoes() {
        console.log(`${this.nome} tem ${this.vida} de vida, ${this.ataque} de ataque, ${this.defesa} de defesa, ${this.magia} de magia.`)
    }

    estaVivo() {
        if (this.vida > 0) {
            return true;
        }
        if (this.vida < 0) {
            return true;
        }
    }
}