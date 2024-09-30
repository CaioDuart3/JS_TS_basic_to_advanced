
const mostrarResultado = (texto) => {
    let resultado = document.querySelector('#resultado');
    let p = document.querySelector('.paragrafo');
    if (!p){
        p = document.createElement('p');
        p.classList.add('paragrafo')
        resultado.appendChild(p)
    }
    p.innerHTML = texto
}

const verificarNivel =(imc) => {
    let grau = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']
    if(imc >= 40){return grau[5]}
    if(imc >= 35){return grau[4]}
    if(imc >= 30){return grau[3]}
    if(imc >= 25){return grau[2]}
    if(imc >= 18.5){return grau[1]}
    if (imc < 18.5){return grau[0]}
}

const calcularIMC = () => { 
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', (event)=>{
        event.preventDefault();

        let altura = event.target.querySelector('#altura');
        let peso = event.target.querySelector('#peso');
        let imc = peso.value/(altura.value**2);
        
        if(Number.isFinite(imc)){
            resultado.style.background = "#00FFFF"
            mostrarResultado(` seu IMC é ${imc.toFixed(2)} (${verificarNivel(imc)})`);
        }
        else{
            resultado.style.background = "#ff6961"
            mostrarResultado(`Valores inválidos, preencha os campos corretamente.`);
        }
    }
    );
}
calcularIMC()

