
// * desestruturação de lista
let vetor = [1,2,3];
// let [num1, , num3] = vetor;
// console.log(num1,num3);


// * desestruturação de matriz por etapa.
            //  0       1        2
            // 0 1 2   0 1 2   0 1 2
let matriz = [[4,2,5],[2,8,9],[5,1,7]];
let [    ,lista2,lista3] = matriz 
let [  ,   , nove]=lista2;

console.log(nove); //imprime o 9
console.log(lista2,lista3); //imprime a lista do endereço 2 da matriz


// * desestruturação de matriz direta.
let [ ,[,oito,],] = matriz
console.log(oito) //imprime o 8 (endereço 1 da lista do endereço 1 da matriz.)

// * operador rest , para receber o resto

                // [1,2,3]
let [um, ...nums] = vetor 
console.log(nums) //imprime [2,3]

// * operador spread, para atribuir espalhando 

    let novo_vetor = [7, ...vetor] //recebe [7,1,2,3]
console.log(novo_vetor)

