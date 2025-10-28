import{Personagem} from './personagem.js';

export class mostro extends personagem{constructor(nome, vida, ataque, defesa, tipo){
        super(nome, vida, ataque, defesa);
        this.tipo = tipo;
    };
};