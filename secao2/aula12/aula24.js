//sobre strings

//caracter de escape '\' - faz aparecer caracteres como o " ' `
//caracter para desescape '\\' - faz aparecer caracter como \
//console.log('\'ola\' \\mundo')

//Strings são arrays

//           0123456789
let  nome = 'Caio Duart';
// console.log(nome[1]) //imprime: a
// console.log(nome[12]) //imprime: undefined
// console.log(nome[-2]) //imprime: undefined

// console.log(nome.charAt(2)) //imprime: i
// console.log(nome.charAt(14)) //imprime: ' '
// console.log(nome.charAt(-1)) //imprime: ' '

// console.log(nome.indexOf('Du')) //imprime: 5
// console.log(nome.indexOf('ziutrwsfsd')) //imprime: -1 , pois não achou
// console.log(nome.indexOf('r', 3)) //imprime: 8, caçando a partir da index 3

// console.log(nome.lastIndexOf('r', 9)) //imprime: 8, caçando a partir da index 3

// console.log(nome.match(/[a-z]/g)) //expressões regulares, imprime um vetor com os caracteres minusculos
console.log(nome.search('Duart')) //busca o caracter, imprime: 5 
// console.log(nome.replace(/a/g, 'o')) //troca os caracteres, o g faz com que seja em todos os caracteres a

let buscar = 'Duart'
console.log(nome.slice(nome.search(buscar), buscar.length ))
console.log(nome.slice(-3))