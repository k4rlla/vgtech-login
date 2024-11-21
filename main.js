function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        alert("E-mail valido");
    }
    else {
        alert("E-mail invalido");
    }
}

function validaForm (event) {
    event.preventDefault();
    let formulario = document.getElementById("form-login");
    let fields = formulario.elements;
    for (let i = 0; i <= fields.length; i++){
        let campo = fields[i];
        let nome_do_campo = campo.name;
        switch(nome_do_campo) {
            case "email":
                validacaoEmail(campo);
                break;
            case "senha":
                break;
        }
    }
}