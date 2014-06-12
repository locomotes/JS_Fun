// Homework June 11th

// addition 
var testing = function() {
    var building1 = 5000;
    var building2 = 2500;
    var building3 = 3500;
    console.log(building1 + building2 + building3);
};
testing();

// subtraction
var subtract = function() {
    var num1 = 73;
    var num2 = 13;
    var num3 = 4;
    console.log(num1 - num3 - num2);
};
subtract();

// multiplication
var mult = function() {
    return (43 * 12);
};
mult();

// division
var div = function() {
    return (200 / 12);
}
div();

// Preform some simple conditional statements using "if" and "else" and make sure to use variables
var par = function() {
    var x = 43;
    if (x > 8) {
        return ("xwins");
    } else {
        return ("xlooses");
    }
};
par();

var sixpackofbeer = function(y) {
    if (y === 6) {
        return ("drink");
    } else {
        return ("ask for a discount");
    }
};
sixpackofbeer();

// Create 10 different objects whose properties have a mix of the following value types 
//(you must use each one at least once)
// Number, String, Array, Function, Object

var house = {
    doors: 3,
    color: "orange",
    rooms: 3,
    garage: {
        windows: 3,
        doors: 1
    }
};

var evenjumps = {
    even_number: [2, 4, 6, 8, 10]
};

var party = {
    dance: 2,
    funky: function() {
        alert("it's running")
    }
};

var woodworking = {
    tablesaw: 1,
    hammer: 2,
    wood: {
        whitepine: 1,
        cedar: 3,
        oak: 6
    }
};

var oddjumps = {
    odd_number: [1, 3, 6, 9, 11]
};