// //objetos

// //* declaração:

// //? direta:

// const objeto1 = {
//     nome:"Caio",
//     sobrenome: "Duarte",
//     falar(){
//         console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`)
//     }
// };

// //? por construtor:

// const objeto2 = new Object();
// objeto2.nome = "Anibal";
// objeto2.sobrenome = "Moreno";
// objeto2.falar = ()=>{console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`)};

// // * chamar:

// // ? por acesso de pontos:
// console.log(objeto1.nome); //Caio


// // ? por colchetes:
// delete objeto2["nome"];
// console.log(objeto2); // { sobrenome: 'Moreno' }

//* com funções:

// ? função factory:
function pessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set SetSobrenome(sobrenome){
            this.sobrenome;
        },
    }
}

// ? função construtora:
function Pessoa(nome,sobrenome){ //funções construtoras levam nomes que iniciam com  maiuscula. 
    let cpf = `123.456.789-04`; //atributo privado 
    this.getCPF = cpf;
    this.setCPF =  function (NovoCpf){
        cpf = NovoCpf
    };
    this.nome = nome;
    this.sobrenome= sobrenome;
    this.nomeCompleto = function (){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = pessoa("José", "Barroso");
const p2 = new Pessoa("Ricardo","Marques");
p2.setCPF('986.091.231-00');
console.log(p2.getCPF);

/*
imprime: 
    Pessoa {
        getCPF: '123.456.789-04',
        nome: 'Mayara',
        sobrenome: 'Marques',
        nomeCompleto: [Function (anonymous)]
    }
*/

