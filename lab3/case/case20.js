    document.getElementById("btn").onclick = function () {
    let d = Number(document.getElementById("text").value);
    let m = Number(document.getElementById("text1").value);
    switch (m) {
    case 1:
        if (d > 19)
            console.log("Водолей");
        else
            console.log("Козерог");
        break;
    case 2:
        if (d > 18)
            console.log("Рыбы");
        else
            console.log("Водолей");
        break;
    case 3:
        if (d > 20)
            console.log("Овен");
        else
            console.log("Рыбы");
        break;
    case 4:
        if (d > 19)
            console.log("Телец");
        else
            console.log("Овен");
        break;
    case 5:
        if (d > 20)
            console.log("Близнецы");
        else
            console.log("Телец");
        break;
    case 6:
        if (d > 21)
            console.log("Рак");
        else
            console.log("Близнецы");
        break;
    case 7:
        if (d > 22)
            console.log("Лев");
        else
            console.log("Рак");
        break;
    case 8:
        if (d > 22)
            console.log("Дева");
        else
            console.log("Лев");
        break;
    case 9:
        if (d > 22)
            console.log("Весы");
        else
            console.log("Дева");
        break;
    case 10:
        if (d > 22)
            console.log("Скорпион");
        else
            console.log("Весы");
        break;
    case 11:
        if (d > 22)
            console.log("Стрелец");
        else
            console.log("Скорпион");
        break;
    case 12:
        if (d > 21)
            console.log("Козерог");
        else
            console.log("Стрелец");
        break;
    }
}