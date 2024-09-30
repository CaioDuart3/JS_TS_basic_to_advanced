(function(){
    const criaPessoa = (nome,sobrenome,peso,altura) =>{
        const pessoa={
            nome,
            sobrenome,
            peso,
            altura,
            get imc(){
                return `imc: ${(this.peso/(this.altura**2)).toFixed(2)}`;
            },
            set novoPeso(novoPeso){
                this.peso = novoPeso;
            },
            set novaAltura(novoAltura){
                this.altura = novoAltura;
            }
        };
        return pessoa
    }
    const pessoa1 = criaPessoa('Caio','Duarte', 80, 1.80);
    console.log(pessoa1);
    console.log(pessoa1.imc); //métodos getters são chamados como atributos.

    pessoa1.peso = 70; //métodos setters são chamados como atributos

    console.log(pessoa1);
    console.log(pessoa1.imc);
})()