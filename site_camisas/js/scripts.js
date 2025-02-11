
// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {
        
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg' 
            }
        }
    },
    
    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg' 
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 10,
    "cor": "colorida",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "com_estampa",
    "embalagem": "bulk"
}


// Regras adicionais para o orçamento:
// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%



// Resolução do desafio:
//evento ready do jquery
$(function(){

    function atualizaOrcamento(param){
        $('.refresh-loader').show();

        var quantidade = param.quantidade; 
        var preco_unit = camisetas[param.cor][param.gola][param.estampa].preco_unit;
        var foto = `img/${camisetas[param.cor][param.gola][param.estampa].foto}`;

        var valor_total = quantidade * preco_unit; 

        if (param.qualidade == "q190")
            valor_total *= 1.12 ;
        
        if(param.embalagem == "unitaria")
            valor_total += (quantidade * 0.15);
        
        
        if(param.quantidade >= 1000){
            valor_total *= 0.85;
        } else if (quantidade >= 500){
            valor_total *= 0.90;
        }else if (quantidade >=100){
            valor_total *= 0.95;
        }
        window.setTimeout(() => {
        
        let id_gola = `#${parametros_pesquisa.gola}`
        let id_estampa = `option[value="${parametros_pesquisa.estampa}"]`;
        let id_qualidade = `#${parametros_pesquisa.qualidade}`
        let id_cor = `#${parametros_pesquisa.cor}`
        let id_embalagem =`option[value="${parametros_pesquisa.embalagem}"]`;


        $("#result_gola").html( $(id_gola).html());
        $("#result_estampa").html($(id_estampa).html());
        $("#result_qualidade").html($(id_qualidade).html());
        $("#result_quantidade").html(parametros_pesquisa.quantidade);
        $("#result_cor").html($(id_cor).html());
        $("#result_embalagem").html($(id_embalagem).html());
        $("#valor-total").html(valor_total.toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2 }))
        $("#foto-produto").attr("src",foto); 

        $('.refresh-loader').hide();
            } , 1000);
        
       
      

    }

    function atualizarCampo(param)
    {
        //Cor
        $("#cor").children().removeClass("selected");
        var id_cor = `#${param.cor}` 
        $(id_cor).addClass("selected");
        //Gola
        $("#gola").children().removeClass("selected");
        var id_gola = `#${param.gola}` 
        $(id_gola).addClass("selected");
        //Qualidade
        $("#qualidade").children().removeClass("selected");
        var id_qualidade = `#${param.qualidade}` 
        $(id_qualidade).addClass("selected");
        //Estampa
        $("#estampa").val(param.estampa);
        //Embalagem 
        $("#embalagem").val(param.embalagem);
        //Quantidade 
        $("#quantidade").val(param.quantidade);

    }

    function atualizarLocalStorage(param){

            window.localStorage.setItem("quantidade", param.quantidade); 
            window.localStorage.setItem("cor", param.cor); 
            window.localStorage.setItem("gola", param.gola); 
            window.localStorage.setItem("qualidade", param.qualidade); 
            window.localStorage.setItem("estampa", param.estampa); 
            window.localStorage.setItem("embalagem", param.embalagem); 
            
    }
    
    $(".option-filter div").click(function(){
        
        $(this).parent().children("div").removeClass("selected");
        $(this).addClass("selected");

        var categoria = $(this).parent().attr('id');
        parametros_pesquisa[categoria] = $(this).attr('id');
        
        atualizarLocalStorage(parametros_pesquisa);
        atualizaOrcamento(parametros_pesquisa);

        });



    $("select").change(function(){
        let parametro_select = $(this).attr('id');
        parametros_pesquisa[parametro_select] = $(this).val();
        atualizarLocalStorage(parametros_pesquisa);
        atualizaOrcamento(parametros_pesquisa);
    })

    $('#quantidade').change(function() {
        let parametro_input = $(this).attr('id');
        parametros_pesquisa[parametro_input] = $(this).val();
        atualizarLocalStorage(parametros_pesquisa);
        atualizaOrcamento(parametros_pesquisa);
    })
    //Ao carregar a pagina 
    if(window.localStorage["quantidade"])
        parametros_pesquisa.quantidade = parseInt(window.localStorage["quantidade"]);
    if(window.localStorage["cor"])
        parametros_pesquisa.cor = window.localStorage["cor"];
    if(window.localStorage["gola"])
        parametros_pesquisa.gola = window.localStorage["gola"];
    if(window.localStorage["qualidade"])
        parametros_pesquisa.qualidade = window.localStorage["qualidade"];
    if(window.localStorage["estampa"])
        parametros_pesquisa.estampa = window.localStorage["estampa"];
    if(window.localStorage["embalagem"])
        parametros_pesquisa.embalagem = window.localStorage["embalagem"];
    

    //Verificar localStorage e atualizar a variavel parametros_pesquisa
    atualizarCampo(parametros_pesquisa);
    atualizaOrcamento(parametros_pesquisa);
});














// Sugestão de etapas da resolução

    // 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
    // valor no console para testar se está certo.

    // 2. Faça os eventos click e change para os filtros.
    
        // a. Faça o evento click para os filtros do tipo botão (.option-filter). Sempre que houver um click, 
        // remova a classe "selected" dos botões do grupo e depois aplique-a apenas ao que foi clicado para
        // que ele fique azul.

        // b. Faça o evento change para os filtros do tipo <select> e para o <input> de quantidade.

        // c. Sempre que um dos eventos acima ocorrer, atualize a variável "parametros_pesquisa" e rode a função para 
        // calcular o preço

    
    // 3. Altere a função do cálculo do preço. Em vez de soltar os valores no console, atualize as informações
    // nos elementos "result_", atualize o preço no elemento "valor-total" e mude o atributo "src" do elemento 
    // "foto-produto" para alterar a imagem mostrada (todas as imagens estão na pasta img).

    // 4. Adicione a funcionalidade de hide e show do spinner (elemento "refresh-loader") à função de cálculo de preço. 
    // Como não estamos consultando dados externos, o cálculo acaba sendo rápido demais, portanto use um setTimeout 
    // para deixar ele aparecer por pelo menos 2 segundos.

    // 5. Crie a funcionalidade do localStorage e ao carregar a página, consulte o localStorage, 
    // atualize a variável "parametros_pesquisa" e rode a função de cálculo de preço