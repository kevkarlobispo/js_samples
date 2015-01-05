function extendCopy(p) {
    var c = {};
    
    for (var i in p) {
        c[i] = p[i];
    }
    return c;
}

var shape = {
    name: 'Shape',
    toString: function() {
        return this.name;
    }
}

var twoDee = extendCopy(shape);
twoDee.toString = 'changed';

// check shape.name
shape.name;



/*
    inheritance mechanism using: "stealing constructor" + "prototypal inheritance"
    via Object.create();
*/
// Base function
function BaseController(id) {
    this.id = id;
    this.toString = function() {
        return this.name;
    }
}
BaseController.prototype.name = 'BaseController'

// the extending function
function Controller() {
	BaseController.apply(this, arguments);
}

Controller.prototype = Object.create (BaseController.prototype);
Controller.prototype.constructor = Controller; 
Controller.prototype.name = 'Controller';

var currentController = new Controller(101);
currentController.id;
currentController.name;
currentController.toString();

currentController.toString = function() {
    return this.name + ' edited';
}
BaseController.prototype.toString();
    
    
