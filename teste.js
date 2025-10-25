// Desenvolva aqui o teste das classes em JS
import { Personagem } from './personagens/personagem.js'
import { Heroi } from './personagens/heroi.js';
import { Pocao } from './itens/pocaoDeDano.js'

const leticia = new Heroi('Leticia', 100, 25, 5);
const boleto = new Personagem('Boleto', 200, 10, 10);
const pocao1 = new Pocao('Red Bull', 'Poção de Crítico')
leticia.usarPocaoDeTaxa(pocao1);
leticia.usarPocaoDeTaxa(pocao1);
leticia.usarPocaoDeTaxa(pocao1);

while (leticia.estaVivo() && boleto.estaVivo()) {
    leticia.atacar(boleto);
    if (boleto.estaVivo()){
        boleto.atacar(leticia);
    }
}