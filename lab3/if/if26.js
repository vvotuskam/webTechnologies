let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    if (x <= 0)
        console.log(-1 * x);
    else if (x >= 2)
        console.log(4);
    else
        console.log(x * x);
}