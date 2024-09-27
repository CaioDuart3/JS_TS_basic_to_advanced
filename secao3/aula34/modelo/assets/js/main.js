const elementos = [
    {tag:"p" , texto: "esse texto está em p"},
    {tag: "div", texto: "esse texto está em div"},
    {tag: "footer", texto: "esse texto está em footer"},
    {tag: "section", texto: "esse texto está em section"},
];

const formatarPagina = () =>{
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    container.appendChild(div)
    for(let i = 0; i < elementos.length; i++) {
        
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag);
        tagCriada.innerText = texto;
        div.appendChild(tagCriada);
    }
}
formatarPagina()