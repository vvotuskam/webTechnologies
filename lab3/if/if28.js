let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    let res = (x%400 === 0 || x%4 === 0 && x%100 !== 0 ) ? 366 : 365;
    console.log(res);
}