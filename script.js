const ORGINAL_VALUE = `<div><img class="cap" src="img/Capturar.PNG"></div>
<div><img class="frame" src="img/Frame 5.png"></div>`

function Criptografar() {
    let letras = document.getElementById("texto").value;
    letras = letras.toLowerCase()
    letras = letras.replace(/e/g, "enter");
    letras = letras.replace(/i/g, "imes");
    letras = letras.replace(/a/g, "ai");
    letras = letras.replace(/o/g, "ober");
    letras = letras.replace(/u/g, "ufat");
    letras = document.getElementById("resul").innerHTML = letras

    document.getElementById("group").style.display = "none";
};
function Descriptografar() {
    let letras = document.getElementById("texto").value;
    letras = letras.toLowerCase()
    letras = letras.replace(/enter/g, "e");
    letras = letras.replace(/imes/g, "i");
    letras = letras.replace(/ai/g, "a");
    letras = letras.replace(/ober/g, "o");
    letras = letras.replace(/ufat/g, "u");
    letras = document.getElementById("resul").innerHTML = letras

    document.getElementById("group").style.display = "none";
};

function Apagar() {
    document.getElementById('texto').value = '';
    document.getElementById('resul').innerHTML = ORGINAL_VALUE;
}

function copiarTexto() {
    let info = document.getElementById('resul').textContent;

    if (info === '') {
        alert('Por favor, informe um texto!')
        return
    }

    navigator.clipboard.writeText(info)
}