var Cars = (function() { // => namespace
    var Car = function(wheels, speed) {
        var privateWheels = wheels;
        var privateSpeed = speed;

        this.getWheels = function() {
            return privateWheels;
        }

        this.getSpeed = function() {
            return privateSpeed;
        }
    }

    Car.prototype.drive = function() {
        console.log('Driving on ' + this.getSpeed() + 'kms per hour');
    }

    var Truck = function(speed) {
        Car.call(this, 6, speed);

        this.getWheels = function() {
            throw 'Тут жопа';
        }
    }

    Truck.prototype = Object.create(Car.prototype);

    var Bycicle = function() {
        Car.call(this, 2, 20);
    }

    Bycicle.prototype = Object.create(Car.prototype);

    return {
        Truck: Truck,
        Bycicle: Bycicle
    }
})();

/*

var init() {....}

var Cars = init();
init = undefined;

*/

// var c = new Car(4, 50);
var t = new Cars.Truck(20);
var b = new Cars.Bycicle();