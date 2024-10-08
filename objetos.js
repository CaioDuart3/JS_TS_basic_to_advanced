//objetos em JS são feitos por chaves e seu endereçamentos são feitos por key

//sua estrutura é semelhante ao dicionario do python.

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

//defineProperty/defineProperties

//Object.defineProperty(object, nome, configuração)
//Object.defineProperties(object, objetos configurados)

function Produto(nome, qtd, preco, estoque){
    // * deviceProperties()

    this.nome = nome; //público

    Object.defineProperties(this, {
        qtd:{
            enumerable: true, 
            value: qtd,
            writable: false, 
            configurable: false 
        },
        preco:{
            enumerable: true, 
            value: preco,
            writable: false, 
            configurable: false
        },
    })



    // * deviceProperty()

    //reescrevendo 'this.estoque = estoque' de forma onde podemos definir as propriedas:
    Object.defineProperty(this, 'estoque',{
        //? visibilidade
        enumerable: true, //chave é numeravel? sim, então ela pode aparecer
        value: estoque, //valor da chave
        //? mutabilidade
        writable: false, //não permite que o valor pode ser editado.
        configurable: false //permite reconfigurar/redefinir as propriedadess de um objeto 
        //configurable em true permite a deleção de dados, como falso não.
    })

    // Object.defineProperty(this, 'estoque',{
    //     //? visibilidade
    //     enumerable: true, 
    //     value: estoque,
    //     //? mutabilidade
    //     writable: true,  //permite que o valor seja editado
    //     configurable: false //não permite ser configurado de novo.
    // })
}
const produto1 = new Produto('Banana',5, 10.00,4);
delete produto1.estoque;
console.log(produto1);

//getter e setters na função construtora:

function Produto(nome,preco, estoque){
    this.nome = nome; //público
    this.preco =preco;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(estoqueNovo){
            if(typeof estoqueNovo === 'number'){
                estoque = estoqueNovo;
            }
        }
    })
}
const produto1 = new Produto('Banana', 10.00,4);
console.log(produto1);
//console.log(produto1.get); //! dá erro
console.log(produto1.estoque); //imprime: 4 pega o atributo estoque que está privado por meio de get
//isso funciona pois existe um atributo estoque dentro do programa que é um get, mas qnd vc chama ele(o get) ele entrega o seu valor.

produto1.estoque =10;
console.log(produto1.estoque); //imprime: 10;

