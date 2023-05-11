
// var segredos = [5,7,10,2,3];

// var input = document.querySelector("input");
//     // input.focus();

// function verifica() {

// var achou = false;

// for(var posicao = 0; posicao < segredos.length; posicao++) {

//     if(input.value == segredos[posicao]) {

//         alert("Você ACERTOU!");
//         achou = true;
//         break;
//     }
// }

// if(achou == false) {
//     alert("Você ERROU!");
// }

// input.value = "";
// input.focus();

// }

// var button = document.querySelector("button");

// button.onclick = verifica();

let input = document.getElementById("input");
// input.focus(); /* Assim que entrar na página o teclado permanece no input */

let secrets = sorteia(5);

function sorteia() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(qtd) {

    let secrets = [];
    let number = 1;
    let numberAleatorio = sorteia()
    let achou = false;

    while (number <= qtd) {

        if (numberAleatorio != 0) {
            for (let i = 0; i < secrets.length; i++) {

                if (secrets[i] == numberAleatorio) {
                    achou = true;
                    break
                }
            }
            if (achou == false) {
                number++;
                secrets.push(numberAleatorio)

            }
        }
    }
    return secrets;

}

let button = document.querySelector("button");
button.onclick = verify();

let teste = false;

function verify() {
    for (let pos = 0; pos < secrets.length; pos++) {

        if (input.value == secrets[pos]) {
            alert("Acertou");
            teste = true;
            break;
        }
    }

    teste == false ? "Acertou" : "Errou"

    input.value = "";  /* Limpar o campo de Input*/
    input.focus();     /* Assim que errar o teclado permanece no input para o user digitar novamente
    sem precisar usar o mouse*/
}


