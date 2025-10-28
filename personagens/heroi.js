// Desenvolva aqui a classe Heroi em JS
// from .personagem import Personagem
// from itens.arma import Arma
// from itens.armadura import Armadura

import { Personagem } from './personagem.js';
import { Arma } from '../itens/arma.js';
import { Armadura } from '../itens/armadura.js';

// class Heroi(Personagem):
//     def __init__(self, nome, vida, ataque, defesa, nivel=1, experiencia=0, inventario=None):
//         super().__init__(nome, vida, ataque, defesa)
//         self.nivel = nivel
//         self.experiencia = experiencia
//         self.inventario = inventario if inventario is not None else []
export class Heroi extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel = 1, experiencia = 0, inventario = []) {
        super(nome, vida, ataque, defesa);
        this.nivel = nivel;
        this.experiencia = experiencia;
        this.inventario = inventario;
    }
}
