let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    let x1 = Math.floor(x / 10);
    let x2 = x % 10;
    switch (x1) {
        case 2: console.log("twenty"); break;
        case 3: console.log("thirty"); break;
        case 4: console.log("forty"); break;
        case 5: console.log("fifty"); break;
        case 6: console.log("sixty"); break;
    }
    switch (x2) {
        case 1: console.log("one"); break;
        case 2: console.log("two"); break;
        case 3: console.log("three"); break;
        case 4: console.log("four"); break;
        case 5: console.log("five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seven"); break;
        case 8: console.log("eight"); break;
        case 9: console.log("nine"); break;
    }
    console.log("years");
}