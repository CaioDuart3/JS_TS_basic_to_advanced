//objetos

//* declaração:

//? direta:

const objeto1 = {
    nome:"Caio",
    sobrenome: "Duarte",
    falar(){
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`)
    }
};

//? por construtor:

const objeto2 = new Object();
objeto2.nome = "Anibal";
objeto2.sobrenome = "Moreno";
objeto2.falar = ()=>{console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`)};

// * chamar:

// ? por acesso de pontos:
//console.log(objeto1.nome); //Caio


// ? por colchetes:
delete objeto2["nome"];
//console.log(objeto2); // { sobrenome: 'Moreno' }

//* com funções:

// ? função factory:
function pessoa (nome, sobrenome){
    return {
        nome, //atributo publico por padrão
        sobrenome,
        get nomeCompleto(){ //método para pegar dados
            return `${this.nome} ${this.sobrenome}`;
        },
        set SetSobrenome(sobrenome){ //método para inserir dados novos.
            this.sobrenome = sobrenome;
        },
    }
}

// ? função construtora:
function Pessoa(nome,sobrenome){ //funções construtoras levam nomes que iniciam com  maiuscula. 

    let cpf = `123.456.789-04`; //atributo privado 

    this.getCPF = cpf; //get caseiro

    this.nome = nome; //atributo publico

    this.sobrenome= sobrenome;

    this.nomeCompleto = function (){
        return `${this.nome} ${this.sobrenome}`;
    };
    Object.freeze(this); // congela todo o objeto.
    //freeze tem a habilidade de deixar imutavel qualquer dado, coisa que de todo const n é.
}

const p2 = new Pessoa('Neymar', 'Junior') //objeto que vem de construtora recebe o new pra cada novo objeto criado.
console.log(p2);
p2.nome = 'Cristiano';
p2.sobrenome ='Ronaldo';
console.log(p2.nomeCompleto())
