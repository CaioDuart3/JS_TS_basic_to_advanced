//função fechamento, pois ela fecha mais de uma vez.

//com arrow functions:
const criarMultiplicador = (multiplicador) => (num)=> num * multiplicador;

const quadriplica = criarMultiplicador(4) //cria um quadriplicador;
let resultado = quadriplica(3);
console.log(resultado);

//functions classicas
function raiz(indice){
    //function anonima
    return function(radical){return radical**(1/indice)}
};

const indice3 = raiz(3)  // elevar um numero a 1/3,
resultado = indice3(8); //2*2*2=8;
console.log(resultado);
