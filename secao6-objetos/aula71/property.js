//defineProperty/defineProperties

//Object.defineProperty(object, nome, configuração)
//Object.defineProperties(object, objetos configurados)

function Produto(nome, qtd, preco, estoque){
    // * deviceProperties()

    this.nome = nome; //público

    Object.defineProperties(this, {
        qtd:{
            enumerable: true, 
            value: qtd,
            writable: false, 
            configurable: false 
        },
        preco:{
            enumerable: true, 
            value: preco,
            writable: false, 
            configurable: false
        },
    })



    // * deviceProperty()

    //reescrevendo 'this.estoque = estoque' de forma onde podemos definir as propriedas:
    Object.defineProperty(this, 'estoque',{
        //? visibilidade
        enumerable: true, //chave é numeravel? sim, então ela pode aparecer
        value: estoque, //valor da chave
        //? mutabilidade
        writable: false, //não permite que o valor pode ser editado.
        configurable: false //permite reconfigurar/redefinir as propriedadess de um objeto 
        //configurable em true permite a deleção de dados, como falso não.
    })

    // Object.defineProperty(this, 'estoque',{
    //     //? visibilidade
    //     enumerable: true, 
    //     value: estoque,
    //     //? mutabilidade
    //     writable: true,  //permite que o valor seja editado
    //     configurable: false //não permite ser configurado de novo.
    // })
}
const produto1 = new Produto('Banana',5, 10.00,4);
delete produto1.estoque;
console.log(produto1);