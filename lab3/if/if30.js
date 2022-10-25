
let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    let x1 = "odd";
    if (x % 2 === 0) x1 = "even";

    let x2 = "3-";
    if (x < 10) x2 = "1-";
    else if (x < 100) x2 = "2-";

    console.log(`${x1} ${x2}digit number`);
}