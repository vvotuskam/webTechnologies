let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    switch (Math.floor(x%1984%60/12))
    {
        case 0:console.log("год зален");
            break;
        case 1:console.log("год красн ");
            break;
        case 2:console.log("год желт ");
            break;
        case 3:console.log("год бел ");
            break;
        case 4:console.log("год черн ");
            break;
    }

    switch (x%1984%60%12) {
        case 0:
            console.log("ой крысы");
            break;
        case 1:
            console.log("ой коровы");
            break;
        case 2:
            console.log("ого тигра");
            break;
        case 3:
            console.log("ого зайца");
            break;
        case 4:
            console.log("ого дракона");
            break;
        case 5:
            console.log("ой змеи");
            break;
        case 6:
            console.log("ой лошади");
            break;
        case 7:
            console.log("ой овцы");
            break;
        case 8:
            console.log("ой обезьяны");
            break;
        case 9:
            console.log("ой курицы");
            break;
        case 10:
            console.log("ой собаки");
            break;
        case 11:
            console.log("ой овцы");
            break;

    }
}