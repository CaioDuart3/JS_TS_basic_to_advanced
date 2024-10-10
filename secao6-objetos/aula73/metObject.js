// * métodos úteis para utilizar com objetos.

const produto = { nome: 'produto', qtd:200, mercado: 'walmart'};

// ? copiar TODO objeto com assign:

const arma = Object.assign({}, produto, {bala: '9mm'});
arma.nome ='glock'; //{ nome: 'glock', qtd: 200, mercado: 'walmart', bala: '9mm' }
console.log(arma)

// ? copiar TODO objeto com spread:

//              copiando     substituindo      nova chave
const caneca = {...produto,    qtd: 13      ,preco: 12.00};

//substituindo dps de declarar
caneca.nome = 'caneca'
//console.log(caneca); //{nome: 'caneca', mercado: 'walmart', qtd: 13, preco: 12}

// ? copiar ALGUMAS chaves:

const bicicleta = { nome: produto.nome, mercado: produto.mercado};
bicicleta.nome = 'cross-bmx';
//console.log(bicicleta);

// ? retornar vetor de chaves:

//console.log(Object.keys(bicicleta)); //[ 'nome' , 'mercado' ]

//? retornar vetor de valores:

//console.log(Object.values(produto));

// ? tornar 100% imutavel alguma chave/objeto.

Object.freeze(produto);
produto.nome='trocar nome'; // ! não troca porque está congelado
//console.log(produto) // {nome: 'produto', mercado: 'walmart', qtd: 13, preco: 12}

// ? retorna um dicionario com as propriedades de uma chave:
console.log(Object.getOwnPropertyDescriptor(produto, 'mercado'));

// ? retorna um vetor do objeto, meio que "transforma-o" em vetor:

console.log(Object.entries(caneca));
/*
[
    [ 'nome', 'caneca' ],
    [ 'qtd', 13 ],
    [ 'mercado', 'walmart' ],
    [ 'preco', 12 ]
]
*/





