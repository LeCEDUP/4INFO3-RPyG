// Desenvolva aqui a classe Personagem em JS

exportar classe Personagem {
    construtor(nome, vida, ataque, defesa) {
        este . nome  =  nome ;
        isto.vida = vida;
        isto . ataque  =  ataque ;
        isto . defesa  =  defesa ;
    }

    atacar ( alvo )  {
        deixe  dano  =  Math . max ( 0 ,  this . ataque  -  alvo.defesa ) ;​​
        alvo . receberDano ( dano ) ;
        console . log ( ` ${ this . nome } atacou ${ alvo . nome } causando ${ dano } de dano.` ) ;
    }

    receberDano ( dano )  {
        isso . vida  -=  dano ;
        se (this.vida <= 0){
            esta.vida = 0;
            console . log ( ` ${ this . nome } foi derrotado!` ) ;
        } outro {
            console . log ( ` ${ this . nome } recebeu ${ dano } de dano. Vida restante: ${ this . vida } ` ) ;
        }
    }

    estaVivo ( ) {
        retornar this.vida > 0;
    }
}