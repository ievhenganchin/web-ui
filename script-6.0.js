var Truck = function (speed) {
    var privateSpeed = speed;

    this.getSpeed = function () {
        return privateSpeed;
    }
}

Truck.prototype.drive = function () {
    console.log('Driving on ' + this.getSpeed() + 'kms per hour');
}

var Car = function (wheels, speed) {
    Truck.call(this, speed);

    var privateWheels = wheels;

    this.getWheels = function () {
        return privateWheels;
    }
}

Car.prototype = Object.create(Truck.prototype);