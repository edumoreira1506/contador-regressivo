// inicializando com a data
var contagemRegressiva = new Date("Jan 01, 3000 00:00:00").getTime();

//ativando a função a cada um segundo
var contador = setInterval(function() {

    // pegando o horário atual
    var hoje = new Date().getTime();

    // subtraindo o tempo que resta entre a data escolhida e hoje
    var tempoRestante = contagemRegressiva - hoje;

    // contas para calcular o tempo restante
    var dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
    var miliSegundos = (((tempoRestante % (1000 * 60)) / 1000) - segundos).toFixed(2).replace(/[^\d]+/g,'').replace(0,'');

    if(dias == 0 && horas == 0 && minutos == 0 && segundos == 0 && miliSegundos == 0)
        clearInterval(contador);

    // colcando no html
    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
    document.getElementById('milisegundos').innerHTML = miliSegundos;

}, 1);