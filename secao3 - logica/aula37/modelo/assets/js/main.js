const estilizarParagrafos = () =>{
    const paragrafos = document.querySelector('.paragrafos');
    const ps = paragrafos.querySelectorAll('p'); //recbe uma nodeList de tods as tags p

    const estiloBody = getComputedStyle(document.body); //pega a estilizaçao computada da body
    for (let textos of ps){
        textos.style.backgroundColor = estiloBody.backgroundColor;
        textos.style.color = 'white';
    }
}
estilizarParagrafos()