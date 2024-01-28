//Criar uma função que recebe três números como parâmetros e retorna a média deles.

let numero1 = parseFloat(prompt('Digite o primeiro número'));
let numero2 = parseFloat(prompt('Digite o segundo número'));
let numero3 = parseFloat(prompt('Digite o terceiro número'));
let media;

function mediaNumero() {
    media = (numero1 + numero2 + numero3) / 3;
    return(`A média é: ${media}`);
}

alert(media = mediaNumero(numero1, numero2, numero3));