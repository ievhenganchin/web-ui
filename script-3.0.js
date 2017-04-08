var obj = {};

var addKey = function(key, value) {
    obj[key] = value;

    return; // -----, return undefined;
}

addKey('test', 100);

function sum(obj) {
    var result = 0;

    for (var key in obj) {
        result = result + obj[key];
    }

    return result;
}

console.log(sum(obj));