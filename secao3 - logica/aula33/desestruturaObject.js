// * atribuição via desestruturação

const carro = {
    nome: 'Gol',
    ano: 2018,
    marcaCarro: 'Volkswagen',
    motor:{
        marcaMotor: 'ABB eletrics',
        nome:'V8',
        ano:2012,
    }
}

//* desestruturando em variaveis
const {
    nome: carroGol, //atribuição renomeando
    ano = 2020, //atribuição mudando valor de chave (funciona somente se a variavel não existir, tornando se um valor default) 
    marcaCarro, //atribuição normal
    cor ='Preto', //atribuição adicionando nova variavel
    motor, //atribuição de objeto inteiro
    } = carro
console.log(carroGol,ano, marcaCarro,cor, motor)


// *utilizando rest
const {nome :nomeMotor, ...resto} = motor
console.log(nomeMotor, resto)


// *atribuindo usando spread
const NovoCarro = { tipo: '4x4', ...carro}
console.log(NovoCarro)

