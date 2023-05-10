

var input = document.getElementById("input");

var secret = 5;

var button = document.querySelector("button");
button.onclick = verify();

function verify() {
    if (input == secret) {
        alert("Acertou");
    }
    else { alert("Errou") }
}
