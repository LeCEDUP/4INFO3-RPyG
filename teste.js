import * as readline from "readline-sync";

// Desenvolva aqui o teste das classes em JS
import { Personagem } from "./personagens/personagem.js";
import { Monstro } from "./personagens/monstro.js";
import { Heroi } from "./personagens/heroi.js";

let leandro = new Heroi("Leandro", 500, 275, 600) 
let caio = new Monstro('Caio', 5000, 300, 2000, 'Lesma')

leandro.atacar(caio);

leandro.ganhar_experiencia(6900);
console.log(leandro.defesa)