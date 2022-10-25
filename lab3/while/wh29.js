document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    let a1 = 1;
    let a2 = 2;
    let num = 2;
    let ak = (a2 + 2 * a1 / 3);
    while (!Math.abs(ak - a2) < n) {
        let temp = (ak + 2 * a2 / 3);
        a1 = a2;
        a2 = ak;
        ak = temp;
        num++;
    }
    console.log(num);
    console.log(a2 + " " + ak);
}