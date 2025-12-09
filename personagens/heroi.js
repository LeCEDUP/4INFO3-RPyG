// Desenvolva aqui a classe Heroi em JS


import Personagem from './personagem.js';

export default class Heroi extends Personagem {
  constructor(nome, vida = 120, ataque = 12, defesa = 6) {
    super(nome, vida, ataque, defesa);
    this.nivel = 1;
    this.experiencia = 0;
    this.inventario = [];
    this.equipado = { arma: null, armadura: null };
  }

  ganharExperiencia(exp) {
    this.experiencia += exp;
    const threshold = this.nivel * 100;
    while (this.experiencia >= threshold) {
      this.experiencia -= threshold;
      this.subirNivel();
    }
  }

  subirNivel() {
    this.nivel += 1;
    // incremento simples: aumenta atributos base
    const bonusVida = 20;
    const bonusAtaque = 3;
    const bonusDefesa = 2;

    this.maxVida += bonusVida;
    // ao subir de nível, cura parcialmente (aumenta vida atual pelo bônus)
    this.vida = Math.min(this.maxVida, this.vida + bonusVida);
    this.ataque += bonusAtaque;
    this.defesa += bonusDefesa;
    // feedback
    return { nivel: this.nivel, maxVida: this.maxVida, ataque: this.ataque, defesa: this.defesa };
  }

  equiparItem(item) {
    if (!item) return false;
    // detecta tipo por presença de propriedades (simples)
    if ('bonus_ataque' in item) {
      this.equipado.arma = item;
      return true;
    } else if ('bonus_defesa' in item) {
      this.equipado.armadura = item;
      return true;
    }
    return false;
  }

  calcularAtaqueTotal() {
    let bonus = 0;
    if (this.equipado.arma) bonus += this.equipado.arma.bonus_ataque || 0;
    return this.ataque + bonus;
  }

  calcularDefesaTotal() {
    let bonus = 0;
    if (this.equipado.armadura) bonus += this.equipado.armadura.bonus_defesa || 0;
    return this.defesa + bonus;
  }

  atacar(alvo) {
    if (!this.estaVivo()) return { sucesso: false, motivo: `${this.nome} está derrotado.` };
    const danoBruto = this.calcularAtaqueTotal();
    const danoFinal = Math.max(0, danoBruto - (alvo.calcularDefesaTotal ? alvo.calcularDefesaTotal() : (alvo.defesa || 0)));
    const dmg = alvo.receberDano(danoFinal);
    return { sucesso: true, dano: dmg };
  }

  receberDano(dano) {
    const defesaTotal = this.calcularDefesaTotal();
    const danoFinal = Math.max(0, dano - defesaTotal);
    // note: defesa já foi usada no cálculo acima, mas para consistência com Personagem, apenas aplicar danoFinal
    return super.receberDano(danoFinal);
  }

  adicionarAoInventario(item) {
    this.inventario.push(item);
  }
}