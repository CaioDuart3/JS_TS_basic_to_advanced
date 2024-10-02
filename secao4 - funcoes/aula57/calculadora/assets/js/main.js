//calculadora feita usando factory function:

function calculadora(){
    
    return {
        display: document.querySelector('.display'),

        iniciar(){
            this.calcular()
        },   

        mostrarResultado(){
            try{
                if(this.display.value && this.display.value.search(/[a-zA-Z]/) === -1){
                    this.display.value = eval(this.display.value)
                    return
                }
                alert('sua expressão deve conter apenas números.');
                this.display.value = '';
            }
            catch{
                alert('cálculo inválido, digite sua expressão novamente.')
                this.display.value = '';
            }
        },

        calcular(){
            document.addEventListener('click', (e)=>{
                elemento = e.target
                if(elemento.classList.contains('btn-num')){
                    this.display.value += elemento.innerText;
                    this.display.focus();
                }
                if(elemento.classList.contains('btn-clear')){
                    this.display.value = '';
                }
                if(elemento.classList.contains('btn-back')){
                    this.display.value = this.display.value.slice(0,-1);
                }
                if(elemento.classList.contains('btn-eq')){
                    this.mostrarResultado()
                }
            });
            this.display.addEventListener('keyup', (e)=>{
                if(e.key === 'Enter'){
                    this.mostrarResultado()
                }
            })
        },

    }
}
const calcula = calculadora();
calcula.iniciar();