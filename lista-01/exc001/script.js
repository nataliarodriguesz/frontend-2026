function validarCPF(cpf){
    cpf = cpf.replace(/\D/g, "");

    //Quantidade de números diferentes de 11
    if (cpf.length !== 11) 
    return false;

    // Impede CPF igual: 11111111111
    if (/^(\d)\1+$/.test(cpf)) 
    return false;

    let soma = 0;
    let resto;

    // ======================
    // Primeiro dígito
    // ======================
    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) resto = 0;

    if (resto !== Number(cpf[9])) {
        return false;
    }

    // ======================
    // Segundo dígito
    // ======================
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) resto = 0;

    if (resto !== Number(cpf[10])) {
        return false;
    }

    return true;
}

function enviar(){
    const cpf = document.getElementById("cpf").value;

    if (validarCPF(cpf)) {
        alert("CPF válido");
    } else {
        alert("CPF inválido");
    }
}
