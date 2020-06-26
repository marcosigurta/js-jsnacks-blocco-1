somma = 0;
media = 0;
for (let i = 1; i <= 10; i++) {
    var numeriInseriti = parseInt(prompt("Inserisci il " + i + "°" + " numero"));
    somma += numeriInseriti;
    media = parseInt(somma / 10).toFixed(2);
}

console.log(somma);
console.log(media);