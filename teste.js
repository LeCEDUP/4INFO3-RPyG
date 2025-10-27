// Desenvolva aqui o teste das classes em JS

importar { Personagem } de './personagens/personagem.js'
importar { Heroi } de './personagens/heroi.js';
importar { Pocao } de './itens/pocaoDeDano.js'

const  nicolas  =  new  Heroi ( 'nicolas' ,  90 ,  20 ,  4 ) ;
const  emprestimo  =  new  Personagem ( 'emprestimo' ,  190 ,  08 ,  06 ) ;
const  pocao1  =  new  Pocao ( 'Monster' ,  'Poção de Crítico' )
nicolas . usarPocaoDeTaxa ( pocao1 ) ;
nicolas . usarPocaoDeTaxa ( pocao1 ) ;
nicolas . usarPocaoDeTaxa ( pocao1 ) ;

while  ( nicolas . estaVivo ( )  &&  emprestimo . estaVivo ( ) )  {
    nicolas . atacar ( emprestimo ) ;
    if  ( emprestimo . estaVivo ( ) ) {
        emprestimo . atacar ( nicolas ) ;
    }
}