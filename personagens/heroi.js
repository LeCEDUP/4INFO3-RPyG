// Desenvolva aqui a classe Heroi em JS

importar { Personagem } de "./personagem.js";

exportar classe Heroi estende Personagem{
    construtor(nome, vida, ataque, defesa, taxaCritica=0, danoCritico=1){
        super ( nome ,  vida ,  ataque ,  defesa ) ;
        isto . taxaCritica  =  taxaCritica ;
        isto . danoCritico  =  danoCritico ;
    }

    usarPocaoDeTaxa ( pocao ) {
        se (this.taxa + pocao.taxa > 100){
            isto . taxaCritica  =  100
        } outro {
            esta.taxaCritica += pocao.taxa
        }
        esse . danoCritico  +=  pocao . dano
    }

    atacar ( alvo )  {
        deixe  dano  =  Math . max ( 0 ,  this . ataque  -  alvo.defesa ) ;​​
        deixe aleatorio = Math.random() * 100;
        se (aleatório <= this.taxaCritica) {
            dano  *=  this . danoCritico
        }
        alvo . receberDano ( dano ) ;
        console . log ( ` ${ this . nome } atacou ${ alvo . nome } causando ${ dano } de dano.` ) ;
    }
}