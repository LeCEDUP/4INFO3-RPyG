import { Personagem } from "./personagens/personagem";
import { Monstro } from "./personagens/monstro";

const arqueiro = new Personagem("arqueiro", 10, 50, 10);
const cavaleiro = new Personagem("cavaleiro", 100, 30, 100);
const dragao = new Monstro("dragao", 1000, 100, 500, "monstro")

arqueiro.atacar(cavaleiro);