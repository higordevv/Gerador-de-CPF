
import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const botao = document.querySelector('button')
    botao.addEventListener('click',() =>{
        const gera = new GeraCPF();
        const resultado = document.querySelector('.Resultado')
        const cpfGerado = document.querySelector('p');
        cpfGerado.innerHTML = gera.geraNovoCpf();
        resultado.style.background = '#77dd77'


    })

})();

