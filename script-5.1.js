function test2() {
    this.aaaaaaa = 'test';
}

function test() {
    test2();
}

var obj = {};
test2.bind(obj);

test();