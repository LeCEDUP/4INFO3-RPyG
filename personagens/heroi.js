import { Personagem } from "./personagem.js";
import { Monstro } from "./monstro.js";
import { Arma } from "../itens/arma.js";

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

    ganharExperiencia(exp) {
  this.experiencia += exp;
  console.log(`${this.nome} ganhou ${exp} de experiência. Total: ${this.experiencia}`);

  while (this.experiencia >= this.nivel * 100) {
    this.subirNivel();
  }
}

subirNivel() {
  this.nivel += 1;
  this.vida += 20;
  this.ataque += 5;
  this.defesa += 2;
  this.experiencia -= (this.nivel - 1) * 100;

  console.log(`${this.nome} subiu para o nível ${this.nivel}! Seus atributos aumentaram.`);
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
