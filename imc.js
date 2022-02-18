//1st: Declarar as constantes, ficando apenas a constante referente ao button como constante global.
const calcular = document.getElementById('calcular');


//3rd: Criar uma função sem parâmetro.
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura));

        resultado.textContent = valorIMC;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }

}

//2ne: add.EventListener. Obejtivo: fazer com que o programa execute a função criada (imc) através do clique.
calcular.addEventListener('click', imc);