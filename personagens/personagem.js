// class Personagem:
//     def __init__(self, nome, vida, ataque, defesa):
//         self.nome = nome
//         self.vida = vida
//         self.ataque = ataque
//         self.defesa = defesa

//     def atacar(self, alvo):
//         dano = max(0, self.ataque - alvo.defesa)
//         alvo.receber_dano(dano)
//         print(f"{self.nome} atacou {alvo.nome} causando {dano} de dano.")

//     def receber_dano(self, dano):
//         self.vida -= dano
//         if self.vida <= 0:
//             self.vida = 0
//             print(f"{self.nome} foi derrotado!")
//         else:
//             print(f"{self.nome} recebeu {dano} de dano. Vida restante: {self.vida}")

//     def esta_vivo(self):
//         return self.vida > 0

class Personagem {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(alvo) {
        let dano = Math.max(this.ataque - alvo.defesa)
        alvo.receber_dano
    }

    receber_dano(dano) {
        this.vida -= dano;
        if(this.vida <= 0) {
            self.vida = 0;
            console.log(`${this.nome} foi derrotado!`)
        } else {
            console.log(`${this.nome} recebeu ${dano}. Vida Restante: ${this.vida}`)
        }
    }
    
}