submit = document.getElementById("submit");
submit.addEventListener("click", calc)

clear = document.getElementById("clear");
clear.addEventListener("click", limparCampos);

function calc(){
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    var sexo = document.getElementsByName("sexo");
    let total = 0;

    if(sexo[0].checked){
        total = 22 * (altura * 2);
    }else if(sexo[1].checked){
        total = 21 * (altura * 2);
    }

    document.getElementById("result").textContent = "Peso Ideal: " + total + "Kg";
}

function limparCampos() {
    // Recarrega a página
    location.reload();
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);