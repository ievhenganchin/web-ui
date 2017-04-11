var User = function(login, pass, age) {
    var password = pass || '';

    this.login = login || '';
    this.age = age || 25;

    this.getPassword = function() {
        return password;
    }
}

User.prototype.signIn = function() {
        console.log(this.login + " is authenticated");
    }



// User.prototype = Object.create(Object.prototype);

var usr = new User('tom', '12345', 35);
var usr2 = new User();

// usr instanceof User

/*

var usr = {};
User.call(usr);

*/

var Admin = function(login, pass, age) {
    // this = {}
    User.call(this, login, pass, age);
    // User.apply(this, [login, pass, age]);
    // User.bind(this); User(login, pass, age);

    this.bannedUsers = [];
}

Admin.prototype = Object.create(User.prototype);
// Admin.prototype = new User(...);

Admin.prototype.banUser = function(user) {
    if (user) {
        this.bannedUsers.push(user);
    }
}

Admin.prototype.signIn = function() {
    console.log(this.login + " is authenticated as Admin");
}

var adm = new Admin('sara', '14214142', 45);

