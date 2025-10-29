export class Magia {
    constructor(nome, poder, descricao) {
        this.nome = nome;
        this.poder = poder;
        this.descricao = descricao;
    }
}


export class Cura extends Magia {}

export const curaMenor = new Cura('Cura Menor', 10, 'Restaura 10 pontos de vida ao usuário.');
export const curaMaior = new Cura('Cura Maior', 25, 'Restaura 25 pontos de vida ao usuário.');