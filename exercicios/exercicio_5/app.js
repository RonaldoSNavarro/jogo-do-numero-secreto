//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let numero1 = parseFloat(prompt('Digite o primeiro número'));
let numero2 = parseFloat(prompt('Digite o segundo número'));
let resultado;

function numeroMaior () {
    if (numero1 > numero2) {
        return(`${numero1} é maior`);
    } else {
        if (numero1 < numero2) {
            return(`${numero2} é maior`);
        } else {
            return('Os números são iguais');
        }
    }
}

alert(resultado = numeroMaior(numero1, numero2));