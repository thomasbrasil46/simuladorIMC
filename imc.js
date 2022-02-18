//1st: Declarar as constantes, ficando apenas a constante referente ao button como constante global.
const calcular = document.getElementById('calcular');


//3rd: Criar uma função sem parâmetro.
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura) ).toFixed(2);

        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso. Cuide-se.'
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Mantenha-se.'
        }else if(valorIMC < 30){
            classificacao = ' levemente acima do peso. Atenção!'
        }else if(valorIMC < 35){
            classificacao = ' com obesidade grau I. Cuide-se.'
        }else if(valorIMC < 40){
            classificacao = ' com obesidade grau II. Cuide-se.'
        }else{
            classificacao = 'e você está com obesidade grau III. Cuide-se.'
        }    

        resultado.textContent = `${nome} , seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }

}

//2nd: add.EventListener. Obejtivo: fazer com que o programa execute a função criada (imc) através do clique.
calcular.addEventListener('click', imc);