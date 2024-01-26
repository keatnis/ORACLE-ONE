
let numeroMaximo=0
//Math.random()*10  --- el *10 indica la el numero maximo detro de los numero aleatorios
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos= 1;
// let palabraVeces= 'vez' se quita para usar el operador ternario
let numMaxIntentos = 3
// -- usando bucles para repetir el juego, mientras la persona no acierte
console.log(numeroSecreto)
while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Ingrese un numero entre el 1 y ${numeroMaximo}, por favor: `));
    // doble == es para comparar y solo un = es si es igual
    if (numeroSecreto == numeroUsuario) {
        // forma de mostrar una variable o codigo, usuando ${}
        //la condicion se cumplio
        //operadores ternarios ? true : false
        alert(`Acertaste, el numero es: ${numeroUsuario} .Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('lo siento no acertaste, el numero secreto es menor');
        } else {
            alert('lo siento no acertaste, el numero secreto es mayor');
        }
        //incrementamos el contador mientras no se acierte el numero 
        intentos++;
      
        if(intentos > numMaxIntentos)
        alert(`ha llegado el numero max ${numMaxIntentos} de intentos`)
    }
    
}



