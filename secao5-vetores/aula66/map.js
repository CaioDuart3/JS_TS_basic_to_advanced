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
