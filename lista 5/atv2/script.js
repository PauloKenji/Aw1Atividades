var quantidadeDeNumeros = 30;

var menorQueOito = 0,maiorQueDez = 0;

for (let index = 0; index <= quantidadeDeNumeros; index++) {
    var number = Math.floor(Math.random() * 16);
    document.write("<div class='number'>"+number+"</div>");
    if(number < 8){
        menorQueOito++;
    }else if(number > 10){
        maiorQueDez++;
    }
}

document.getElementById("menorQueOito").innerHTML = ((menorQueOito/quantidadeDeNumeros)*100).toFixed(2)+"%";
document.getElementById("maiorQueDez").innerHTML = ((maiorQueDez/quantidadeDeNumeros)*100).toFixed(2)+"%";

