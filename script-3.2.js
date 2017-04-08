// 1
// deep copy

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
    work: function() {
        console.log(this.name + ' is working');
    }
}

// => copy person
var person2 = copy(person);
person2.name = 'BlaBla';
person2.work(); // BlaBla is working
person.work(); // test is working

// use => for (var key in obj)

// 2
// comapre two objects by values (ignore functions)
// in case if 1st task isn't completed = function copy(obj) { return JSON.parse(JSON.stringify(obj)); }

var person2 = copy(person);
compare(person, person2); // true
person2.name = 'BlaBla';

compare(person, person2); // false