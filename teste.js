// Desenvolva aqui o teste das classes em JS
import { Personagem } from './personagens/personagem.js'

const leticia = new Personagem('Leticia', 75, 25, 5);
console.log(leticia);
leticia.receberDano(50);
console.log(leticia.estaVivo())
console.log(leticia);
leticia.receberDano(50);
console.log(leticia.estaVivo())
