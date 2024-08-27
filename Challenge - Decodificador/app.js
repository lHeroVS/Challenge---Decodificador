function exibirResultado(texto) {
    document.getElementById("campo__inicial").style.display = "none";
    
    
    document.getElementById("campo__novo").style.display = "flex";
    document.getElementById("output__novoTexto").textContent = texto;
    
    
    document.getElementById("botao__copiar").style.display = "block";
}

function criptografar () {
    let textoDoInput = document.getElementById ("input__do__usuario").value;
    let contador = 0;
    let novoTexto = '';
    while (contador < textoDoInput.length) {
        if (textoDoInput[contador] == "e") {
            novoTexto += "enter";
        } else if (textoDoInput[contador] == "i") {
            novoTexto += "imes";
        } else if (textoDoInput[contador] == "a") {
            novoTexto += "ai";
        } else if (textoDoInput[contador] == "o") {
            novoTexto += "ober";
        } else if (textoDoInput[contador] == "u") {
            novoTexto += "ufat";
        } else {
            novoTexto += textoDoInput[contador];
        }
        contador ++;
    }
    limparcampo();
    exibirResultado (novoTexto);
}

function descriptografar() {
    let textoDoInput = document.getElementById("input__do__usuario").value;
    let novoTexto = '';
    let contador = 0;

    while (contador < textoDoInput.length) {
        if (textoDoInput[contador] === "e" &&
            textoDoInput[contador + 1] === "n" &&
            textoDoInput[contador + 2] === "t" &&
            textoDoInput[contador + 3] === "e" &&
            textoDoInput[contador + 4] === "r") {
            novoTexto += "e";
            contador += 5;
        } else if (textoDoInput[contador] === "i" &&
                   textoDoInput[contador + 1] === "m" &&
                   textoDoInput[contador + 2] === "e" &&
                   textoDoInput[contador + 3] === "s") {
            novoTexto += "i";
            contador += 4;
        } else if (textoDoInput[contador] === "a" &&
                   textoDoInput[contador + 1] === "i") {
            novoTexto += "a";
            contador += 2;
        } else if (textoDoInput[contador] === "o" &&
                   textoDoInput[contador + 1] === "b" &&
                   textoDoInput[contador + 2] === "e" &&
                   textoDoInput[contador + 3] === "r") {
            novoTexto += "o";
            contador += 4;
        } else if (textoDoInput[contador] === "u" &&
                   textoDoInput[contador + 1] === "f" &&
                   textoDoInput[contador + 2] === "a" &&
                   textoDoInput[contador + 3] === "t") {
            novoTexto += "u";
            contador += 4;
        } else {
            novoTexto += textoDoInput[contador];
            contador++;
        }
    }

    limparcampo();
    exibirResultado(novoTexto);
}

function limparcampo () {
    textoDoInput = document.getElementById ("input__do__usuario");
    textoDoInput.value = "";
}

function copiar () {
     // Obter o texto do elemento de entrada
     var texto = document.getElementById("output__novoTexto").textContent;

     // Usar a Clipboard API para copiar o texto
     navigator.clipboard.writeText(texto).catch(function(err) {
         // Log de erro no console, se necessário
         console.error("Erro ao copiar o texto: ", err);
     });
 }
