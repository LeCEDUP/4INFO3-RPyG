import { Item } from "./item.js";

class Magia extends Item {
  constructor(nome, descricao, custoMana, poder) {
    super(nome, descricao);
    this.custoMana = custoMana;
    this.poder = poder;
  }

  lancarMagia(alvo) {
    console.log(`${this.nome} causa ${this.poder} de dano mágico em ${alvo.nome}!`);
    alvo.receberDano(this.poder);
  }
}

class Personagem {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }

  receberDano(dano) {
    this.vida = Math.max(0, this.vida - dano);
    console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
  }
}


const bolaDeFogo = new Magia("Bola de Fogo", "Uma esfera de chamas intensas", 20, 35);
const orc = new Personagem("Orc", 100);

bolaDeFogo.lancarMagia(orc);
