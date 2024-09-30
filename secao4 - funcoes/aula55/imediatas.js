// * IIFE (Immediately Invoked Function Expression)

//são expressão que são autoinvocadas, ela é criada e ja se autochama, exemplo:

// (function(){
//     console.log('olá mundo.');
// })();

//declarações como essas são essencias para evitar conflitos em escopos globais, para evitar problemas com outras biblioteca, tailwind, bootstrap e tals.
//podem ser utilizadas como função main

(function(a=0,b=0,c=0){
    const delta = () => {
    bhaskara((b**2) - 4*a*c);
    };
    
    const bhaskara = (delta) => {
        if(delta < 0){
            console.log('raizes complexas.')
            return;
        }
        const x1 = (-1*b+(delta)**0.5)/2*a;
        const x2 = (-1*b-(delta)**0.5)/2*a;
        console.log(`x1:${x1} x2:${x2}`)
    };
    delta();
})(2,-8,16);
