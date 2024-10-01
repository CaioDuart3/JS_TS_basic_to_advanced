const lista_main = () => {
    const inputTexto = document.querySelector('.inputTexto');
    const btnTarefas = document.querySelector('.btnTarefas');
    const container = document.querySelector('.container');
    const btn = document.createElement('button');
    
    const adicionarTarefas = (tarefa) => {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        const label = document.createElement('p');
        checkboxTarefa(li);
        apagarTarefas(li);
        label.innerText += tarefa;
        li.appendChild(label);
        ul.appendChild(li);
        li.setAttribute('class', 'item-tarefa');
        salvarTarefas();
    };

    const limparInput = () => {
        inputTexto.value = '';
        inputTexto.focus();
    };

    const apagarTarefas= (li)=>{
        if(li){
        btn.innerText = 'Apagar'
        btn.setAttribute('class','apagar');
        container.appendChild(btn);
        }
    }

    const checkboxTarefa = (li) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('class','checkbox-tarefa');
        li.appendChild(checkbox);
    }

    const salvarTarefas = () => {
        let tarefas = document.querySelectorAll('li');
        const tarefasSalvas = [];
        for( let tarefa of tarefas ){
            tarefasSalvas.push(tarefa.innerText); //colocar pra salvar apenas o texto
        }
        const tarefasJSON = JSON.stringify(tarefasSalvas); //transformar array em string no json.

        localStorage.setItem('tarefas_salvas', tarefasJSON); //salvando em localStorage do navegador um json.
    };
    const adicionarTarefasSalvas = () =>{
        const tarefasJSON = localStorage.getItem('tarefas_salvas'); //pegar a string do json em localStorage
        const listaDeTarefas = JSON.parse(tarefasJSON); //transforma de string para array de volta.
        for (let tarefa of listaDeTarefas){
            adicionarTarefas(tarefa);
        }
    }
    const listarTarefas = () => {
        btnTarefas.addEventListener('click', () =>{
            if(!inputTexto.value){return;}
            adicionarTarefas(inputTexto.value);
            limparInput();
        })

        inputTexto.addEventListener('keypress', (e)=>{
            if(e.key === "Enter"){
                if(!inputTexto.value){return;}
                adicionarTarefas(inputTexto.value);
                limparInput();
            }
        })
        
        document.addEventListener('click', (event)=>{
            const elemento = event.target;
            const checkbox = document.querySelectorAll('input[type="checkbox"]');
            let count=0;
            if(elemento.classList.contains('apagar')){
                for(let i in checkbox){
                    if (checkbox[i].checked){
                        count++;
                        checkbox[i].parentElement.remove();
                    }
                    if(checkbox.length === count){
                        btn.remove();
                    }
                }
                salvarTarefas();
            }
        })
        adicionarTarefasSalvas();
    };
    listarTarefas();
};
lista_main();