//* Filter:

let vetor = [1,2,3,4,5,6,7,8,9];
let novo = [];

// ! jeito "complicado":
/*
for (let value of vetor){
    if (value > 3){
        novo.push(value);
    }
}
console.log(novo);
*/

//* jeito mais simples:

//novo = vetor.filter(funcção callback (valor, indice, array) { lógica });

novo = vetor.filter((valor) => valor > 3);
console.log(novo);

//o método filter funciona recebendo uma função que pra toda vez que aquele parametro retorna true,
//ele retorna o vetor com as condições desejadas.

// ? imprimir atributos de valores, indices, array:

novo = vetor.filter((valor, indice, array) => {
    console.log(`${indice} - ${valor}`) //imprime pra cada iteração.
    return valor > 3
});
console.log(novo);

// ? exemplo prático:

const nomes = [
    {nome:'Caio', idade:19, genero:'M'},
    {nome:'Isaque', idade:19, genero:'M'},
    {nome:'Rafael', idade:20, genero:'M'},
    {nome:'Mayara', idade:20, genero:'F'},
    {nome:'Ludmila', idade:18, genero:'F'},
];

let filtroGeneroIdade = nomes.filter(objeto => objeto.idade > 19 && objeto.genero === 'F'); //retorna o vetor com o filtro de idade e genero aplicado.
//console.log(filtroGeneroIdade);
console.log(nomes);