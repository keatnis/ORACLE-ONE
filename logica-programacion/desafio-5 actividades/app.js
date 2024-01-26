// DESAFIO 3. LOOPS Y TENTATIVAS

/*
   
  
*/
/*
// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
DESAFIO 1
let contador = 1;

    while(contador <= 10){
        console.log(`Contador ${contador}`)
        contador= contador+1 ;
    }
*/

/*
    DESAFIO 2:
  Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

  let contador = 10;

    while(contador >= 0){
        console.log(`Contador ${contador}`)
        contador-- ;
    }
*/
/*    
    DESAFIO 3:
    Crea un programa de cuenta progresiva. 
    Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
    
*/

    let contador =0;
    let numero= prompt("Por favor ingrese un numero ");

    while(contador <= numero ){
        console.log(` Contador ${contador}`);
        contador++;
    }

