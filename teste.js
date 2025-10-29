// import * as readline from "readline-sync";

// Desenvolva aqui o teste das classes em JS
import { Personagem } from "./personagens/personagem.js";
import { Monstro } from "./personagens/monstro.js";
import { Heroi } from "./personagens/heroi.js";
import { Espada } from "./itens/arma.js";

let leandro = new Heroi("Leandro", 500, 10, 600) 
let caio = new Monstro('Caio', 5000, 30, 2000, 'Lesma')



//HEROI
leandro.atacar(caio);
console.log(caio.esta_vivo(caio));
console.log(leandro.nome)

//MONSTRO
caio.atacar(leandro);
console.log(leandro.esta_vivo(leandro));
console.log(caio.nome)


leandro.equipar_item(espadas.nome === "Lâmina do Rei Caído")