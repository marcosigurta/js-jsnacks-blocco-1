
var btn = document.getElementById('btn').addEventListener("click", function () {
    var number = parseInt(prompt('Insert a Number'));

    if (number > 0) {
        document.getElementById('paragraph').className = "green";
    } else if (number < 0) {
        document.getElementById('paragraph').className = "red";
    } else {
        document.getElementById('paragraph').className = "blue";
    }
})