function test() {
    var value = 10;

    return function() {
        console.log(value);
    };
}

var a = test(); // => function
a();

a = null;

function closure() {
    var value = {};

    return {
        get: function() {
            return JSON.parse(JSON.stringify(value));
        },
        set: function(newValue) {
            if (typeof (newValue) === "object") {
                value = JSON.parse(JSON.stringify(newValue));
            }
        }
    }
}

var c = closure();