document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        let temp = i;
        for (let j = 2; j <= n - i + 1; j++) {
            temp *= i;
        }
        sum += temp;
    }
    console.log(sum);
}