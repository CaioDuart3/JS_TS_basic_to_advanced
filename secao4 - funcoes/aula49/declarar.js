//declarações de funções:

//tipos de funções:
//função classsica: 
// function soma(a,b){
//     return a+b;
// }
// //funções anonimas, funções que não precisam ser nomeadas, mas precisar estar contids em algo:
// const subtrair = function(a,b){
//     return a-b;
// }
// //arrow function, funções que são armazenadas e mais rapido de escrever:
// const raiz = (num) => num**0.5;

// console.log(soma(5,5), subtrair(10,2), raiz(36));

//formas de declarar funções dentro de um objeto;

const pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Duarte',
    falar(){
        console.log(`olá, meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
pessoa1.falar();
//--------------------------------------------------------------------------
const pessoa2 = {
    nome: 'Maira',
    sobrenome: 'Silva',
    falar: function(){
        console.log(`olá, meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
pessoa2.falar();

