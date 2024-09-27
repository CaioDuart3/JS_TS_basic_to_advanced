//valores passados por cópia e por referência

//valores primitivos - por cópia - String, Number, boolean, undefined, null, bigint, symbol
//valores referência - array, object, function

//* vetor

//por referência
let a = [1,2,3]
let b =a 

//por cópia
let c = [3,4,6]
let d = [...c]

//* object

//por referência
let x ={
    nome:'José',
    sobrenome:'Silva',
}
let y = x

//por cópia
let z ={
    nome:'Rodrigo',
    sobrenome:'Souza'
}
let w = {...z}
w.nome = 'Rick'
w.sobrenome = 'Nunes'
console.log(z,w)