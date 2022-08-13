function calcularSalario(){
    var nome = document.getElementById("inputNome").value;
    var salario = document.getElementById("inputSalarioBruto").value;

    document.getElementById("salarioBruto").innerHTML = salario;

    var inss = salario*(8.5/100);
    var irrf = (salario-inss)*(12.5/100)

    salarioLiquido = salario - inss - irrf;

    document.getElementById("salarioLiquido").innerHTML = salarioLiquido;
    console.log(nome);
    document.getElementById("nome").innerHTML = nome;
}