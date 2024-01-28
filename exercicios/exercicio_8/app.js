// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let altura = parseFloat(prompt('Digite a altura'));
let peso = parseFloat(prompt('Digite o peso'));
let massaCorporal;

function imc() {
    return(massaCorporal = peso / (altura ** 2));
}

imc(altura, peso);
massaCorporal = massaCorporal.toFixed(1); // exibe o resultado com apenas 1 casa decimal apos a virgula


if (massaCorporal < 18.5) {
    alert(`O IMC é: ${massaCorporal}. Abaixo do peso`);
} else {
    if (massaCorporal >= 18.5 && massaCorporal <= 24.9) {
        alert(`O IMC é: ${massaCorporal}. Peso normal`);
    } else {
        if (massaCorporal >= 25 && massaCorporal <= 29.9) {
            alert(`O IMC é: ${massaCorporal}. Sobrepedo`);
        } else {
            if (massaCorporal >= 30 && massaCorporal <= 34.9) {
                alert(`O IMC é: ${massaCorporal}. Obesidade grau 1`);
            } else {
                if (massaCorporal >= 35 && massaCorporal <=39.9) {
                    alert(`O IMC é: ${massaCorporal}. Obesidade grau 2`);
                } else {
                    if (massaCorporal >= 40) {
                        alert(`O IMC é: ${massaCorporal}. Obesidade grau 3 (obesidade mórbida)`);
                    }
                }
            }
        }
    }
}