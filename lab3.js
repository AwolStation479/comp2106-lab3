// Require lib 'url':
var url = require('url');

// Select means of calculation:
var calc = function(oper,x,y) {
  return  oper === 'add'?   x+y:
          oper === 'sub'?   x-y:
          oper === 'mult'?  x*y:
          oper === 'div'?   x/y:
          oper === 'exp'?   Math.pow(x,y):
          'Error: Something went wrong!';
};

// Create methods for site launch:
exports.lab3 = function(req,res,next) {
    // Read URL for input:
    var queryString = url.parse(req.url,true).query;
    
    // Set operand to URL input::
    var operand = queryString.oper;
    
    // Set x and y accordingly:
    var x = parseFloat(queryString.x);
    var y = parseFloat(queryString.y);
    
    // List all valid operands:
    var validOp = ['add','sub','mult','div','exp'];
    var opSymbol = ['+','-','*','/','^'];
    
    // If the user makes an invalid choice:
    if (validOp.indexOf(operand) === -1) {
        res.end('Error: Invalid arithmatic operation!');
    }    
    // If the user's operand is a valid choice:
    else {
        // Make the calculation:
        var result = calc(operand,x,y);
        // Choose the relevant operand symbol:
        var userOp = opSymbol[validOp.indexOf(operand)];
        // Display the result to the user:
        res.end(x+' '+userOp+' '+y+' = '+result);
    }    
};

exports.root = function(req,res,next) {
    // Display welcome message with instructions:
    res.end('Welcome to the calculator!'+
            '\nPlease choose from:'+
            '\n\t[add]\n\t[sub]\n\t[mult]\n\t[div]\n\t[exp]'+
            '\nThen, set x and y!'
            );
};

exports.generic = function(req,res,next) {
    // Display error message:
    res.end('Lab3, ERROR 404: Page not found!');
};