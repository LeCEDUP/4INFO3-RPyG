import * as readline from 'readline-sync';
import { Heroi } from './personagens/heroi.js';
import {Arma} from './itens/arma.js'
import {Monstro} from './personagens/monstro.js'

const nomeDoHeroi = readline.question('Insira um nome para o seu herói: ')
console.log(`O nome do seu herói é ${nomeDoHeroi}`)

const meuHeroi = new Heroi(nomeDoHeroi, 100, 25, 15)
console.log(meuHeroi)

const receberEspada = new Arma('Espada velha','Recebeu Uma Espada longa de uma arvore suspeita', 5)
console.log(receberEspada)

const lutaGoblin = new Monstro('Goblin', 100, 10, 20, 'Normal')
console.log(lutaGoblin)