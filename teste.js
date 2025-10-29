// teste.js
import Heroi from './personagens/heroi.js';
import Monstro from './personagens/monstro.js';
import Arma from './itens/arma.js';
import Armadura from './itens/armadura.js';

function main() {
  const heroi = new Heroi('Arthos');
  const espada = new Arma('Espada Curta', 'Uma espada simples', 6);
  const couraça = new Armadura('Couraça de Couro', 'Proteção básica', 3);
  heroi.adicionarAoInventario(espada);
  heroi.adicionarAoInventario(couraça);
  heroi.equiparItem(espada);
  heroi.equiparItem(couraça);

  const goblin = new Monstro('Goblin', 'Pequeno', 40, 9, 2);

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