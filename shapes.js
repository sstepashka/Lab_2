function Shape(_x, _y) {
    var x = _x;
    var y = _y;

    this.getX = function() {
        return x;
    };

    this.setX = function(___x) {
        x = ___x;
    };

    this.getY = function() {
        return y;
    };

    this.setY = function(___y) {
        y = ___y;
    };
}

Shape.prototype.move = function (__x, __y) {
    this.setX(this.getX() + __x);
    this.setY(this.getY() + __y);
};

function Circle(_x, _y, _r) {
    Shape.apply(this, [_x, _y]);

    var r = _r;

    this.getR = function() {
        return r;
    };

    this.setR = function(___r) {
        r = ___r;
    };
}

Circle.prototype = new Shape();

Circle.prototype.toString = function()
{
    return "Circle X = " + this.getX() + " Y = " + this.getY() + " R = " + this.getR();
};

function Rectangle(_x, _y, _w, _h) {
    Shape.apply(this, [_x, _y]);

    var w = _w;
    var h = _h;

    this.getW = function() {
        return w;
    };

    this.setW = function(___w) {
        h = ___w;
    };

    this.getH = function() {
        return h;
    };

    this.setW = function(___h) {
        h = ___h;
    };
}

Rectangle.prototype = new Shape();

Rectangle.prototype.toString = function()
{
    return "Rectangle X = " + this.getX() + " Y = " + this.getY() + " W = " + this.getW() + " H = " + this.getH();
};

function Box(_x, _y, _s) {
    Rectangle.apply(this, [_x, _y]);

    var s = _s;

    this.getW = function() {
        return s;
    };

    this.setW = function(___w) {
         s = __w;
    };

    this.getH = function() {
        return s;
    };

    this.setW = function(___h) {
        s = ___h;
    };

    this.getS = function() {
        return s;
    };

    this.setS = function(___s) {
        s = ___s;
    };
}

Box.prototype = new Rectangle();

Box.prototype.toString = function()
{
    return "Box X = " + this.getX() + " Y = " + this.getY() + " S = " + this.getW();
};

function Composite() {
    Shape.apply(this, []);

    var _array = [];

    this.push = function (_shape) {
        _array.push(_shape);
    };

    this.move = function (___x, ___y) {
        for (var shape in _array) {
            _array[shape].move(___x, ___y);
        }
    };

    this.toString = function()
    {
        var result = "Composite Begin\n";
        for (var shape in _array) {
            result += _array[shape] + "\n";
        }

        result += "Composite End\n";

        return result;
    };
}
