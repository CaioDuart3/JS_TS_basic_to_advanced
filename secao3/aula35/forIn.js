
//* for in

//? exemplo com vetor:
const nomes = ['Caio', 'Isaque', 'Ludmila','Mayara','Rafael'];

for (let index in nomes){
    console.log(nomes[index])
}
//---------------------------------------------------------------------------------------------------
console.log()
//-----------------------------------------------------------------------------------------------

//? exemplo com objeto:
const pessoa = {
    nome: 'Caio',
    sobrenome:'Duarte',
    idade: 19,
}
for (let key in pessoa){
    console.log(pessoa[key])
}