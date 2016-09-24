
// Require lib 'connect' and initilialize a variable:
var connect = require('connect');
var runApp = connect();

// Require the package main file 'lab3':
var labMethod = require('./lab3');

// Initlialize website directory:
runApp.use('/lab3',labMethod.lab3);
runApp.use('/',labMethod.root);
runApp.use(labMethod.generic);

// Establish server conncetion:
runApp.listen(3000);
console.log('Lab3 -> Connected to localhost:3000, with NODEmon');