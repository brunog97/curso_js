
$(function(){
// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

//"http://dataservice.accuweather.com/currentconditions/v1/127164?apikey=Lj9TkcKtDGdtrbkJILt7zbRAp6ZhMT3A&language=pt-br"

    var accuwheaterAPIKey = 'Lj9TkcKtDGdtrbkJILt7zbRAp6ZhMT3A';
    
    var weatherObject = {
        cidade: "Campinas", 
        estado: "SP", 
        pais: "Brasil", 
        temperatura: "21", 
        minima: "", 
        maxima: "", 
        textoClima: "Ensolaradissimo", 
        iconeClima: ""
    }

    function preencherClimaAgora(cidade, estado, pais, temperatura, minima, maxima, textoClima, iconeClima) {
        
        var textLocal = `${cidade}, ${estado}. ${pais}`

        $("#texto_local").text(textLocal)
        $("#texto_clima").text(textoClima)
        $("#texto_temperatura").html(`${String(temperatura)}&deg;`)
        $("#icone_clima").css("background-image","url('"+weatherObject.iconeClima +"')");
        
    }

    function gerarGrafico(horas,temperaturas){
        Highcharts.chart('hourly_chart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Temperatura hora a hora'
            },
            xAxis: {
                categories: horas
            },
            yAxis: {
                title: {
                    text: 'Temperatura (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                showInLegend: false,
                data: temperaturas
            } ]
        });
    }



    function pegarPrevisaoHoraAHora(localCode) {
        //

        $.ajax({
            url: `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${localCode}?apikey=${accuwheaterAPIKey}&language=pt-br&metric=true`, 
            type: "GET", 
            dataType: "json", 
            success: (data) => {
                var horarios = [];
                var temperaturas = [];

                for(var a = 0; a < data.lenght; a++) {
                    var hora = new Date(data[a].DateTime).getHours();

                    horarios.push(String(hora) + "h");

                    temperaturas.push(data[a].Temperature.Value);

                    gerarGrafico(horarios, temperaturas)
                }

               
                
            }, 
            error: (data) => {
                console.log(data)
            }
        });

    }

    function preencherPrevisao5Dias(previsoes) {
        $("#info_5dias").html("");

        var diasSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];

        for(var a = 0; a < previsoes.lenght; a++) {
             
            data_hoje = new Date(previsoes[a].DateTime)
           
            var dia_semana = diasSemana[data_hoje.getDay()];



             var iconeNumer = (previsoes[a].Day.Icon <= 9) ? `0${String(previsoes[a].Day.Icon)}` : String(previsoes[a].Day.Icon)

             var iconeClima = `https://developer.accuweather.com/sites/default/files/${iconeNumer}-s.png`
             var maxima = previsoes[a].Temperature.Maximum.Value; 
             var minima = previsoes[a].Temperature.Minimum.Value

            elementoHTMLDia = 
            `<div class="day col">
                <div class="day_inner">
                    <div class="dayname">
                        ${dia_semana}
                    </div>

                        <div style="background-image: url('https://developer.accuweather.com/sites/default/files/${String(iconeClima)}-s.png')" class="daily_weather_icon"></div>

                    <div class="max_min_temp">
                        ${String(maxima)}&deg; / ${String(minima)}&deg;
                    </div>
                </div>
            </div>`

          

            $("#info_5dias").append(elementoHTMLDia)
            elementoHTMLDia = ""
        }

        
    }

    

    function pegarPrevisao5Dias(localCode) {

        $.ajax({
            url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${localCode}?apikey=${accuwheaterAPIKey}&language=pt-br&metric=true`, 
            type: "GET", 
            dataType: "json", 
            success: (data) => {
                
                $("#texto_max_min").html(String(data.DailyForecasts[0].Temperature.Minimum.Value) + "&deg; / " + String(data.DailyForecasts[0].Temperature.Maximum.Value ) )
                
                preencherPrevisao5Dias(data.DailyForecasts) 

            }, 
            error: (data) => {
                console.log(data);
            }
        });

    }

    function  pegarTempoAtual(localCode) {
        
        $.ajax({
            url: `http://dataservice.accuweather.com/currentconditions/v1/${localCode}?apikey=${accuwheaterAPIKey}&language=pt-br`, 
            type: "GET", 
            dataType: "json", 
            success: (data) => {

                weatherObject.temperatura = data[0].Temperature.Metric.Value;
                weatherObject.textoClima = data[0].WeatherText;

                var iconeNumer = (data[0].WeatherIcon <= 9) ? `0${String(data[0].WeatherIcon)}` : String(data[0].WeatherIcon)

                weatherObject.iconeClima = `https://developer.accuweather.com/sites/default/files/${iconeNumer}-s.png`

                preencherClimaAgora(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.temperatura, weatherObject.minima, weatherObject.maxima, weatherObject.textoClima, weatherObject.iconeClima)
            }, 
            error: (data) => {
                console.log(data);
            }
        });
    }


    function pegarLocalUsuario(lat,lon) {
        $.ajax({
            url: `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuwheaterAPIKey}&q=${lat}%2C${lon}&language=pt-br`, 
            type: "GET", 
            dataType: "json", 
            success: (data) => {

                try {

                    weatherObject.cidade = data.ParentCity.LocalizedName;

                }
                catch {

                    weatherObject.cidade = data.LocalizedName;

                }

                weatherObject.estado = data.AdministrativeArea.LocalizedName;
                weatherObject.pais = data.Country.LocalizedName;

                var localCode = data.Key;
                pegarTempoAtual(localCode);
                pegarPrevisao5Dias(localCode);
                pegarPrevisaoHoraAHora(localCode);
            }, 
            error: (data) => {
                console.log(data)
            }
        });
        
    }

    function pegarCoordenadasIP()
    {
     
        $.ajax({
            url: `http://www.geoplugin.net/json.gp`, 
            type: "GET", 
            dataType: "json", 
            success: (data) => {
                let lat = data.geoplugin_latitude  || -22.981361;
                let lon = data.geoplugin_longitude || -43.223176;

                pegarLocalUsuario(lat,lon)
            }, 
            error: (data) => {
                console.log(data)
            }
        });
    }

   //pegarCoordenadasIP()




});