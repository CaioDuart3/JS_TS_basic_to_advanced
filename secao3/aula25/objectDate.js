
// * criação de objeto data com ponto de partida

// ? new Date (ponto de partida em milisegundos, após a data: 01/01/1970)
// const dataPonto = new Date(1727238843570);
// console.log(dataPonto.toDateString());

// ? ponto de partida string
// const dataString = new Date("2023-02-15 15:00:56")
// console.log(dataString.toString());

// ? ponto de partida valores
// const dataValor = new Date(2024,3,1, 12,23,21,500); //ANO , MES, DIA , HORAS, MINUTOS, SECONDS, MILISEGUNDOS
// console.log(dataValor.toString());

//---------------------------------------------------------------------------------------------------------

// * data atual
const data = new Date();
// console.log(data); //imprime: 2024-09-25T04:31:49.223Z //fuso horário americano pois não está formatado
// console.log(data.toString()); //imprime ohorário exato do computador: Wed Sep 25 2024 01:32:48 GMT-0300 (Hora padrão de Brasília)

// const dataEmMilisegundos = Date.now(); //imprime: o tempo atual em milisegundos desde a criação da UNIX: 1727238843570
// console.log(dataEmMilisegundos);

//------------------------------------------------------------------------------------------------------------

// * pegar campos únicos do objeto data:
// * formatador de datas

const zeroNaEsquerda = function (num) {return num < 10? `0${num}` : num;}

const formatador = (data) => {
    const ano = data.getFullYear(); 
    const mes = zeroNaEsquerda(data.getMonth() + 1); //mês pro JS vai de 0 a 11, então tem que somar 1.
    const dia = zeroNaEsquerda(data.getDate());
    const hora = zeroNaEsquerda(data.getHours()); 
    const minuto = zeroNaEsquerda(data.getMinutes());
    const segundos = zeroNaEsquerda(data.getSeconds()); 
    const milisegundos = zeroNaEsquerda(data.getMilliseconds()); //milisegundos é de 0 a 999.
    const dia_da_semana = zeroNaEsquerda(data.getDay() + 1); // vai de 0 a 6
    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundos}`
}
console.log(formatador(data))