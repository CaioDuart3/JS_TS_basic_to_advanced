// * prototypes

//prototipos é modelo de objeto que é pai de todos os objetos criados, ele é como se fosse umo modelo
//padrão previsamente ja criado pelo JS.


//o intuito do prototype é generalizar algum método que tem em comum nos nos objetos,
//com o intuito de não precisar ser declarado em toda criação.


//prototype === __proto__  -> true

// ? exemplo com construtora:
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falarNome = function(){
    return `meu nome é ${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa('Caio', 'Duarte');
const p2 = new Pessoa('Ronaldo', 'Fenomeno');







