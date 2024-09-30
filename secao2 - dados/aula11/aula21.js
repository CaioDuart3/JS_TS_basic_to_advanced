
//função não vem de objeto
//método vem de objeto
alert('preste atenção aqui'); //serve para imprimir coisas no navegador
let escolha = confirm('deseja realizar operações simples?')
if (escolha){
    let num1 = prompt('digite um numero: ');
    let num2 = prompt('digite outro numero: ');
    num1 = Number(num1)
    num2 = Number(num2)

    let sinal = prompt('digite o sinal( - , + , * , /) da operação entre numero1 e numero2:');
    if (sinal == '+'){
        let resultado = num1 + num2;
        alert(`${num1} + ${num2} = ${resultado}`)
    } else if (sinal == '-'){
        let resultado = num1 - num2;
        alert(`${num1} - ${num2} = ${resultado}`)
    } else if (sinal == '*'){
        let resultado = num1 * num2;
        alert(`${num1} * ${num2} = ${resultado}`)
    } else if (sinal == '/'){
        let resultado = num1 / num2;
        alert(`${num1} / ${num2} = ${resultado}`)
    } else {
        alert('operação inválida')
    }
} 

