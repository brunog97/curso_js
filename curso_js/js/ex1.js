
//Exercicio 1 
console.log("O arquivo \"ex.1js\" está funcionando")

//Exercicio 2 
var nome; 
var anoNascimento; 

var now = new Date;

nome = 'Bruno Gomes'
anoNascimento = 1997 
anoNascimento = now.getFullYear()- anoNascimento ;

console.log(`Olá, eu me chamo ${nome}, tenho ${anoNascimento} anos e estou estudando JavaScript `);

//Exercicio 3 
nome = 'Bruno Gomes'; 
var numMatricula = '004201909254'; 
var nota1 = 9
var nota2 = 10 
var media = (nota1 + nota2)/2; 

console.log(`O aluno ${nome}, matrícula ${numMatricula}, obteve a média final ${media}`);


//Exercicio  4
var numero = 19981753950
var teste = numero.lenght == 9 ? true : false;

console.log(`Este telefone possui ${teste ? '9 digitos' : numero.toString().length }`);


//Exercicio 5
console.log(Math.pow(32,6));
