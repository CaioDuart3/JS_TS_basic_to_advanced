// * função, as funções em js por padrão são hoisting, ou seja, tanto o node qnd o browser fazem com que funções declaradas no códigos tenha prioridade maxima dentro do codigo, permitindo assim chamar funções antes delas serem criadas no código.
// função - não vem de objeto
// método - vem de objeto

// * tipos de funções:

// ? função classsica: 
function soma(a,b){
    return a+b;
}
/*
* utlidades da função clássica:
-consegue ser função construtora
-consegue ser função fabrica.
-consegue utilizar o arguments
-consegue ser função fechamento.
! NÃO consegue lembrar que o this é o do primeiro objeto chamado.
*/

// ? funções anonimas, funções que não precisam ser nomeadas, mas precisar estar contids em algo:
const subtrair = function(a,b){
    return a-b;
}
/*
* utlidades da função anônima:
-consegue ser função fabrica.
-consegue ser autoevocada 
-consegue utilizar o arguments
-consegue ser função fechamento.
-consegue ser armazenada em um variavel
-dependendo do contexto não precisa ser nomeada, apenas chamada e utilizada.
! NÃO consegue ser função construtora.
! NÃO consegue lembrar que o this é o do primeiro objeto chamado.
*/
// ? arrow function, funções que são armazenadas e mais rapido de escrever:
const raiz = (num) => num**0.5;
/*
* utlidades da arrow functions:
-consegue ser função fabrica.
-consegue ser autoevocada 
-consegue ser função fechamento.
-consegue ser armazenada em um variavel
-dependendo do contexto não precisa ser nomeada, apenas chamada e utilizada.
-consegue lembrar que o this é o do primeiro objeto chamado.
- quanto tem só uma linha NÃO precisa dar return e nem usar chaves.
! NÃO consegue ser função construtora, consegue apenas ser utilizada em metodos internos da construtora.
! NÃO consegue utilizar o arguments
*/

// * arguments - funciona na função classica e anônima somente.
//exemplo:
function numeros() {
    console.log(arguments); //arguments é um objeto.
}
numeros(1,2,3,4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

//* dá pra utilizar rest, quando você quer ultrapassar os parametros ja pre definidos também:

function imprimir(a, b, ...resto){
    console.log(a,b,resto); //resto vem como um vetor recebendo os valores que vem alem de a e b;
}
imprimir(1,2,3,4,5,6);

// * função fechamento(closure) - pois ela fecha mais de uma vez e você consegue utilizad um função como se fosse várias.

//com arrow functions:
const criarMultiplicador = (multiplicador) => (num)=> num * multiplicador;

const quadriplica = criarMultiplicador(4) //cria um quadriplicador;
let resultado = quadriplica(3);
console.log(resultado);

//functions classicas
function raiz(indice){
    //function anonima
    return function(radical){return radical**(1/indice)}
};

const indice3 = raiz(3)  // elevar um numero a 1/3,
resultado = indice3(8); //2*2*2=8;
console.log(resultado);

// além do mais a função closure é uma função que lembra quando e onde foi criada sabendo se distinguir de outras versões dela criada, pois possui escopo de bloco local(lexico):

const contador = ()=>{
    let count = 0;
    return () => count++;
};
let contador1 = contador();
console.log(contador1()) //0
console.log(contador1()) //1

let contador2 = contador();
console.log(contador2()) //0

// * função callback
// ? o resultado é imprevisivel, não dá pra saber a ordem de impressão e queremos um ordem definida para ser impressa.
// ? por isso usamos callback

function rand(min=1000, max=4000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1 (callback){
    setTimeout(()=>{
        console.log('f1')
        if(callback){callback();}
    }, rand());
}
function f2(callback){
    setTimeout(()=>{
        console.log('f2')
        if(callback){callback();}
    }, rand());
}
function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if(callback){callback();}
    }, rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('fim.');
        })
    })
})
// ? agora o resultado é previsivel e esta definido para ser f1,f2,f3, fim.

// * IIFE (Immediately Invoked Function Expression)

//são expressão que são autoinvocadas, ela é criada e ja se autochama, exemplo:

// (function(){
//     console.log('olá mundo.');
// })();

//declarações como essas são essencias para evitar conflitos em escopos globais, para evitar problemas com outras biblioteca, tailwind, bootstrap e tals.
//podem ser utilizadas como função main

(function(a=0,b=0,c=0){
    const delta = () => {
    bhaskara((b**2) - 4*a*c);
    };
    
    const bhaskara = (delta) => {
        if(delta < 0){
            console.log('raizes complexas.')
            return;
        }
        const x1 = (-1*b+(delta)**0.5)/2*a;
        const x2 = (-1*b-(delta)**0.5)/2*a;
        console.log(`x1:${x1} x2:${x2}`)
    };
    delta();
})(2,-8,16);

// * métodos getters e setters:
//funções que criam objetos são chamada de factorys.
(function(){
    const criaPessoa = (nome,sobrenome,peso,altura) =>{
        const pessoa={
            nome,
            sobrenome,
            peso,
            altura,
            get imc(){
                return `imc: ${(this.peso/(this.altura**2)).toFixed(2)}`;
            },
            set novoPeso(novoPeso){
                this.peso = novoPeso;
            },
            set novaAltura(novoAltura){
                this.altura = novoAltura;
            }
        };
        return pessoa
    }
    const pessoa1 = criaPessoa('Caio','Duarte', 80, 1.80);
    console.log(pessoa1);
    console.log(pessoa1.imc); //métodos getters são chamados como atributos.

    pessoa1.peso = 70; //métodos setters são chamados como atributos

    console.log(pessoa1);
    console.log(pessoa1.imc);
})()

// * funções contrutoras.
// tem um objetivo bastante similar, as factories, q é construir objetos.
//seus objetos DEVEM receber o new, um exemplo disso é o objeto date, q é nativo do js.
//exemplo de objeto criado a partir de uma construtora:

//arrow functions e funções anonimas não conseguem cria-las.
function Pessoa(nome, sobrenome){
    //declarar atributos/metodos sem o this torna-os privados:
    const cpf = '123.456.789-01';
    //para pegar dado privado:
    this.getCpf = cpf;
    //o uso de this faz deles atributos/metodos publicos:
    this.nome = nome;
    this.sobrenome =sobrenome;
    this.sobre = () => {return `meu nome é ${this.nome} ${this.sobrenome}`};
}

const p1 = new Pessoa("Caio", "Duarte"); //funções construtora são marcadas principalmente pelo uso de new
//new cria objetos.
const p2 = new Pessoa("Mayara", "Silva");
console.log(p1.sobre());

//* função recursiva:
//são funções que se chamam dentro de seu proprio escopo, utilizadas para repetir determinada ação, muito semelhante ao for, while.

function simulandoFor(init, limit , increment){
    if(init < limit){
        console.log(init);
        init+= increment;
        simulandoFor(init,limit,increment);
    }
    return;
}
simulandoFor(0 ,10, 1, 2); //immprime de 0 a 9 

// * função geradora:



