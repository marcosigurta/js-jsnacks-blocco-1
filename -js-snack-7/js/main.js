//  var numeroVolte = parseInt(prompt('Quanti numeri vuoi sommare?'));
// var sum = 0;

// for (var i = 1; i <= numeroVolte; i++) {
//     var numeri = parseInt(prompt('Inserisci il ' + i + '° numero'))
//     sum += numeri;
// }

// console.log(sum);

var numeroVolte = parseInt(prompt('Quanti numeri vuoi sommare?'));
var sum = 0;
var i = 0;

while (numeroVolte > i){
    var numeri = parseInt(prompt('Inserisci il Numero'));
    sum += numeri;
    i++;
}

console.log(sum);



