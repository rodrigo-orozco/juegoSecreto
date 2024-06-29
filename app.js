let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        // El usuario acertó

        document.getElementById('reiniciar').removeAttribute('disabled');

        intentos--;
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'}`);
    } else{
        //El usuario no acertó

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroSecreto) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
        
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Si el número generado está en la lista de números sorteados
            return generarNumeroSecreto();
    
        } else {
            // Si el número generado no está en la lista de números sorteados
    
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Selecciona un número del 1 al 10 ${numeroMaximo}`);  
    // Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
verificarIntento();