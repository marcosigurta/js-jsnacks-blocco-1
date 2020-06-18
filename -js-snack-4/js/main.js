
var btn = document.getElementById('btn').addEventListener("click", function () {
    var number = Math.floor(Math.random() * 10) + 1;
    console.log(number);

    if (!(number % 2)) {
        document.getElementById('paragraph').classList.remove("pari");
    } else {
        document.getElementById('paragraph').classList.remove("dispari");
    }
})