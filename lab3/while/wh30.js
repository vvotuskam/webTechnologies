document.getElementById("btn").onclick = function () {
    let a = Number(document.getElementById("n").value);
    let b = Number(document.getElementById("k").value);
    let c = Number(document.getElementById("c").value);
    let k = 0;
    let temp;
    while ((a-c)>=0) {
        a -= c;
        temp = b;
        while (temp - c >= 0){
            temp -= c;
            ++k;
        }
    }
    console.log(k);
}