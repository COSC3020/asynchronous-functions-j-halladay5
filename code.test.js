const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var test1 = (0,4,4,4,2,2,2,6,6,6,1,8,7,3,4,2);
var count4Test1 = 4;
var count6Test1 = 3;

var test2 = (0,0,0,0,3,3,3,1,2,6,7,5,3,0,5,5,5,5,7,0,13,4,0);
var count0Test2 = 7;
var count5Test2 = 5;

assert(JSON.stringify(countOccurancesAsync(test1, 4)) == JSON.stringify(4));
assert(JSON.stringify(countOccurancesAsync(test1, 6)) == JSON.stringify(3));
assert(JSON.stringify(countOccurancesAsync(test2, 0)) == JSON.stringify(7));
assert(JSON.stringify(countOccurancesAsync(test2, 5)) == JSON.stringify(5));
