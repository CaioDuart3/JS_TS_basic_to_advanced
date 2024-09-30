let temporizador;
let segundos = 0;

const pegarTempo = (segundos)=>{
    let milisegundos = segundos*1000;
    const data = new Date(milisegundos);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        timeZone: 'UTC',
    })
}
const iniciarTempo = () => {
    temporizador = setInterval(function(){
        visor.innerHTML = pegarTempo(segundos++)
    },1000);
}

const timer = () => {

    document.addEventListener("click", function (event){
        const visor = document.querySelector('#visor');
        elemento = event.target;

        if (elemento === document.querySelector("#iniciar")){
            clearInterval(temporizador);
            iniciarTempo();
            visor.classList.remove('pausado');
        }
        if (elemento === document.querySelector("#pausar")){
            visor.classList.add('pausado');
            clearInterval(temporizador);
        }
        if (elemento === document.querySelector("#zerar")){
            visor.classList.remove('pausado');
            visor.innerHTML = '00:00:00';
            clearInterval(temporizador);
            segundos = 0;
        }
    })
};
timer()