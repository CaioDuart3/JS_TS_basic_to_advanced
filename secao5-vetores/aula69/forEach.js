//* forEach - método

const vet = [12,32,21];
//só funciona com vetores.
//método forEach não retorna nada, só faz iteração dentro do vetor com uma lógica.

//vet.forEach((valor,indice,array))

let total =0
vet.forEach(valor => total+=valor);
console.log(total);

let dobro = []
vet.forEach(valor => dobro.push(valor*2))
console.log(dobro);