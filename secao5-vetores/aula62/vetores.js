//arrays
//são passados por referencia

//exemplo:

let vet1 = [1,2,3,4]
const vet2= vet1

//para passar por cópia utilizamos o operador spread

const vet3 = [...vet1];

//atribuição via desestruturação:

const [ ,dois, ...tresEquatro] = vet1 

console.log(dois, tresEquatro); // 2, [3,4]

//métodos para manipulação de vetor:

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

