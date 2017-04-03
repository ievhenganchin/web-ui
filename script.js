var a = 1;

var b; // var b = undefined;

// js types:
// number = 1, 5, 0, Infinity, -Infinity, NaN, 0.56, 1e27, 0x00001
// boolean = true, false
// string = 'test', '21412521515', "12421421415215"
// null = null
// undefined = undefined

var aaa = 1;
aaa = "test";

aaa = true;

if (typeof(aaa) == "string") {
    alert("STRING IS HERE");
} else if (typeof(aaa) == "boolean") {
    alert("BOOLEAN IS HERE");
} else {
    alert("SMTH NEW IS HERE");
}

aaa = "1111";

if (typeof(aaa) == "string" || typeof(aaa) == "boolean") {

}

switch(typeof(aaa)) {
    case "string": 
        alert("STRING IS HERE");
        break;
    case "boolean":
        alert("BOOLEAN IS HERE");
        break;
    default:
        alert("SMTH NEW IS HERE");
}

// =>

//elem = "style = 'display: none;'";

var c = 5;
var d = c + 10; // 15
d = c - 10; // -5
d = c * 10; // 50
d = c / 10; // 0.5

d = 'test' + 5;
d = true - undefined;
d = false * Infinity;

// 2.5 => 2.49999999999999999999999999999999999999999999999999999998

// Math - sin, cos, tan, arcos, pow, sqrt

/*
var i = 1;
for (; i < 5;) {
    console.log(i);
    i = i + 1;
}
*/

for (var i = 1; i <= 10; i++) { 
    console.log(i);
}

i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}

i = 1;
while (i < 10) {
    do {
        console.log(i);
        i = i + 1;
    }
    while (i < 10)
}

var f = 10, res = 1; // 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

while (f > 1) {
    res = res * f;
    f = f - 1;
}

console.log(res);

function factor(num) {
    var res = 1;
    while (num > 1) {
        res = res * num;
        num = num - 1;
    }

    return res;
}

console.log(factor(10));

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

// Calc (functions):
// a + b
// a - b
// a * b
// a / 0 (check if zero)
// Math.pow
// Math.sqrt

// validation message = 'Wrong values'