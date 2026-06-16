function calcularImc(peso, altura){
    if(!peso || peso <= 0 || !altura || altura <= 0){
        throw new Error("Validação falhou: Peso e Altura devem ser maiores que zero.");
    }

    let imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}

function classificarImc(imc){
    if(imc<18.5){
        return "abaixo do peso";
    } else if(imc>=18.5 && imc<25){
        return "peso ideal";
    } else if(imc>=25 && imc<30){
        return "acima do peso";
    } else if(imc>=30 && imc<35){
        return "obesidade grau I";
    } else if(imc>=35 && imc<40){
        return "obesidade grau II";
    } else if(imc>=40){
        return "obesidade grau III";
    } else {
        return "os valores não estão corretos";
    }
}

function processarImc(){
    var peso = parseFloat(document.getElementById("txtPeso").value);
    var altura = parseFloat(document.getElementById("txtAltura").value);

    try{
        var imc = calcularImc(peso, altura);
        var faixaPeso = classificarImc(imc);

        document.getElementById("txtResultado").style.color = "#1A1A24";
        document.getElementById("txtResultado").innerText = "Seu IMC é " + imc 
            + " (" + faixaPeso + ")";
    } catch(error){
        document.getElementById("txtResultado").style.color = "#FF0000";
        document.getElementById("txtResultado").innerText = error.message;
    }
}

if(typeof module !=="undefined" && typeof module.exports !== "undefined") {
    module.exports = { calcularImc, classificarImc };
}