var numeri = [];
for (var i = 1; i <= 6; i++) {
var numeroUtente = parseInt(prompt('Inserisci un numero: '));
if (numeroUtente % 2) {
    numeri.push(numeroUtente);
}
}
console.log(numeri);