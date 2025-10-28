import * as readlineS from 'readline-sync';

import { Item } from './itens/item.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';




  console.log('\n=== 🏰 MENU PRINCIPAL ===');
  console.log('1 - Escolher nome do herói');
  console.log('2 - Iniciar batalha ⚔️');
  console.log('3 - Sair 🚪');

  let option = readlineSync.questionInt('\nEscolha uma opção: ');

  switch (option) {
    case '1':
      escolherNome();
      break;
    case '2':
      if (!hero.name) {
        console.log('\n⚠️ Escolha o nome do herói antes de iniciar a batalha!');
        menu();
      } else {
        iniciarBatalha();
      }
      break;
    case '3':
      console.log('\n👋 Até a próxima, aventureiro!');
      process.exit(0);
      break;
    default:
      console.log('\n❌ Opção inválida!');
      menu();
  }
}

// ===== ESCOLHER NOME =====
function escolherNome() {
  const nome = readlineSync.question('\nDigite o nome do seu herói: ');
  hero.name = nome || 'Herói sem nome';
  console.log(`\n✨ O bravo ${hero.name} está pronto para a aventura!`);
  menu();
}

// ===== INICIAR BATALHA =====
function iniciarBatalha() {
  console.log(`\n⚔️ ${hero.name} encontra um ${monster.name} no caminho!`);
  console.log(`\n${monster.name}: "Você não passará, mortal!"`);

  hero.hp = 100;
  monster.hp = 60;

  while (hero.hp > 0 && monster.hp > 0) {
    console.log(`\n${hero.name} HP: ${hero.hp} | ${monster.name} HP: ${monster.hp}`);
    const acao = readlineSync.question('\nDigite "A" para atacar ou "F" para fugir: ');

    if (acao.toUpperCase() === 'A') {
      const danoHeroi = Math.floor(Math.random() * hero.attack) + 5;
      const danoMonstro = Math.floor(Math.random() * monster.attack) + 3;

      monster.hp -= danoHeroi;
      console.log(`\n💥 ${hero.name} atacou e causou ${danoHeroi} de dano!`);

      if (monster.hp > 0) {
        hero.hp -= danoMonstro;
        console.log(`😈 ${monster.name} contra-atacou e causou ${danoMonstro} de dano!`);
      }
    } else if (acao.toUpperCase() === 'F') {
      console.log(`\n🏃 ${hero.name} fugiu da batalha!`);
      return menu();
    } else {
      console.log('\n❌ Ação inválida!');
    }
  }

  if (hero.hp <= 0) {
    console.log(`\n💀 ${hero.name} foi derrotado... Fim da jornada.`);
  } else if (monster.hp <= 0) {
    console.log(`\n🏆 ${hero.name} derrotou o ${monster.name}! 🎉`);
  }

  menu();
}

// ===== INÍCIO DO JOGO =====
console.log('=== 🧙‍♂️ Bem-vindo ao RPyG ===');
menu();
