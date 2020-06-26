var nomi = ["marco", "silvia", "giovanni", "elisa", "giorgio"]
var nomeUtente = prompt('Inserisci il tuo nome: ')
var find = false;

for (var i = 0; i < nomi.length; i++) {
    if (nomeUtente == nomi[i]) {
        find = true;
    }
}

if (find) {
    console.log('Puoi Entrare alla Festa!');
} else {
    console.log('Non puoi Entrare alla festa.');
}
