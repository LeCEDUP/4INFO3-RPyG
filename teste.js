// Desenvolva aqui o teste das classes em JS
// RPyG/teste.js
// RPyG/teste.js
import { Heroi } from './personagens/heroi.js';
import { Monstro } from './personagens/monstro.js';
import { Arma } from './itens/arma.js';
import { Armadura } from './itens/armadura.js';
import { Item } from './itens/item.js';

console.log("--- Teste de Classes Surf-RPyG ---");

// 1. Criação de Itens (Pranchas e Roupas)
const pranchaPerformance = new Arma("Prancha de Performance", "Uma prancha rápida para manobras radicais.", 15);
const trajeNeoprene = new Armadura("Traje de Neoprene", "Proteção térmica e contra arranhões de coral.", 8);
const aguaCoco = new Item("Água de Coco", "Restaura 50 de Vigor.", 50);

console.log("\n--- Itens de Surf Criados ---");
console.log(pranchaPerformance);
console.log(trajeNeoprene);
console.log(aguaCoco);

// 2. Criação de Personagens
const surfista = new Heroi("PEPE RLK", 120, 15, 8);
const monstroMarinho = new Monstro("Água-Viva Elétrica", 40, 12, 3, "Marinho");

console.log("\n--- Surfista e Monstro Criados ---");
console.log(surfista);
console.log(monstroMarinho);

// 3. Teste de Inventário e Equipamento
surfista.inventario.push(pranchaPerformance, trajeNeoprene, aguaCoco);
console.log("\n--- Mochila do Surfista ---");
console.log(surfista.inventario.map(item => item.nome));

surfista.equiparItem(pranchaPerformance);
surfista.equiparItem(trajeNeoprene);
surfista.equiparItem(aguaCoco); // Não deve equipar

// 4. Teste de Batalha
console.log("\n--- Início da Batalha na Arrebentação ---");
console.log(`Vigor inicial do ${monstroMarinho.nome}: ${monstroMarinho.vida}`);

surfista.atacar(monstroMarinho);
monstroMarinho.atacar(surfista);

console.log(`Vigor atual do ${surfista.nome}: ${surfista.vida}`);
console.log(`Vigor atual do ${monstroMarinho.nome}: ${monstroMarinho.vida}`);

// 5. Teste de Experiência e Nível
console.log("\n--- Teste de Nível (Surfar Ondas Lendárias) ---");
console.log(`Nível inicial do ${surfista.nome}: ${surfista.nivel}`);
surfista.ganharExperiencia(150); // Deve subir de nível
surfista.ganharExperiencia(50);  // Não deve subir de nível
surfista.ganharExperiencia(100); // Deve subir de nível novamente

// 6. Teste de Criação de Monstro Aleatório
console.log("\n--- Teste de Monstro Aleatório ---");
const monstroNivel1 = Monstro.criarMonstroAleatorio(1);
const monstroNivel5 = Monstro.criarMonstroAleatorio(5);
console.log(`Monstro Nível 1: ${monstroNivel1.nome} (Vida: ${monstroNivel1.vida})`);
console.log(`Monstro Nível 5: ${monstroNivel5.nome} (Vida: ${monstroNivel5.vida})`);

// 7. Teste de Derrota
console.log("\n--- Teste de Correnteza Fatal ---");
const ondaGigante = new Monstro("Onda Tsunami", 1000, 500, 100, "Onda");
ondaGigante.atacar(surfista);
console.log(`O ${surfista.nome} está vivo? ${surfista.estaVivo()}`);
