// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.
// Considere Pi = 3,14.

let raio = parseFloat(prompt('Digite o raio da sala'));
const pi = Math.PI;

function area() {
   return(a = pi * Math.pow(raio, 2));
}

function perimetro() {
    return(p = 2 * pi * raio);
}

area(raio, pi);
perimetro(raio, pi);
alert(`A área da sala circular é ${area(a).toFixed(1)} e o perímetro é ${perimetro(p).toFixed(1)}`);