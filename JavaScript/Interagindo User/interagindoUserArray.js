

let input = document.getElementById("input");
input.focus(); /* Assim que entrar na página o teclado permanece no input */

let secrets = [2, 4, 6, 8];

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


