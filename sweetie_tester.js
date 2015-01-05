var fs = require('fs');
console.log("Running Sweetietester 0.0.2");
var totalNumberOfTests = 0;
var totalNumberOfTestsInsufficientInfo = 0;
var totalNumberPassed = 0;
var totalNumberFailed = 0;

function assert(message, booleanCondition) {
    if(message==undefined || booleanCondition==undefined) console.log("ERROR - incorrect usage. expected assert(message:String, testCondition:Boolean)");
    totalNumberOfTestsInsufficientInfo++;
    else if(booleanCondition) console.log("PASSED - "+message);
    totalNumberPassed++;
    else console.log("FAILED - "+message);
    totalNumberFailed++;
    totalNumberOfTests++;
}

var testFileContent = fs.readFileSync('./spec.js').toString();
eval(testFileContent);

console.log("Number of tests passed"+totalNumberPassed+", number of tests failed"+totalNumberFailed+", number of tests with insufficient information"+totalNumberOfTestsInsufficientInfo+", total number of tests"+totalNumberOfTests)
console.log("Test complete");