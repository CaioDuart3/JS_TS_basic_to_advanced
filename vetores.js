//* Arrays
//são passados por referencia

//?exemplo:

let vet1 = [1,2,3,4]
const vet2= vet1

//para passar por cópia utilizamos o operador spread

const vet3 = [...vet1];

//*atribuição via desestruturação:

const [ ,dois, ...tresEquatro] = vet1 

console.log(dois, tresEquatro); // 2, [3,4]

//*métodos para manipulação de vetor:

vet1.pop() //remove o ultimo endereço
vet1.shift() //remove o primeiro endereço

vet1.push(4) //adiciona no final do array
vet1.unshift(1) //adiciona no inicio do array

const intervalo = vet1.slice(0,-1) //retorna um intervalo de endereços dentro do vetor
console.log(vet1);
console.log(intervalo);

vet1 = vet1.join('. '); //'1. 2. 3. 4.' detalhe, separa em string.
vet1 = vet1.split('. '); // ['1','2','3','4'] detalhe , retorna um vetor de string.
console.log(vet1);

//*método splice:

//splice(indice atual, intervalo pra deletar, elemento1, elemento2, ...);


//             -5      -4         -3       -2         -1
//             0        1         2         3          4
let vet = ['Caio', 'Mayara', 'Isaque', 'Rafael', 'Ludmila'];

//?pop
//let removidos = vet.splice(-1,1);

//?shift
// let removidos = vet.splice(0,1);

//?push
//let removidos = vet.splice(5,0, 'Othavio');

//?unshift
//let removidos = vet.splice(0,0, 'Othavio', 'Felipe');

// * concatenação:

const v1 = [1,2,];
const v2 = [3,4,5];
let v3 = [];

// ! jeito errado:
//v3 = v1+v2;
//console.log(v3, typeof v3); // 1,2,3,45,6,7 //string

// ? jeito certo - usando método concat: 
v3 = v3.concat(v1,v2, 6,7, [8,9], [[10,11]], 'acabei'); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ], 'acabei' ]
console.log(v3);

// ? jeito certo - utilizando spread:

v3 = [...v1,...v2,6,7, [8,9], [[10,11]], 'acabei']; //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], [ [ 10, 11 ] ], 'acabei' ]
console.log(v3);

//* método filter:
// retorna um vetor menor ou maior que o anterior

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

// ? jeito mais simples:

//novo = vetor.filter(funcção callback (valor, indice, array) { return true });

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

let filtroGeneroIdade = nomes.filter(objeto => objeto.idade > 19 && objeto.genero === 'F');
console.log(filtroGeneroIdade);

// * map - método

//em suma é um método que consegue aplicar uma lógica sobre TODOS os VALORES do vetor.
//ele retorna um vetor com a quantidade de elementos igual ao anterior.

let vetor = [33,4,-12,1,29,93,76,22,12];

//? exemplo 1:
let dobro = vetor.map((valor) => valor*2); //retorna uma logica sobre cada valor do array.
//console.log(dobro);

//? exemplo 2:
let novo = vetor.map(function(valor, indice){
    return `${indice} - ${valor}`;
});
//console.log(novo);

// ? exemplo prático:

const pessoas = [
    {nome:'Caio', idade:19, genero:'M'},
    {nome:'Isaque', idade:19, genero:'M'},
    {nome:'Rafael', idade:20, genero:'M'},
    {nome:'Mayara', idade:20, genero:'F'},
    {nome:'Ludmila', idade:18, genero:'F'},
];

// let nomes = pessoas.map(objeto => objeto.nome); //retorna apenas os nomes como string.

// let nomes = pessoas.map(objeto => ({idade: objeto.idade})) //retorna APENAS a idade

// let nomes = pessoas.map(objeto => { //retorna o objeto sem a idade
//     delete objeto.idade;
//     return objeto;
// })
// console.log(nomes)

// let nomes = pessoas.map((objeto, indice)=> { //retorna o mesmo objeto com id adicionado.
//     objeto.id = indice + 1; //adicionando nova chave no objeto
//     return objeto; //retornando objeto com nova chave.
// });
// console.log(nomes) //nesse caso com o map ele modifica o objeto original
// console.log(pessoas)


//para resolver esse problema é bem simples:


// ? como não alterar o vetor original:

let nomes = pessoas.map((objeto, indice)=> { //retorna o mesmo objeto com id adicionado.
    novoObjeto = {...objeto};
    novoObjeto.id = indice + 1; //adicionando nova chave no objeto
    return novoObjeto; //retornando objeto com nova chave.
});
console.log(nomes) //nesse caso com o map ele modifica o objeto original
console.log(pessoas)

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

// * junção do método filter, map, reduce:

const nums = [87,12,54,98, 23,56];
let somaDoDobroDosPares = nums.filter(valor=>valor%2===0).map(valor=>valor*2).reduce((ac,valor)=>ac+valor);
console.log(somaDoDobroDosPares); 
//[ 12, 54, 98, 56 ] pares
//[ 24, 108, 196, 112 ] dobro
//440 soma
