/* 
-função geradora trata-se de um função que é se torna nova a cada vez que é chamada.
-elas são declaradas com *
-é semelhante a uma função recursiva, só que com ela deve ser chamada manualmente,
-é como se ela se pausasse e você tem que despausar chamando-a.
-para recermos o valor a cada 'iteração' utilizamos yield
-cuidado ao ussar return, ele mata a função geradora.
-next() faz o despause
-value retorna a chave com o valor de yield
*/

//?exemplo simples:

//usando função classica
function * geradora1(){
    yield 1;
    yield 2;
    yield 3;
}
const g1 = geradora1()

//console.log(g1); //imprime: Object [Generator] {}
//console.log(g1.next()); //imprime: { value: 1, done: false }
//o done serve para saber se um função geradora ja atingiu 100% de sua funcionalidade.

// console.log(g1.next().value); //imprime: 1
// console.log(g1.next().value); //imprime: 2
// console.log(g1.next().value); //imprime: 3
// console.log(g1.next().value); //imprime: undefined , pois extrapola o 100% da funcionalidade da função.


// ? exemplo prático com limite definido: 

//usando função anonima.
const fibonacci = function * (){
    yield i = 2;
    while(true){ //a condição neste caso é infinita, porém pode ser alterada de programa para programa.
        yield i+=i;
    }
}
const fibo = fibonacci();
// console.log(fibo.next().value); //imprime: 1
// console.log(fibo.next().value); //imprime: 2
// console.log(fibo.next().value); //imprime: 4
// console.log(fibo.next().value); //imprime: 8
// console.log(fibo.next().value); //imprime: 16
// console.log(fibo.next().value); //imprime: 32




//? exemplo com return:

function * geradorReturn(){
    yield * geradora1(); //utlizar * para chamar uma geradora no yield ja retorna ela como um fibonacci().next()
    yield function (){
        console.log("ola mundo");
    };
    return 'vim do return';
    yield 'não aparece, pois o return matou a daqui em diante.'
}
const g2 = geradorReturn()
console.log(g2.next().value); //na primeiraa iteração de g2 ele rodará g1 até terminar. imprime: 1
console.log(g2.next().value); // imprime: 2
console.log(g2.next().value); // imprime: 3

const imprimir = g2.next().value; // imprime: "olá mundo", como é uma função anonima utilizaremos ela como função mesmo.
imprimir();

console.log(g2.next().value); // imprime: "vim do return"
console.log(g2.next().value); // imprime: undefined pois o return matou a geradora, e ela encerrou seu ciclo.
