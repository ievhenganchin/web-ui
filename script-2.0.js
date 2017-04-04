// var f1 = function() {};
// var f2 = undefined;
// var f3 = undefined;

f1();

f2(); // undefined is not a function

function f1() {
    //....
}

var f2 = function() {

}

f2();

// typeof(f2) == 'function'
// typeof(null) == 'object'

var f3 = f2;

f2 = 10;

f3 = true;