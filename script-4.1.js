var result = increment(0, 1, 10); // 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

for (var i = 0, sum = 0; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);

function increment(sum, i, end) {
    if (i > end) {
        return sum;
    }

    return increment(sum + i, i + 1, end);
}

var result = increment(0, 1, 10);

/*

increment(0, 1, 10)
    increment(1, 2, 10)
        increment(3, 3, 10)
            increment(6, 4, 10)
                increment(10, 5, 10)
                    increment(15, 6, 10)
                        increment(21, 7, 10)
                            increment(28, 8, 10)
                                increment(36, 9, 10)
                                    increment(45, 10, 10)
                                        increment(55, 11, 10)

*/