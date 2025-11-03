// Desenvolva aqui o menu para interagir com o usuário em JS
import { Heroi } from "./personagens/heroi.js";
import { Arma } from "./itens/arma.js";
import { Armadura } from "./itens/armadura.js";
import { Monstro } from "./personagens/monstro.js";

let heroi = new Heroi("Migs o Escolhido", 100, 15, 5);
let demonio = new Monstro("Gomes Aterrorizante", 130, 8, 2, "Grande");
let pulga = new Monstro("Pedro Machadinha", 10, 10, 10, "Pequeno");

let espada = new Arma("Dark Blade", "Uma lamina negra misteriosa.", 10);
let escudo = new Armadura("Shield Hero", "Um escudo resistente o suficiente.", 7);
let pocaoVida = new Item("Flask of Crimson Tears", "Restaura 30 de vida.");


const cor = {
    reset: "\x1b[0m",
    vermelho: "\x1b[31m",
    verde: "\x1b[32m",
    amarelo: "\x1b[33m",
    azul: "\x1b[34m",
    magenta: "\x1b[35m",
    ciano: "\x1b[36m",
    branco: "\x1b[37m",
    fundoVermelho: "\x1b[41m",
    fundoVerde: "\x1b[42m",
    fundoAmarelo: "\x1b[43m",
    fundoAzul: "\x1b[44m",
    fundoMagenta: "\x1b[45m",
    fundoCiano: "\x1b[46m",
    fundoBranco: "\x1b[47m",
    brilho: "\x1b[1m",
    sublinhado: "\x1b[4m",
};

const LARGURA_CONSOLE = 80;

const criarCabecalho = (titulo, corFundo, corTexto) => {
    const tituloFormatado = `${corTexto}${cor.brilho}${titulo}${cor.reset}`;
    const espaco = " ".repeat(Math.floor((LARGURA_CONSOLE - titulo.length) / 2));
    const linha = "═".repeat(LARGURA_CONSOLE);

    console.log(`\n${corFundo}${corTexto}╔${linha}╗${cor.reset}`);
    console.log(`${corFundo}${corTexto}║${espaco}${tituloFormatado}${espaco}║${cor.reset}`);
    console.log(`${corFundo}${corTexto}╚${linha}╝${cor.reset}\n`);
};

const formatarAcao = (mensagem, corMensagem) => {
    const linha = "─".repeat(LARGURA_CONSOLE - 4);
    const espaco = " ".repeat(Math.max(0, LARGURA_CONSOLE - 4 - mensagem.length));
    const mensagemFormatada = `${corMensagem}${mensagem}${cor.reset}`;

    return `${cor.azul}┌${linha}┐
${cor.azul}│ ${mensagemFormatada}${espaco} │
${cor.azul}└${linha}┘${cor.reset}`;
};

criarCabecalho("RPG AVENTURA: O DESPERTAR DO HERÓI", cor.fundoAzul, cor.branco);

heroi.inventario.push(espada, escudo, pocaoVida);
console.log(formatarAcao(`🎒 ${heroi.nome} encontrou itens: ${espada.nome}, ${escudo.nome} e ${pocaoVida.nome}.`, cor.ciano));

heroi.equiparItem(espada);
heroi.equiparItem(escudo);

criarCabecalho("🚨 ENCONTRO ALEATÓRIO: GOBLIN 🚨", cor.fundoVermelho, cor.branco);

console.log(formatarAcao(`🎯 INÍCIO DA BATALHA CONTRA O ${goblin.nome.toUpperCase()}!`, cor.amarelo));
heroi.atacar(goblin);
goblin.atacar(heroi);
heroi.atacar(goblin);

if (heroi.estaVivo()) {
  criarCabecalho("✅ VITÓRIA! ✅", cor.fundoVerde, cor.branco);
  
  heroi.ganhoExperiencia(50);
  
  console.log(formatarAcao(`❤️ Vida de ${heroi.nome}: ${heroi.vida}`, cor.verde));
  console.log(formatarAcao(`🎒 Inventário: ${heroi.inventario.map(i => i.nome).join(", ")}`, cor.ciano));
}

criarCabecalho("⚗️ MOMENTO DE CURA ⚗️", cor.fundoCiano, cor.branco);
heroi.usarItem(pocaoVida);


criarCabecalho("🔥 DESAFIO FINAL: DRAGÃO ANCESTRAL 🔥", cor.fundoMagenta, cor.branco);

console.log(formatarAcao(`🐉 O temível ${dragao.nome.toUpperCase()} surge!`, cor.amarelo));
heroi.atacar(dragao);
dragao.atacar(heroi);
heroi.atacar(dragao);


if (heroi.estaVivo()) {
  criarCabecalho("🏆 PARABÉNS, HERÓI! 🏆", cor.fundoAmarelo, cor.branco);
  console.log(formatarAcao(`👑 ${heroi.nome} derrotou o ${dragao.nome} e salvou o reino!`, cor.verde));
  heroi.ganhoExperiencia(200);
} else {
  criarCabecalho("💀 FIM DE JOGO 💀", cor.fundoVermelho, cor.branco);
  console.log(formatarAcao(`⚰️ ${heroi.nome} foi derrotado pelo ${dragao.nome}.`, cor.vermelho));
}

criarCabecalho("FIM DA AVENTURA", cor.fundoAzul, cor.branco);