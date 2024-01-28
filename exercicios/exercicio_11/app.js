// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let comprimentoSala = parseFloat(prompt('Digite o comprimento da sala'));
let larguraSala = parseFloat(prompt('Digite a largurta'));

function areaPerimetro () {
    area = comprimentoSala * larguraSala;
    perimetro = 2 * (comprimentoSala + larguraSala);
    return(area, perimetro);
}

areaPerimetro(comprimentoSala, larguraSala);
alert(`A área da sala é: ${areaPerimetro(area)}. O perímetro é ${areaPerimetro(perimetro)}`);