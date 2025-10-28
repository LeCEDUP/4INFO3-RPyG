// import * as readline from "readline-sync";

// Desenvolva aqui o teste das classes em JS
import { Personagem } from "./personagens/personagem.js";
import { Monstro } from "./personagens/monstro.js";
import { Heroi } from "./personagens/heroi.js";

let leandro = new Heroi("Leandro", 500, 275, 600) 
let caio = new Monstro('Caio', 5000, 30, 2000, 'Lesma')



//HEROI
console.log(leandro.atacar(caio));
console.log(caio.esta_vivo(caio));

//MONSTRO
console.log(caio.atacar(leandro));
console.log(leandro.esta_vivo(leandro));