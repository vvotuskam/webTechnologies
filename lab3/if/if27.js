let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    if (x < 0)
        console.log(0);
    else if (Math.floor(x) % 2 === 0)
        console.log(1);
    else
        console.log(-1);
}