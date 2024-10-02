//calculadora utilizando função construtorua:

function Calculadora(){
        this.display = document.querySelector('.display');

        this.iniciar = () =>{
            this.calcular();
        }; 

        this.mostrarResultado = () => {
            try{
                if(this.display.value && this.display.value.search(/[a-zA-Z]/) === -1){
                    this.display.value = eval(this.display.value);
                    return
                }
                alert('sua expressão deve conter apenas números.');
                this.limpaDisplay();
            }
            catch{
                alert('cálculo inválido, digite sua expressão novamente.')
                this.limpaDisplay();
            }
        };

        this.limpaDisplay = ()=>{
            this.display.value = '';
            this.display.focus();
        };  

        this.adicionaExpressao = (elemento) => {
            this.display.value += elemento;
            this.display.focus();
        };

        this.voltar = () => {
            this.display.value = this.display.value.slice(0,-1);
            this.display.focus();
        };

        this.calcular = () => {
            document.addEventListener('click', (e)=>{
                elemento = e.target;
                if(elemento.classList.contains('btn-num')){
                    this.adicionaExpressao(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.limpaDisplay();
                }
                if(elemento.classList.contains('btn-back')){
                    this.voltar();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.mostrarResultado();
                }
            });
            this.display.addEventListener('keyup', (e)=>{
                if(e.key === 'Enter'){
                    this.mostrarResultado()
                }
            })
        };
}
const calcula = new Calculadora();
calcula.iniciar();