var submit = document.getElementById("submit");

submit.addEventListener("click", calc)

function calc() {
    let price = document.getElementById("price").value;
    let grama = document.getElementById("kilo").value;

    let total = (price/1000) * grama;

    let result = document.getElementById("result");
    result.textContent = "Total: R$ " + total;
    console.log(total)
}
