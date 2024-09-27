
// ? incremento

// ! erro, pois const não muda
// const num = 1
// console.log(num++) // imprime: 1   ,ele só adiciona dps de imprimir.
// console.log(num) //imprime: 2


// ! má prática
// let num1 = 1;
// console.log(`não incrementado: ${num1++}`) // imprime: 1   ,ele só adiciona dps de imprimir.
// console.log(`incrementado: ${num1}`) //imprime: 2

// * boa prática
let num1 = 3;
console.log(`já incrementado: ${++num1}`); //imprime:4    ,pois ele incrementa depois imprime.


//

let num2 =1;
console.log(num2)