
var nome = "Bruno Gomes"; 

//alert('Mensagem enviada pelo comando alert');

/*
console.log(`Seu nome é ${nome}` );
console.log(nome.length)
console.log(nome[0])


for(i =0; i < nome.length; i++)
{
    console.log(nome[i]);
    console.log(typeof nome[i])

}
*/


var potencia = Math.pow(2,4);  /*  Neste caso usamos o método pow do objeto Math, que faz potenciação.
Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
Isso significa que temos 24, que dá 16. */

var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3

var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5

var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4

var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6

//console.log(`A potência é: ${potencia}`);


var teste1 = 20 > 2; // true

var teste2 = 2 >= 2; // true

var teste3 = 5 < 5; // false

var teste4 = 5 <= 10; // true

var teste5 = 20 == 20; // true

var teste6 = 'ivan' == 'joão' // false

var teste7 = 20 === "20"; // false - valor é igual mas o tipo não. O primeiro é número, o segundo é string.

var teste8 = 20 != 10; // true

var teste9 = 10 != 10; // false

var teste10 = "10" !== 10; // true - o tipo não é igual

var teste11 = "9" !== 10; // false - o tipo nem o valor são iguais.


var undf = undefined;
var nl = null;
//console.log(undf == nl);  // O console mostrará true



//var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

//conteudo_caixa =  '<h1>'+ document.getElementById("caixa_azul").innerHTML +'</h1>'
//console.log(conteudo_caixa);

//document.getElementById("caixa_azul").innerHTML = conteudo_caixa;

/*

var alunos = [
["Camila", "Bruno Gomes", "Quézia", "Bruno Silveira"],
["Breno", "Pamela", "Carol", "Salvador"]
]; 

//[]  ARRAY //[[]] ARAY DENTRO DE ARRAY
var numero_primo = [2,3,5,7,9,11,13]; 

var texto = 
`Você possui ${alunos.length} alunos!\n` + 
`${numero_primo[2]} \n` + 
`${alunos[0][0]}`
console.log(texto)



console.log(cursos);

cursos.push("JavaScript") //Adiciona ao fim da array 

cursos.unshift("BootStrap") //Adiciona ao inicio do array 

console.log(cursos);

cursos.pop() // Remove ao fim da array 

cursos.shift() //remove ao inicio da array 


var cursos = ["HTML", "Python", "PHP"]

function ultima_posicao(array, valor) {

    var tamanho = array.length 
    
    array[tamanho] = valor;

}

ultima_posicao(cursos,"BootStrap");

console.log(cursos.slice(0,2));
*/

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

//console.log(funcionario);

//console.log(`Acessando com colchetes: ${funcionario['cpf']}`); 
//console.log(`Acessando com ponto (dot notation): ${funcionario.cpf}`);

funcionario.cargo = 'Gerente de T.I'
funcionario.salario = 5500.90

//console.log(funcionario)
//console.log(funcionario.salario.toString()  )

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

//console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = 'Administração de Empresas'

//console.log(cursos[2]); 

/*
function fn(peso,altura){
    return  peso/(Math.pow(altura,2));
}


document.getElementById("imc").innerHTML = fn(
    document.getElementById("peso").innerHTML, 
    document.getElementById("altura").innerHTML
).toFixed(2)


var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for(a =0; a< alunos.length; a++)
{
    console.log(alunos[a]);
}
*/

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

/*
for (var prop in carro) {
    console.log( prop + ': ' + carro[prop] );
}
*/

/* O console mostrará:

Ano: 2018
Modelo: Fox
Cilindradas: 1.8
Combustível: Gasolina



var elementos = document.getElementsByClassName("exemplo");   

    for (var a = 0; a < elementos.length ; a++) {
        elementos[a].style.color = "orange";
        elementos[a].style['font-weight'] = "bold";
    }
*/

    // var count = 0;

    // while (count < 5) {
    //     console.log(count);
    //     count++;
    // }

    /* O console mostrará:

    0
    1
    2
    3
    4

    */

//    window.onmousemove = (e) =>{
//     if (e.pageY < 5) {
//         alert('Não perca os descontos exclusivos na seção de promoções');
//     }
// };

//console.log(window.location.href);
function Exercicio_25(){
let  nome;
document.getElementById("enviar-nome").onclick = () => {

        nome = document.getElementById("nome-usuario").value;
        localStorage.setItem("nome",nome);
    
        document.getElementById("name-field").style.display = "none";
        document.getElementById("welcome-text").innerHTML = `Olá ${localStorage.nome}, tudo bem?`
        document.getElementById("not-me").innerHTML = `Não é ${localStorage.nome}?`
    
    
        document.getElementById("welcome-area").style.display = "initial";
    
    
}

if(localStorage.nome)
{
    document.getElementById("name-field").style.display = "none";
    document.getElementById("welcome-text").innerHTML = `Olá ${localStorage.nome}, tudo bem?`
    document.getElementById("not-me").innerHTML = `Não é ${localStorage.nome}?`


    document.getElementById("welcome-area").style.display = "initial";
}

document.getElementById("not-me").onclick = () => {
    //Remover a chave do localStorage
    localStorage.removeItem("nome",nome);
    //Remove valor do nome
    document.getElementById("nome-usuario").value = "";
    //Esconder a mensagem de boas-vindas
    document.getElementById("welcome-area").style.display = "none";
    //Exibir formulário
    document.getElementById("name-field").style.display = "initial";
    //Focus no campo
    document.getElementById("nome-usuario").focus();
}

}

//Exercicio_25()

function Exercicio_26(){
   let data_hoje = new Date();

   
    function retornaMes(data)
    {
         switch(data)
        {
            case 0: 
               'Janeiro';
                break;
            case 1:
                mestxt = 'Fevereiro';
                break;
            case 2:
                mestxt = 'Março';
                break;
            case 3:
                mestxt = 'Abril';
                break;
            case 4: 
                mestxt = 'Maio';
                break;
            case 5:
                mestxt = 'Junho'; 
                break;
            case 6: 
                mestxt = 'Julho';
                break;
            case 7:
                mestxt = 'Agosto';
                break;
            case 8:
                mestxt = 'Setembro';
                break;
            case 9:
                mestxt = 'Outubro';
                break;
            case 10:
                mestxt = 'Novembro';
                break;
            case 11:
                mestxt = 'Dezembro';
                break;
            default: 
               mestxt= 'Mês não identificado';
            break;
           

        }
        return mestxt;
    }

    console.log(retornaMes(data_hoje.getMonth()));

    function tempoatual()
    {
        function time()
        {
            today=new Date();
            h=today.getHours();
            m=today.getMinutes();
            s=today.getSeconds();

            

            return `${h}:${m}:${s}`

            
        }

        

        return `Hoje é  ${data_hoje.toLocaleDateString()}, agora é ${time()}`
    }   
    
    console.log(tempoatual())

}

//Exercicio_26()

function Exercicio_27(){

    document.getElementById("mostrar-loader").onclick = () =>{
        document.getElementById("spinner-loader").style.display = "initial";

        window.setTimeout(() => document.getElementById("spinner-loader").style.display = "none",5000)
    }

    var count = 0;

    var inter = window.setInterval(() =>{
        console.log(count);
        count++;
        if (count >= 10) 
            window.clearInterval(inter);
    },1000)

    
    function fn_desafio(){
    date = new Date();

    function format_time(time)
    {
        if(time >= 0 && time <= 9){
            var formatted_time = time.toString();
            formatted_time = `0${formatted_time}`;}
        else{
             formatted_time = time.toString();
        }

        return formatted_time

    }

    document.getElementById("relogio").innerHTML  =  `${format_time(date.getHours())}:${format_time(date.getMinutes())}:${format_time(date.getSeconds())} `;

    }


    window.setInterval(fn_desafio,1000)

    
  
}

//Exercicio_27()
/*
Exercio 28, 29 pulados
*/
function Exercicio_30(){

    document.getElementById("mostrar_opcao").onclick = () => {
       
        let campo_select = document.getElementById("options");
        let indice_selecionado = campo_select.options.selectedIndex;
        document.getElementById("opcao_selecionada").innerHTML = campo_select.options[indice_selecionado].innerHTML;
    }

    document.getElementById("options").onchange = () =>{
    
        let campo_select = document.getElementById("options");
        let indice_selecionado = campo_select.options.selectedIndex;
        document.getElementById("opcao_selecionada").innerHTML = campo_select.options[indice_selecionado].innerHTML;

    }

    document.getElementById("mostrar_opcao").click()


    document.getElementById("mostrar_radio").onclick = function () {

        var radio = document.getElementsByName("genero");
        
        var radio_selected;
        
        for (var a = 0;  a < radio.length; a++) {
            if (radio[a].checked) {
                radio_selected = radio[a].value;
            }
        }
        
        document.getElementById("radio_selecionado").innerHTML = radio_selected;

    };


    document.getElementById("mostrar_radio").click();


    document.getElementById("mostrar_check").onclick = function () {


        var check = document.getElementsByName("interesse");

        document.getElementById("check_selecionado").innerHTML = "";

        for (var b = 0;  b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    

    };


    document.getElementById("mostrar_data").onclick = function () {

        var data_select = document.getElementById("data_evento").value;
        var data_completa = new Date(data_select);

        if(data_completa == 'Invalid Date')
        {
            alert('Nenhuma data informada, verifique!');
        }else 
        {

            document.getElementById("data_selecionada").innerHTML = data_completa;
        }

        

    };


}

//Exercicio_30()

function Exercicio_31(){

    document.getElementById("escolaridade").onchange = function () {

        var campo_select = document.getElementById("escolaridade");
        var indice_selecionado = campo_select.options.selectedIndex;
        var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
        document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

    };

    var check = document.getElementsByName("lanche");

    for (var a = 0;  a < check.length; a++) {

        check[a].onchange = function () {

            document.getElementById("check_selecionado").innerHTML = "";
            
            for (var b = 0;  b < check.length; b++) {
                
                if (check[b].checked) {
                    document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
                }
            }
        }  
    }




}

//Exercicio_31()


//Aula 34 Jquery 
//# id 
//. class
/*
$("#esconder").click(
() => {
    $(".exemplo").hide();
});

$("#paragrafo-html").html("Welcome ao JQuery");

$("#paragrafo-html").html("Welcome ao JQuery");

$("#paragrafo-link").attr("href","http://udemy.com");


$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

*/

 // Remover o conteúdo, mantendo o elemento:
// $("#paragrafo-empty").empty();

 // Remover o elemento:
 /*
 $("#paragrafo-empty").remove();


 var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

 $.each(lista, ( indice, valor ) => console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor));

 var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log(`O elemento de chave ${chave} tem o valor de  ${valor}`);
});


let interesses = $("#interesses li"); //pegando todos os li da ul interesses

$.each(interesses, (chave, valor) => 
    console.log($(valor).text())  );


$("#campo_nome").val("Bruno Gomes");

//let valorCampo = $("#campo_nome").val();

/*
$("#campo_nome").focusout(() => {
        let valorCampo = $("#campo_nome").val();
        let valorOld
        if(valorCampo == valorOld)
        {
                window.alert("O valor continua o mesmo!")
        }
        else{
            window.alert(valorCampo)
             valorOld = valorCampo
        }
        
    })

*/

/*
$("#nome").keyup( () => {
        var conteudo = $("#nome").val();
        if (conteudo){
            $("#confirmar").show();
        }
        else{
            $("#confirmar").hide();
        }
    })


    // $( "#botao-esconder" ).click(function() {
    //     $(this).hide(2000, function(){
    //         $("#texto-escondido").show();
    //     });
        
    // });
         

    $( "#botao-esconder" ).click(function() {
        $(this).hide(2000);
        $("#texto-escondido").show();
        
    });
    


    $("#toggle-tab").click(function() {

        $("#tab-content").toggle();
        $("#toggle-tab").toggleClass("flip");
        
    });

    */

    /*
   function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}
        
var user = {
    'nome': ""
}

try{
    
    if (!user.nome) {
        throw 'ERRO: Nome em branco!';
    } 
    
    saudar_usuario(user);
    
} catch (err) {
    console.log(err);
    console.log('Olá usuário, como vai?');
}


idade;
    
mensagem = (nome && idade) ? "Olá " + nome + ", você tem "+ idade +" anos." 
    : (!nome && !idade) ? "Nome e idade não informados"
    : (!idade) ? "Idade não informada"
    : "Nome não informado";

console.log(mensagem);
*/

//Trabalhando com AJAX
/*
var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};


xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
xhttp.send();

*/


$.ajax({
    url: "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", 
    type: "GET", 
    dataType: "json", 
    success: (data) => {console.log(data)}, 
    error: (data) => {
        console.log("Erro na request!")
    }
});

