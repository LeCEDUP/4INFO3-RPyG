import { Item } from "./item.js" ;

 class Magia extends Item {
 constructor ( name , description , mana cost , power ) {
 super ( name , description );
 this . manacost = manacost ;
 this . poder = poder ;
 }

 castMagic ( target ) {
 console . log ( ` ${this . name } deals ${this . power } magic damage to ${ target . name } !` );
 target . receiveDamage ( this . power );
 }
 }

 class Character {
 constructor ( name , life ) {
 this . name = name ;
 this . life = life ;
 }

 receiveDamage ( damage ) {
 this . life = Math . max ( 0 , this . life - damage );
 console . log ( ` ${this . name } received ${ damage } damage! Remaining health: ${this . life } ` );
 }
 }


 const fireBall = new Magic ( "Fireball" , "A sphere of intense flames" , 20 , 35 );
 const orc = new Character ( "Orc" , 100 );

 fireball . castMagic ( orc );