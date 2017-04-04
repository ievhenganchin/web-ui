var obj = {};

var obj2 = {
    a: 10,
    b: true,
    c: function() {},
    test: 'askflsakflksaflkf',
    'dsfdf': {}
}

typeof(obj2.c) == 'boolean'; // true

typeof(obj2['c']) == 'boolean'; // true

function getField(dskjfhkjdshfkjds) {
    // var dskjfhkjdshfkjds = undefined;

    // dskjfhkjdshfkjds = 'test';

    return obj2[dskjfhkjdshfkjds]; // obj2['test']
}

getField('test'); // 'askflsakflksaflkf'
getField('aaa'); // undefined

obj2.aaa = 'wrwqrqrw';
getField('aaa'); // 'wrwqrqrw'

obj2.a = 20;

var f = (function() {
    var obj = {
        a: 10,
        b: 20
    };

    return function(field) {
        return obj[field];
    }
})();

f('a'); // => 10
f('aaa'); // => undefined

/*

var obj = {
    a: 10,
    b: 20
}

1) Написать функцию, которая добавляет в объект obj поле с соотв. значением function addKey(key, value)

addKey('test', 50);

obj.test => 50

2*) Написать функцию, которая суммирует все поля объекта (Google) function sum()

addKey('test', 50);
addKey('test2', 150);
addKey('test50', 50);

sum() => 280

*/