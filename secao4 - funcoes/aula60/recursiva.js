
/*
funções recursiva são funções que se repetem várias vezes 
até atingir determinado objetivo, semelhante ao for/while

um erro que pode ser apresentavel nessas funções é o erro de call stack,
que é mais um erro gerado pelo motor v8 para te avisar que sua função pode estar errada.
*/
// function recursiva(max){
//     console.log(max);
//     if(max < 10) {
//         max++
//         recursiva(max);
//     };
//     return
// }
// recursiva(0);


function simulandoFor(init, limit , increment){
    if(init < limit){
        console.log(init);
        init+= increment;
        simulandoFor(init,limit,increment);
    }
    return;
}
simulandoFor(0 ,10, 1, 2); //immprime de 0 a 9 
