const fs = require("fs");
const jsc = require("jsverify");
const assert = require("assert");

eval(fs.readFileSync('code.js') + '');

const testCountOccurrencesAsync = () => {
  return jsc.forall(jsc.array(jsc.integer), jsc.integer, async (array, key) => {
    const occurrences = await countOccurrencesAsync(array, key);
    return occurrences === array.filter(x => x === key).length;
  });
};


jsc.assert(testCountOccurrencesAsync());
