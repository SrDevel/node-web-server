let entradaEncriptar = document.getElementById("entradaEncriptar");
let botonEncriptar = document.getElementById("botonEncriptar");
let resultadoEncriptado = document.getElementById("txt-campo-resultado");

let cambios = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

let palabrasDesencriptar = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}

function encriptar() {
    let texto = entradaEncriptar.value;
    // Validamos si el texto ingresado es vacio
    if (texto === "") {
        alert("Por favor, ingrese un texto para encriptar");
        return;
    } else {
        // validamos que el texto ingresado no contenga mayusculas o caracteres especiales
        if (texto.match(/[A-Z]/) || texto.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
            alert("Por favor, ingrese un texto en minusculas y sin caracteres especiales");
            return;
        } else {
            let textoEncriptado = "";
            for (let i = 0; i < texto.length; i++) {
                let letra = texto[i];
                if (cambios[letra]) {
                    textoEncriptado += cambios[letra];
                } else {
                    textoEncriptado += letra;
                }
            }
            resultadoEncriptado.innerHTML = textoEncriptado;
            mostrarResultado();
            console.log(textoEncriptado);
            limparCajasDeTexto();
        }
    }
}

function desencriptar() {
    // Validamos si el texto ingresado es vacio
    let texto = entradaEncriptar.value;
    if (texto === "") {
        alert("Por favor, ingrese un texto para desencriptar");
        return;
    } else {
        // validamos que el texto ingresado no contenga mayusculas o caracteres especiales
        if (texto.match(/[A-Z]/) || texto.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
            alert("Por favor, ingrese un texto en minusculas y sin caracteres especiales");
            return;
        } else {
            let texto = entradaEncriptar.value;
            let textoDesencriptado = "";

            textoDesencriptado = texto.replace(/ai/g, "a");
            textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
            textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
            textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
            textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

            resultadoEncriptado.innerHTML = textoDesencriptado;

            mostrarResultado();
            console.log(textoDesencriptado)
            limparCajasDeTexto();
        }
    }
}

function limparCajasDeTexto() {
    entradaEncriptar.value = "";
}

function mostrarResultado() {
    let imagen = document.getElementById("imagen-resultado");
    imagen.style.display = "none";

    let textoInformacion = document.getElementById("txt-campo-info");
    textoInformacion.style.display = "none";

    let textoInstrucciones = document.getElementById("txt-campo-instrucciones");
    textoInstrucciones.style.display = "none";

    let campoResultado = document.getElementById("txt-campo-resultado");
    campoResultado.style.display = "block";

    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = "block";
}

function mostrarImagen() {
    let imagen = document.getElementById("imagen-resultado");
    imagen.style.display = "block";

    let textoInformacion = document.getElementById("txt-campo-info");
    textoInformacion.style.display = "block";

    let textoInstrucciones = document.getElementById("txt-campo-instrucciones");
    textoInstrucciones.style.display = "block";

    let campoResultado = document.getElementById("txt-campo-resultado");
    campoResultado.style.display = "none";

    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.style.display = "none";

}

function copiarTexto() {
    navigator.permissions.query({ name: 'clipboard-write' }).then(
        result => {
            if (result.state == 'granted' || result.state == 'prompt') {
                navigator.clipboard.writeText(resultadoEncriptado.innerHTML).then(
                    () => {
                        console.log("Texto copiado");
                        copiadoExitoso();
                    }
                )
            } else {
                console.log("No se puede copiar el texto");
            }
        }
    )
}

function copiadoExitoso() {
    let botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.innerHTML = "Copiado";
    botonCopiar.style.backgroundColor = "green";
    botonCopiar.style.color = "#ffffff";
    botonCopiar.style.cursor = "not-allowed";
    botonCopiar.disabled = true;

    setTimeout(() => {
        botonCopiar.innerHTML = "Copiar";
        botonCopiar.style.backgroundColor = "#0A3871";
        botonCopiar.style.color = "#FFFFFF";
        botonCopiar.style.cursor = "pointer";
        botonCopiar.disabled = false;
    }, 1000);
}