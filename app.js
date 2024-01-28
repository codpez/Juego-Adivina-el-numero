let numerosSorteados = [];
let numeroSecreto= 0;
let intentos = 0;
let numeroMaximo = 10;
function asignarTextoElemento(etiqueta,texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','Es menor');

        }else{
            asignarTextoElemento('p','Es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Has llegado al numero maximo de posibilidades')
    } else{
    if (numerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}
function limpiarCaja() {
    let valorCaja=document.querySelector('#numeroUsuario');
    valorCaja.value='';
}
function condicionesIniciales() {
    limpiarCaja();
    asignarTextoElemento('h1',"Juego del numero secreto"); 
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
function reiniciarJuego() {
    //limpiar la caja.
    //indicar mensaje de intervalo de numeros.
    //generar numero aleatorio.
    //dehabilitar boton de reinicio.
    // reiniciar el numero de intento.
    condicionesIniciales();
}
condicionesIniciales();


