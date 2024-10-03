// * reduce

let vetor = [5,50,32,56,98,45,85];

//é ideal para retornar um unico valor vindo de uma logica aplicada em um vetor.

// ? exemplo de uso comum:

// ! acumulador por padrão vem com o valor do primeiro elemento, e o valor o do 2 mas pode ser alterado adicionando um valor no argumento de reduce.
//! se vc adicionar um valor no acumulador, o valor vem como primeiro.

// ! dica: caso queira ver o valor que função está retornando a cada iteração, imprima acumulador
// ! dica: é bom sempre iniciar ele com 0 ou [] ou '', e dps vai mudando de acordo com a logica.

let soma = vetor.reduce(function(acumulador, valor, index, array){
    acumulador += valor;
    return acumulador; //sempre indicado que tenha o return.
},0);
console.log(soma); //371

//porém o reduce pode ser utilizado como um filter ou map, não é o mais indicado, porém tem como:

//? simulando filter:

//o acumulador pode ser tanto um numero, como vetor, como string, depende da sua lógica.
let pares = vetor.reduce(function(acumulador, valor){
    if(valor%2===0){ acumulador.push(valor)};
    return acumulador;
}, []);
console.log(pares); // [ 50, 32, 56, 98 ]

//? simulando map: 

let dobro = vetor.reduce(function(acumulador, valor){
    acumulador.push(valor*2);
    return acumulador;
},[]);
console.log(dobro); //[10, 100,  64, 112, 196,  90, 170]

//? mexendo com objetos:

//retorne o objeto da pessoa mais velha: 
const pessoas = [
    {nome:'Caio', idade:21, genero:'M'},
    {nome:'Isaque', idade:31, genero:'M'},
    {nome:'Rafael', idade:26, genero:'M'},
    {nome:'Mayara', idade:32, genero:'F'},
    {nome:'Ludmila', idade:28, genero:'F'},
];

//por baixo dos panos a função retorna um valor que será passado para acumulador de volta.

let maisVelha = pessoas.reduce(function(acumulador, valor, index){
    console.log(acumulador); //vai imprimindo a mais velha a cada iteração

    if (acumulador.idade > valor.idade){
        return acumulador
    }; //retorna o endereço atual q é o maior;

    return valor; //se não é maior retorna o proximo q é maior q o atual.

}, );  //acumulador recebe o primeiro objeto, e o atributo valor o segundo objeto.
//caso acumulador seja definido, o atributo valor recebe o primeiro.
console.log(maisVelha); 

