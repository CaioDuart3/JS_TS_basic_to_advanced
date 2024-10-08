//getter e setters na função construtora:

function Produto(nome,preco, estoque){
    this.nome = nome; //público
    this.preco =preco;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(estoqueNovo){
            if(typeof estoqueNovo === 'number'){
                estoque = estoqueNovo;
            }
        }
    })
}
const produto1 = new Produto('Banana', 10.00,4);
console.log(produto1);
//console.log(produto1.get); //! dá erro
console.log(produto1.estoque); //imprime: 4 pega o atributo estoque que está privado por meio de get
//isso funciona pois existe um atributo estoque dentro do programa que é um get, mas qnd vc chama ele(o get) ele entrega o seu valor.

produto1.estoque =10;
console.log(produto1.estoque); //imprime: 10;

