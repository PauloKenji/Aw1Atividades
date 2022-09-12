
var pacientes = new Array();

var adicionarBtn = document.getElementById("adicionar");
var urgenteBtn = document.getElementById("urgente");
var atenderBtn = document.getElementById("atender");

document.getElementById("paciente").focus();

function adicionar(){
    let pacienteIn = document.getElementById("paciente").value;
    if(pacienteIn == ""){
        alert("Informe o nome do paciente");
        pacienteIn.focus();
        return;
    }

    pacientes.push(pacienteIn); 
    ListaUpdate();  
}

function urgente(){
    let pacienteIn = document.getElementById("paciente").value;
    if(pacienteIn == ""){
        alert("Informe o nome do paciente");
        pacienteIn.focus();
        return;
    }
    
    pacientes.unshift(pacienteIn);
    ListaUpdate();
}

function atender(){
    if(pacientes.length < 1){
        alert("Nenhum paciente na fila");
        pacienteIn.focus();
        return;
    }

    pacientes.shift();
    ListaUpdate();
}


function ListaUpdate(){    
    var outList = "";
    for (let index = 0; index < pacientes.length; index++) {
        outList += "<li>" + pacientes[index] + "</li>";
    }

    document.getElementById("paciente").value = "";
    document.getElementById("paciente").focus();

    document.getElementById("pacientesLista").innerHTML = outList;    
}

adicionarBtn.addEventListener("click", adicionar);
urgenteBtn.addEventListener("click", urgente);
atenderBtn.addEventListener("click", atender);

var btn = document.getElementById("Enviar");
var dataresult = document.getElementById("dataresult");
var valorresult = document.getElementById("valoresult");



btn.addEventListener("click", calc)

function calc(){    
    
    var date = document.getElementById("data").value;
    var valor = document.getElementById("valor").value;

    var data = new Date(date)

    data.setDate(data.getDate() + 90);    
    dataresult.innerHTML = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();

    valorresult.innerHTML = (valor+(valor / 100 * 20));
}
