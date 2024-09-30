//callback, par resolver problemas aonde vc prioriza o tempo das funções para que sejam chamada de forma sequencias
//foi criada a tecnica da callback.

// ! exemplo de problema:

// function rand(min=1000, max=4000){
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }

// function f1 (){
//     setTimeout(()=>{console.log('f1')}, rand());
// }
// function f2(){
//     setTimeout(()=>{console.log('f2')}, rand());
// }
// function f3(){
//     setTimeout(()=>{console.log('f3')}, rand());
// }
// f1();
// f2();
// f3();
// console.log('fim.');

// ? o resultado é imprevisivel, não dá pra saber a ordem de impressão e queremos um ordem definida para ser impressa.
// ? por isso usamos callback

function rand(min=1000, max=4000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1 (callback){
    setTimeout(()=>{
        console.log('f1')
        if(callback){callback();}
    }, rand());
}
function f2(callback){
    setTimeout(()=>{
        console.log('f2')
        if(callback){callback();}
    }, rand());
}
function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if(callback){callback();}
    }, rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('fim.');
        })
    })
})
// ? agora o resultado é previsivel e esta definido para ser f1,f2,f3, fim.