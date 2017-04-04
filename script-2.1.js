// var add = function(...) {...}
function add (a, b) {
    // var a = undefined;
    // var b = undefined;
    // var sum = undefined;
    // var arguments = [5, 10, 25, 40, 80];

    // a = 5;
    // b = 10;

    var sum = a + b;
    // sum = a + b;

    return sum;
}

// 'function (a, b) { var sum = a + b; return sum; }'

/*

context = {
    a: undefined,
    b: undefined,
    sum: undefined
}

*/

add(5, 10, 25, 40, 80);
// dispose context

add(10, 3);