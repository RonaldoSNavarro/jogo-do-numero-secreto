// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

// Exemplo de uso
let numero = parseFloat(prompt('Digite um número'));
let fatorial = calcularFatorial(numero);

alert(`O fatorial de ${numero} é ${fatorial}`);
