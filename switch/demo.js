var weather = 'rainy';

switch (weather) {
    case 'sunny':
        console.log("its good weather outside");
        break;
    case 'cold':
        console.log("its cold outside");
        break;
    case 'rainy':
        console.log("its bad weather outside");
        break;
    default:
        console.log("some new weather");
        break;
}

var day = 0;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thusday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input must be a number beetwen 1 and 7");
}


var day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("Input must be a number beetwen 1 and 7");
}

var month = 5;
switch (month) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novambar");
        break;
    case 12:
        console.log("Decembar");
        break;
    default:
        console.log("Input must be a number beetwen 1 and 12");
}

var month = 12;
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Zima");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Prolece");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Leto");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Jesen");
        break;
    default:
        console.log("Input must be a number beetwen 1 and 12");
}

var grade = "D";
switch (grade) {
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Pass");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
}

