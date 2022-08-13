function enviar(){
    var number = document.getElementById("number").value;
    console.log(number)
    document.getElementById("resultado").innerHTML = factorialize(number);
}

function factorialize(num){
    var resultado = 1;
    for(var i = 1; i <= num; i++){
        resultado *= i;
        console.log(resultado);
    }
    return resultado;
}