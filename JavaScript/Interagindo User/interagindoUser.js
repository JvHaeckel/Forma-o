

var input = document.getElementById("input");
input.focus(); /* Assim que entrar na página o teclado permanece no input */

var secret = math.round(Math.random() * 10);

var button = document.querySelector("button");
button.onclick = verify();

function verify() {
    if (input == secret) {
        alert("Acertou");
    }
    else { alert("Errou") }

    input.value = "";  /* Limpar o campo de Input*/
    input.focus();     /* Assim que errar o teclado permanece no input para o user digitar novamente
    sem precisar usar o mouse*/
}


