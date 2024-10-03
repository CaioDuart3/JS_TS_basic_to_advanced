// * junção do método filter, map, reduce:

const nums = [87,12,54,98, 23,56];
let somaDoDobroDosPares = nums.filter(valor=>valor%2===0).map(valor=>valor*2).reduce((ac,valor)=>ac+valor);
console.log(somaDoDobroDosPares); 
//[ 12, 54, 98, 56 ] pares
//[ 24, 108, 196, 112 ] dobro
//440 soma
