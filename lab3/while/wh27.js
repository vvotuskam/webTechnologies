document.getElementById("btn").onclick = function () {
    let n = Number(document.getElementById("n").value);
    let k = Number(document.getElementById("k").value);
    let a1 = 1;
    let a2 = 1;
    let num = 1;
    if (n === a1 || n === a2)
        console.log(1 + " or " + 2);
    while (a1 + a2 !== n) {
        let temp = a1 + a2;
        a1 = a2;
        a2 = temp;
        num++;
    }
    console.log(num);
}