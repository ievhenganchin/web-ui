var person = {
    name: 'test',
    last_name: 'test_test',
    address: {
        city: 'test',
        street: 'test'
    },
    children: [
        {
            name: 'test 2',
            last_name: 'test_test_2'
        },
        {
            name: 'test 3',
            last_name: 'test_test_3'
        }
    ],
    work: function () {
        console.log(this.name + ' is working');
    }
}

function copy(obj) {

    var copy = {};

    for (var key in obj) {
        copy[key] = check(obj[key]);
    }

    return copy;
}

function check(value) {
    if (typeof (value) !== "object" || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        var result = [];

        for (var i = 0; i < value.length; i++) {
            result.push(check(value[i]));
        }

        return result;
    }

    return copy(value);
}

var person2 = copy(person);

function isCopy(obj, copy) {
    var result = true;

    for (var key in obj) {
        if (obj.hasOwnProperty(key) && copy.hasOwnProperty(key)) {
            result = result && checkCopy(obj[key], copy[key]);
        } else {
            return false;
        }
    }

    return result;
}

function checkCopy(value, copyValue) {
    var result = true;

    if (typeof (value) === typeof (copyValue)) {
        if (typeof (value) !== "object") {
            result = result && value === copyValue;
        } else if (Array.isArray(value) && Array.isArray(copyValue) && value.length === copyValue.length) {
            for (var i = 0; i < value.length; i++) {
                result = result && checkCopy(value[i], copyValue[i]);
            }
        } else {
            result = result && isCopy(value, copyValue);
        }
    } else {
        return false;
    }

    return result;
}