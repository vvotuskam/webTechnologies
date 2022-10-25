

document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    for (let i = n; i <= k; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i);
        }
        console.log();
    }
}