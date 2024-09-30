
//é unma boa prática criar funções para tratar o js do seu codigo, se não for dessa forma poder dar conflito com outras bibliotecas e tals.
const escopoDoCodigo = () => {
    let formulario = document.querySelector('.formulario'); //recebe a tag form
    let resultado = document.querySelector('.resultado')
    let pessoas = [];

    //tag para aplicar evento.adicionar Evento (evento, função pra aplicar o evento)
    formulario.addEventListener('submit', (evento)=>{
        
        evento.preventDefault(); //adicioan evento de não recarregar a página
        
        let nome = formulario.querySelector('.nome'); //recebe a tag input
        let sobrenome = formulario.querySelector('.sobrenome');
        let peso = formulario.querySelector('.peso');
        let altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome:sobrenome.value,
            altura: altura.value,
            peso:peso.value,
        });
        console.log(pessoas)
        resultado.innerHTML+= `<p>nome: ${nome.value}</p>`
        resultado.innerHTML+= `<p>sobrenome: ${sobrenome.value}</p>`
        resultado.innerHTML+= `<p>peso: ${peso.value}</p>`
        resultado.innerHTML+= `<p>altura: ${altura.value}</p>`
    });
};
escopoDoCodigo()