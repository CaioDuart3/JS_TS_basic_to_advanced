// * for of, só funciona em arrays, não funciona em objetos.
const nomes = ['Caio', 'Isaque', 'Ludmila','Mayara','Rafael'];
for (valores of nomes){
    console.log(valores);
}

nomes.forEach(
    function(indice, valor){
        console.log(indice,valor)
    }
)