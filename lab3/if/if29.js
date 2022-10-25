let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    if (x === 0) console.log("zero");
    else {
        if (x > 0) console.log("positive");
        else if (x < 0) console.log("negative");
        if (Math.abs(x) % 2 === 0) console.log("even");
        else if (Math.abs(x) % 2 === 1) console.log("odd");
    }
    console.log("number");
}