//função construtora, arrow functions e funções anonimas não consegue aborda-la.
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
