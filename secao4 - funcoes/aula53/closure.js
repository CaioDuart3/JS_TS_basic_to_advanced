//closure é um função que lembra quando e onde foi criada sabendo se distinguir de outras versões dela criada, pois possui escopo de bloco local(lexico):

const contador = ()=>{
    let count = 0;
    return () => count++;
};
let contador1 = contador();
console.log(contador1()) //0
console.log(contador1()) //1

let contador2 = contador();
console.log(contador2()) //0

//apesar de tereem as mesmas funções elas são diferentes.

//uma abordagem contrária a closure seria esta, (onde o escopo não mais local/bloco(lexico, mas sim em parte global)):


// let count = 0;
// const contador = ()=>{
//     return () => count++;
// };
// let contador1 = contador();
// console.log(contador1()) //0
// console.log(contador1()) //1

// let contador2 = contador();
// console.log(contador2()) //0



