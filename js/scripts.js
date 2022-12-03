var text1 = "Hello";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';

var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!

var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!
