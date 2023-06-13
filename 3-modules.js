//jshint esversion:6
//CommonJS, every file is module(by default)
// Modules-Encapsulated Code(only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor.js');
require('./7-mind-grenade.js');
// console.log(data);
//console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
