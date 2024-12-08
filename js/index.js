'use strict';

const testString = typeof 'Dnipro';
console.log(testString);

const testNumber = typeof 25;
console.log(testNumber);

const testTrueOfFalse = typeof true;
console.log(testTrueOfFalse);

const testNull = typeof null;
console.log(testNull);

let testUndefined;
console.log(typeof testUndefined);

const testSymbol = typeof Symbol();
console.log(testSymbol);

const testBigint = typeof 9007199254740991n;
console.log(testBigint);