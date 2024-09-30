//vetor

// ! má prática de programação (vários tipos de elementos):
//const vetor_errado = [1,'olá mundo', true, null]

// * boa prática de programação (único tipo de elemento):
const vetor = [2,3,5,4,2]


//pegar tamanho de vetor:
//console.log(vetor.length)

//trocando elementos, note que isso funciona até mesmo com const, pois todo objeto é mutavel,porém existem método pra utilzar qnd const
// vetor[0] = 1

//adicionando elementos no final do vetor
// vetor.push(12)

//adicionando elementos no inicio do vetor
// vetor.unshift(15)

//remover último elemento do vetor
//const removido = vetor.pop()

//remove o primeiro elemento do vetor
// vetor.shift()

//remove o conteúdo do elemento:
// delete vetor[2] //o elemento fica undefined

//pegar elementos de um intervalo:
//let intervalo = vetor.slice(0,3)

//verificar se é vetor
//console.log(vetor instanceof Array) //retorna boolean

console.log(vetor)