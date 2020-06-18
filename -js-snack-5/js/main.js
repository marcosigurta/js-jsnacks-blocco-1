
var btn = document.getElementById('btn').addEventListener("click", function () {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var options = document.getElementById('options').value;

    if (options == "1") {
        document.getElementById("result").innerHTML = num1 + num2;
    } else if (options == "2") {
        document.getElementById("result").innerHTML = num1 - num2;
    } else if (options == "3") {
        document.getElementById("result").innerHTML = num1 * num2;
    } else if (options == "4") {

        if (num2 == 0) {
            document.getElementById("result").innerHTML = "Can't Divide per 0"
        } else {
            document.getElementById("result").innerHTML = num1 / num2;
        }
    }
})