const altura = 1.80;
const peso = 78;
function CalculadoraIMC(peso, altura){
    imc = peso/ altura**2;
    return imc;
}
console.log(CalculadoraIMC(peso, altura));