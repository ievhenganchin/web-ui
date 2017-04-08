var arr = [1, 2, 3, 5, 7, 10, 15];
var arr2 = ["test", 1, true, function() {}, {}, []];

arr[3]; // 5
arr.length; // 7

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);

sum = 0;
arr.forEach(function(value) {
    sum = sum + value;
});

sum = 0;
arr.forEach((value, index, a) => {
    sum = sum + value;
});

arr.every((value) => {
    return value > 0;
});

for (var i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
}

arr.concat(arr2);

var result = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        result.push(arr[i]);
    }
}

var result2 = arr.filter(value => value > 5);

arr.indexOf(3);

var testObj = {};
var testArr = [testObj, { name: 'test' }];
testArr.indexOf(testObj);

arr.map(value => value + 1);

arr.reduce((r, v) => r + v);

arr = [15, 3, 7, 10, 1, 25];
// arr.sort((a, b) => a > b);

/*
arr = ["a", "cccc", "bb", "ffffffffff"];
arr.sort((a, b) => a.length > b.length);
*/

var result = arr.map(value => value);
// JSON.parse(JSON.stringify(arr))

var temp;
var repeat = true;

while (repeat) {
    repeat = false;

    for (var i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i + 1]) {
            temp = result[i];
            result[i] = result[i + 1];
            result[i + 1] = temp;

            repeat = true;
        }
    }
}

// n^2