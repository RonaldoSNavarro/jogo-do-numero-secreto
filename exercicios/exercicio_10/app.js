// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
// Para isso, considere a cotação do dólar igual a R$4,80.

let valorDolar = parseFloat(prompt('Digite o valor em dólar'));
let cotacaoReal = 4.80;

function conversaoReal(n) {
    return(n = valorDolar * cotacaoReal);
}

let valorConvertido = conversaoReal(valorDolar, cotacaoReal);
alert(`O valor convertido para real é ${valorConvertido}`);