document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    let a1 = 2;
    let a2 = 2 + 1 / a1;
    let num = 1;
    while (!Math.abs(a2 - a1) < n) {
        let temp = 2 + 1 / a2;
        a1 = a2;
        a2 = temp;
        num++;
    }
    console.log(num);
}