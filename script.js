const inputTexto = document.querySelector("#input");
const mensaje = document.querySelector("#output");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = '';
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][1])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return StringParaDesencriptar;
}

function copy() {
    let copyText = document.querySelector("#output");
    copyText.select();
    document.execCommand("copy");
}

function mostrarOcultar(){
    document.getElementById("element1").style.visibility = "hidden";
    document.getElementById("element2").style.visibility = "hidden";
    document.getElementById("element3").style.visibility = "visible";
}
  
document.querySelector(".boton-copiar").addEventListener("click", copy);

document.querySelector(".boton-encriptar").addEventListener("click",mostrarOcultar);



  