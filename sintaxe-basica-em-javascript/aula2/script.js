// tipos primitivos

//boolean
var vOuF =  false;
console.log(typeof(vOuF));

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = "Bruno";
console.log(typeof(nome));

// como declarar variavel
var variavel = "bruno";
variavel = "rpg";
console.log(variavel);

let variavel2 = "bruno";
variavel2 = "rpg";
console.log(variavel2);

const variavel3 = "bruno";
// variavel3 = "rpg";
console.log(variavel3);

//escopo

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local" ;
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuicao
var atribuicao = "bruno";

//comparacao
var comparacao = "0" == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal =  6 / 3;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potencializacao
var potencializacao = 2 ** 10;
console.log(potencializacao);

//maior q
var maiorQ =  5 > 2;
console.log(maiorQ);

//menor q
var menorQ = 5 < 2;
console.log(menorQ);

//maior ou iqual q
var maiorOuIgual =  5 >= 2;
console.log(maiorOuIgual);

//menor ou igual q
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !false;
console.log(nao)
;
