function enviar(){
    document.getElementById("resultado").innerHTML = "";
    var number = document.getElementById("number").value;
    console.log(number)
    for(var i = number ; i >= 1; i--){
        document.getElementById("resultado").innerHTML += i+" - ";
    }
    document.getElementById("resultado").innerHTML += 0;
}

