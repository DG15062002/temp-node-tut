//jshint esversion : 6
// npm - global command, comes with nde
// npm --esversion

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file ( stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, enter to skip)
// npm init -y(everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
//flat and deep method
const newItems = _.flattenDeep(items);
console.log(newItems);
