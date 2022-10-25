let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    if (x <= 19) {
        switch (x) {
            case 10: console.log("десять"); break;
            case 11: console.log("одиннадцать"); break;
            case 12: console.log("двенадцать"); break;
            case 13: console.log("тринадцать"); break;
            case 14: console.log("четырнадцать"); break;
            case 15: console.log("пятнадцать"); break;
            case 16: console.log("шестнадцать"); break;
            case 17: console.log("семнадцать"); break;
            case 18: console.log("восемнадцать"); break;
            case 19: console.log("девятнадцать"); break;
        }
        console.log("учебных заданий");
    }
    else {
        let x1 = Math.floor(x / 10);
        let x2 = x % 10;
        switch (x1) {
            case 2: console.log("двадцать"); break;
            case 3: console.log("тридцать"); break;
            case 4: console.log("сорок"); break;
        }
        switch (x2) {
            case 1: console.log("одно учебное задание"); break;
            case 2: console.log("два учебных заданий"); break;
            case 3: console.log("три учебных заданий"); break;
            case 4: console.log("четыре учебных заданий"); break;
            case 5: console.log("пять учебных заданий"); break;
            case 6: console.log("шесть учебных заданий"); break;
            case 7: console.log("семь учебных заданий"); break;
            case 8: console.log("восемь учебных заданий"); break;
            case 9: console.log("девять учебных заданий"); break;
        }
    }
}