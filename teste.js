// Desenvolva aqui o teste das classes em JS
import { Personagem } from "./personagens/personagem.js";
import { Monstro } from "./personagens/monstro.js";

let leandro = new Personagem("Leandro", 500, 275, 600) 
let caio = new Monstro('Caio', 5000, 300, 2000, 'Lesma')


// function personagemDados(personagemTeste){
//     console.log(`O personagem ${personagemTeste.nome} possui de ${personagemTeste.vida} vida, ${personagemTeste.ataque} de ataque e
// ${personagemTeste.defesa} de defesa`)
// }
// function monstroDados(personagemTeste){
//     console.log(`O monstro ${personagemTeste.nome} possui de ${personagemTeste.vida} vida, ${personagemTeste.ataque} de ataque e
// ${personagemTeste.defesa} de defesa`)
// }



function tipoPersonagem(p){
    if(p = Personagem){
        console.log(`O personagem ${p.nome} possui de ${p.vida} vida, ${p.ataque} de ataque e
${p.defesa} de defesa`)
    }

    else if(p = Monstro){
        console.log(`O monstro ${p.nome} possui de ${p.vida} vida, ${p.ataque} de ataque e
${p.defesa} de defesa`)
    }
}

tipoPersonagem(caio)
