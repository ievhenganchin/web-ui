var Square = function(a) {
    this.a = a;
}

Square.prototype.sides = function() {
    return [this.a, this.a, this.a, this.a];
}

Square.prototype.S = function() {
    var sides = this.sides();
    return sides[0] * sides[1];
}

Square.prototype.P = function() {
    return sides[0] + sides[1] + sides[2] + sides[3];
}

var Rectangle = function(a, b) {
    Square.call(this, a);

    this.b = b;
}

Rectangle.prototype = Object.create(Square.prototype);

Rectangle.prototype.sides = function() {
    return [this.a, this.b, this.a, this.b];
}

var Quadrangle = function(a, b, c, d) {
    Rectangle.call(this, a, b);

    this.c = c;
    this.d = d;
}