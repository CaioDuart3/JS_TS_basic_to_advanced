// const dividir = (x,y)=> {
//     if (y===0) throw new Error('divisão por zero.');
//     console.log(x/y);
// } 
// try{
//     dividir(10,5);
// }
// catch(err){
//     console.log(`erro: ${err.message}`);
// }
// finally{
//     console.log('erro tratado.');
// }

const retornarHora =(data) => {
    if(data && !(data instanceof Date)){
        throw new Error('isto não é uma data');
    }
    if(!data) {
        data = new Date();
    };
    return (data.toLocaleTimeString('pt-BR',{
            hour12:false, 
            hour: '2-digit',
            minute: '2-digit',
            second:'2-digit',
        }
    ));
}

try {
    console.log(retornarHora(new Date('12-12-43')));

} catch (err){
    console.log(`erro: ${err.message}`)
}