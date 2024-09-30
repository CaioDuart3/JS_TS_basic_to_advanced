const RetornarDia = (data) => {
    const dia = data.getDay();
    switch(dia){
        case 0: return 'Domingo'; //pode ser substituído por break, a ideia é que o switch se encerre, return ou break servem pra isso.
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
        default: return 'data inválida.'
    }
};
const data = new Date('2025-02-15 23:12:21');
console.log(RetornarDia(data));