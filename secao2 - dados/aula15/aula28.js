
//h1
let numero = Number(prompt())
let span = document.getElementById('numero')
span.innerHTML = numero


//p
let texto = document.getElementById('texto')
texto.innerHTML += `<p>A raiz quadrada é: ${numero**0.5} </p>`
texto.innerHTML += `<p>o ${numero} é inteiro? ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p>é Nan? ${Number.isNaN(numero)} <br>`
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>com duas casas: ${numero.toFixed(2)} </p>`
