// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let numero = parseFloat(prompt('Digite um número'));

function tabuada () {
    for (let cont = 1; cont <= 10; cont++) {
        let calculo = numero * cont;
        console.log(`${numero} x ${cont} = ${calculo}`); 
    }
}

tabuada(numero);