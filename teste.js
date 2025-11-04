// Desenvolva aqui o teste das classes em JS
import Heroi from './personagens/heroi.js';
import Monstro from './personagens/monstro.js';
import Arma from './itens/arma.js';
import Armadura from './itens/armadura.js';

function main() {
  const heroi = new Heroi('Cecilion');
  const espada = new Arma('Espada Pequena', 'Uma espada simples', 6);
  const capacete = new Armadura('Capacete de Ouro', 'Proteção avançada', 7);
  heroi.adicionarAoInventario(espada);
  heroi.adicionarAoInventario(capacete);
  heroi.equiparItem(espada);
  heroi.equiparItem(capacete);

  const goblin = new Monstro('Lilya', 'Pequeno', 70, 5, 3);

  console.log(`Começa o combate: ${heroi.nome} vs ${goblin.nome}`);
  let turno = 1;
  while (heroi.estaVivo() && goblin.estaVivo()) {
    console.log(`--- Turno ${turno} ---`);
    // heroi ataca
    const resH = heroi.atacar(goblin);
    console.log(`${heroi.nome} ataca e causa ${resH.dano} de dano. Vida do ${goblin.nome}: ${goblin.vida}/${goblin.maxVida}`);
    if (!goblin.estaVivo()) {
      console.log(`${goblin.nome} derrotado!`);
      const exp = goblin.experienciaAoDerrotar();
      heroi.ganharExperiencia(exp);
      console.log(`${heroi.nome} ganha ${exp} de EXP. Nível: ${heroi.nivel}, EXP atual: ${heroi.experiencia}`);
      break;
    }

    // monstro ataca
    const resM = goblin.atacar(heroi);
    console.log(`${goblin.nome} ataca e causa ${resM.dano} de dano. Vida do ${heroi.nome}: ${heroi.vida}/${heroi.maxVida}`);
    if (!heroi.estaVivo()) {
      console.log(`${heroi.nome} foi derrotado...`);
      break;
    }
    turno += 1;
  }

  console.log('Fim do combate.');
}

main();
