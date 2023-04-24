
let name = prompt("Diga seu nome: ")
let altura = prompt("Diga sua altura: ");
let peso = prompt("Diga seu peso: ");
let imc = calculaImc(peso,altura);

document.write("O IMC de " + name + " foi de: " + imc)

function calculaImc (p,a) {
    // Pode colocar peso/altura ou p/a
    return p / (a * a);
}

