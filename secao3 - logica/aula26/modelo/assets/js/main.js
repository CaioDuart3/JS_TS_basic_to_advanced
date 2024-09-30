// * método utilizando switch casa:

// const dia_da_semana = (data) => {
//     const dia = data.getDay();
//     switch(dia){
//         case 0: return 'Doming';
//         case 1: return 'Segunda-feira';
//         case 2: return 'Terça-feira';
//         case 3: return 'Quarta-feira';
//         case 4: return 'Quinta-feira';
//         case 5: return 'Sexta-feira';
//         case 6: return 'Sábado';
//         default: return 'dia inválido';
//     }
// };
// const mes_do_ano = (data) => {
//     const mes = data.getMonth();
//     switch (mes) {
//         case 0: return 'Janeiro';
//         case 1: return 'Fevereiro';
//         case 2: return 'Março';
//         case 3: return 'Abril';
//         case 4: return 'Maio';
//         case 5: return 'Junho';
//         case 6: return 'Julho';
//         case 7: return 'Agosto';
//         case 8: return 'Setembro';
//         case 9: return 'Outubro';
//         case 10: return 'Novembro';
//         case 11: return 'Dezembro';
//         default: return 'mês inválido';
//     }
// }

// const adicionarZeroEsquerda = (num) => {
//     return num < 10? `0${num}` :num;
// };

// const mostrarData = () => {
//     const data = new Date();
//     const diaNome = dia_da_semana(data);
//     const mesNome = mes_do_ano(data);

//     const resultado = document.querySelector('h1')
//     resultado.innerHTML = `${diaNome}, ${data.getDate()} de ${mesNome} de ${data.getFullYear()} ${adicionarZeroEsquerda(data.getHours())}:${adicionarZeroEsquerda(data.getMinutes())}`;
// };

// mostrarData();

// * método utilizando vetor:

// const dia_da_semana = (data) => {
//     const dia = data.getDay();
//     const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
//     return dias[dia];
// };
// const mes_do_ano = (data) => {
//     const mes = data.getMonth();
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro'];
//     return meses[mes];
// }

// const adicionarZeroEsquerda = (num) => {
//     return num < 10? `0${num}` :num;
// };

// const mostrarData = () => {
//     const data = new Date();
//     const diaNome = dia_da_semana(data);
//     const mesNome = mes_do_ano(data);

//     const resultado = document.querySelector('h1')
//     resultado.innerHTML = `${diaNome}, ${data.getDate()} de ${mesNome} de ${data.getFullYear()} ${adicionarZeroEsquerda(data.getHours())}:${adicionarZeroEsquerda(data.getMinutes())}`;
// };

// mostrarData();

// TODO método da documentação: 

const mostrarData = () => {
    const data = new Date();
    const resultado = document.querySelector('h1');
    resultado.innerHTML = data.toLocaleString( 'pt-BR', { dateStyle: "full", timeStyle: "short"});
};

mostrarData();