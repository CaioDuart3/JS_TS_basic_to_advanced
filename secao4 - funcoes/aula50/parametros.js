//arguments funciona apenas em funções que tem a palavra function, portanto arrow functions n funciona
//arguments é um objeto.
function numeros() {
    console.log(arguments);
}
numeros(1,2,3,4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }


// const soma = function(a,b=2,c=4){
//     console.log(a+b+c);
// }
// melhor forma de substituir um valor para mander o padrão é colocar undefined, porém não é a melhor opção para o seu codigo.
// soma(2, undefined,20, );

function imprimir(a, b, ...resto){
    console.log(a,b,resto); //resto vem como um vetor recebendo os valores que vem alem de a e b;
}
imprimir(1,2,3,4,5,6);



