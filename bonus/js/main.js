
var btn = document.getElementById('coin').addEventListener("click", function () {
    var number = Math.floor(Math.random() * 9) + 1;

    if (!(number % 2)) {
        document.getElementById('img').className = "head"
    } else {
        document.getElementById('img').className = "cross"
    }
    console.log(number)
})


