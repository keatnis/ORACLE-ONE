/*
Desafio 2:
Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.

let numeroUsuario = prompt("ingrese un numero positivo o negativo")
if(numeroUsuario > 0 ) {
    alert(`El numero ${numeroUsuario} es un numero positivo`)
}else if (numeroUsuario <0 ){
    alert(`El numero ${numeroUsuario} es un numero negativo`)
}else {
     alert("El numero es cero")
}

*/

/*  DESAFIO 3:
    Crea un sistema de puntuación para un juego.
    Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
    En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntuacion = 140
puntuacion = prompt('numero de puntuacion')
if (puntuacion >= 100) {
    console.log("¡Felicidades, has ganado!")
} else {
    console.log("Intenta nuevamente para ganar.")
}
*/

/*
DESAFIO 4:
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

let saldo = 400
let nombre = prompt("Ingrese su nombre")

alert(`Bievenido/a ${nombre} su saldo actual es: ${saldo}`)