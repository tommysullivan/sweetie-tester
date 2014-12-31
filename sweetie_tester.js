var fs = require('fs');
console.log("Running Sweetietester 0.0.2");

function assert(message, booleanCondition) {
    if(message==undefined || booleanCondition==undefined) console.log("ERROR - incorrect usage. expected assert(message:String, testCondition:Boolean)");
    else if(booleanCondition) console.log("PASSED - "+message);
    else console.log("FAILED - "+message);
}

var testFileContent = fs.readFileSync('./spec.js').toString();
eval(testFileContent);

console.log("Test complete");