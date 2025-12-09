// Desenvolva aqui a classe Personagem em JS

export default class Personagem {
  constructor(nome, vida = 100, ataque = 10, defesa = 5) {
    this.nome = nome;
    this.maxVida = vida;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  estaVivo() {
    return this.vida > 0;
  }

  receberDano(dano) {
    const danoRecebido = Math.max(0, dano);
    this.vida = Math.max(0, this.vida - danoRecebido);
    return danoRecebido;
  }

  atacar(alvo) {
    if (!this.estaVivo()) return { sucesso: false, motivo: `${this.nome} está derrotado.` };

    // cálculo base: ataque - defesa do alvo (defesa do alvo deve ser já refletida)
    const danoBruto = this.ataque;
    const danoFinal = Math.max(0, danoBruto - (alvo.defesa || 0));
    const danoAplicado = alvo.receberDano(danoFinal);
    return { sucesso: true, dano: danoAplicado };
  }
}