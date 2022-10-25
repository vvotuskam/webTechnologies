

document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    let count = 1;
    for (let i = n; i <= k; i++) {
        for (let j = 0; j < count; j++) {
            console.log(i);
        }
        count++;
        console.log();
    }
}