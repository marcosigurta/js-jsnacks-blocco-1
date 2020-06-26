
 var numeriUtente = [];
 var numeroVolte = prompt('Quanti numeri vuoi moltiplicare?');

 for (var i = 0; i < numeroVolte; i++) {
    var numero = parseInt(prompt('Inserisci un numero da moltiplicare al cubo'));
    numeriUtente.push(Math.pow(numero, 3)); // (numero**3)
 }

 console.log(numeriUtente);