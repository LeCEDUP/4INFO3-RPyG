importar { Item } de "./item.js";

classe de exportação Pocao estende Item{
    construtor(nome, descrição) {
        super(nome, descrição);
        isto.taxa = 25;
        isto.dano = 4;
    }
}