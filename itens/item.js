
class Item {
    constructor(nome, descricao) {
        this.nome = nome;   
        this.descricao = descricao;
    }
}

class magia extends Item {
    constructor(nome, descricao, custoMana, dano) {
        super(nome, descricao);
        this.custoMana = custoMana;
        this.dano = dano;
    }   
}

export default Item;
export { magia };