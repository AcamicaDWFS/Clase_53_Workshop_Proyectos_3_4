const assert = require("assert");

function id(x) {
    return x;
}

//assert.strictEqual(id(2), 2);
//assert.strictEqual(id(2), 3);


const errorMsg = ' is not even';
for (let number = 1; number <= 5; number += 1) {
    console.info(`the # is ${number}`);
    console.assert(number % 2 === 0, number, errorMsg);
}