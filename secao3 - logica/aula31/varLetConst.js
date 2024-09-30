
//let consegue ser redeclarada dentro de blocos pra ser utilizada como uma nova variavel dentro daquele bloco:
let nome = 'luiz'
if (nome){
    let nome='ruim';
    console.log(nome)
}
console.log(nome)
//imprime: ruim luiz


//var consegue ser redeclarada dentro de functions pra ser utilizada como uma nova variável
var sobrenome = 'miranda';
function pessoa () {
    sobrenome = 'souza'
    console.log(sobrenome)
}
pessoa()
console.log(sobrenome)