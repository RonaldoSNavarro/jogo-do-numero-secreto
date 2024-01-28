// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

let numero = parseFloat(prompt('Digite um número'));
let resultado;

function operacaoMultiplicacao () {
    let multiplicacao = numero * numero;
    return(multiplicacao)
}

resultado = operacaoMultiplicacao(numero);
alert(`Resultado da multiplicação: ${resultado}`);