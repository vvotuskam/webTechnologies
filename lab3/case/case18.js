let x;
document.getElementById("btn").onclick = function () {
    x = document.getElementById("text").value;
    switch (Math.floor(x / 100))
    {
        case 1: console.log("сто"); break;
        case 2: console.log("двести"); break;
        case 3: console.log("триста"); break;
        case 4: console.log("четыреста"); break;
        case 5: console.log("пятьсот"); break;
        case 6: console.log("шестьсот"); break;
        case 7: console.log("семьсот"); break;
        case 8: console.log("восемьсот"); break;
        case 9: console.log("девятьсот"); break;
    }
    switch (Math.floor(x / 10) % 10)
    {
        case 10:console.log("десять"); break;
        case 2:console.log("двадцать"); break;
        case 3:console.log("тридцать"); break;
        case 4:console.log("сорок"); break;
        case 5:console.log("пятьдесят"); break;
        case 6:console.log("шестьдесят"); break;
        case 7:console.log("семьдесят"); break;
        case 8:console.log("восемьдесят"); break;
        case 9:console.log("девяносто"); break;
    }
    switch (x % 100)
    {
        case 11:console.log("одиннадцать"); break;
        case 12:console.log("двенадцать "); break;
        case 13:console.log("тринадцать"); break;
        case 14:console.log("четырнадцать"); break;
        case 15:console.log("пятнадцать "); break;
        case 16:console.log("шестнадцать "); break;
        case 17:console.log("семнадцать"); break;
        case 18:console.log("восемнадцать"); break;
        case 19:console.log("девятнадцать"); break;
        default:
            switch (x % 10)
            {
                case 1:console.log("один ") ;break;
                case 2:console.log("два ") ;break;
                case 3:console.log("три ") ;break;
                case 4:console.log("четыре ") ;break;
                case 5:console.log("пять ") ;break;
                case 6:console.log("шесть ") ;break;
                case 7:console.log("семь ") ;break;
                case 8:console.log("восемь ") ;break;
                case 9:console.log("девять ") ;break;
            }
    }
}