const mostrarHora = () => {
    const data = new Date();
    console.log(data.toLocaleTimeString('pt-BR', {hour12:false, hour:'2-digit', minute:'2-digit',second:'2-digit'}));
}

//automatizador que executa por intervalo de tempo.
//                      chama o atributo
const timer = setInterval(mostrarHora,1000);
//automatizador que executa depois de x tempo.
setTimeout( function(){clearInterval(timer)}, 6000);

setTimeout(function(){console.log('TEMPORIZADOR ENCERRADO.')},7000);

