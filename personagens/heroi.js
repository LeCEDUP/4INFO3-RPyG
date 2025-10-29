import { Personagem } from "./personagem.js";
import { Monstro } from "./monstro.js";

export class Heroi extends Personagem{
    constructor(nome, vida, ataque, defesa, taxaCritica=0, danoCritico=1, inventario = []){
        super(nome, vida, ataque, defesa);
        this.taxaCritica = taxaCritica;
        this.danoCritico = danoCritico;
        this.inventario = inventario;
    }

    usarPocaoDeTaxa(pocao){
        if (this.taxa + pocao.taxa > 100){
            this.taxaCritica = 100
        } else {
            this.taxaCritica += pocao.taxa
        }
        this.danoCritico += pocao.dano
    }

    atacar(alvo) {
        let dano = Math.max(0, this.ataque - alvo.defesa);
        let aleatorio = Math.random() * 100;
        if (aleatorio <= this.taxaCritica) {
            dano *= this.danoCritico
        }
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
    }
}


const heroi = new Personagem("Herói", 100, 20);
const dragao = new Monstro("Dragão", 150, 25);

console.log(" Início da batalha! \n");

while (heroi.estaVivo() && dragao.estaVivo()) {
  heroi.atacar(dragao);
  if (!dragao.estaVivo()) break;

  dragao.atacar(heroi);
  console.log("");
}

console.log(" Fim da batalha! ");
if (heroi.estaVivo()) {
  console.log(`${heroi.nome} venceu!`);
} else {
  console.log(`${dragao.nome} venceu!`);
}

class Heroi {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.inventario = [];
  }

  
  equiparItem(item) {
    if (this.inventario.includes(item)) {
      if (item instanceof Arma) {
        this.ataque += item.bonusAtaque;
        console.log(`${this.nome} equipou ${item.nome}. Ataque atual: ${this.ataque}`);
      } else if (item instanceof Armadura) {
        this.defesa += item.bonusDefesa;
        console.log(`${this.nome} equipou ${item.nome}. Defesa atual: ${this.defesa}`);
      } else {
        console.log(`${item.nome} não pode ser equipado.`);
      }
    } else {
      console.log(`${this.nome} não possui ${item.nome} no inventário.`);
    }
  }
}

