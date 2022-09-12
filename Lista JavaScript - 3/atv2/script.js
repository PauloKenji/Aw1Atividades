var carro = {
    marca,
    modelo,
    anoDeFab: 0,
    preco
};

var marca = document.getElementById("marca");
var modelo = document.getElementById("modelo");
var ano = document.getElementById("ano");
var preco = document.getElementById("preco");

var btnAVista = document.getElementById("aVista");
var btnParcelado = document.getElementById("parcelado");
    
var resultado = document.getElementById("resultado");

btnAVista.addEventListener("click",calcularPrecoVista)
btnParcelado.addEventListener("click",calcularParcelado)

function calcularPrecoVista(){
    setCarro()

    let precofinal = carro.preco - (carro.preco * 0.05);

    resultado.innerHTML = 
        "Marca: " + carro.marca + "<br>" +
        "Modelo: " + carro.modelo + "<br>" +
        "Ano: " + carro.anoDeFab + "<br>" +
        "Preço: R$ " + precofinal + "<br>";
}

function calcularParcelado(){
    setCarro()

    let entrada = carro.preco * 0.5
    
    resultado.innerHTML = 
        "Marca: " + carro.marca + "<br>" +
        "Modelo: " + carro.modelo + "<br>" +
        "Ano: " + carro.anoDeFab + "<br>" +
        "Entrada: R$ " + entrada + "<br>" +
        "12 Parcelas de: R$ " + (entrada / 12).toFixed(2) ;
}

function setCarro(){
    carro.marca = marca.value;
    carro.modelo = modelo.value;
    carro.anoDeFab = ano.value;
    carro.preco = preco.value;
}

