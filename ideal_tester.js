var fs = require('fs');
console.log("Running IdealTester 0.0.1");

function describe(describeText, describeBlock) {
    //TODO: Nested describe text should be added to the stack.
    var subjectBlock = function() { throw "No subject" }
    function subject(theSubjectBlock) {
        subjectBlock = theSubjectBlock;
    }
    var defineBlocks = {}
    function define(name, defineBlock) {
        defineBlocks[name]=defineBlock;
    }
    function it(itText, itBlock) {
        var itFullText = [describeText,itText].join(' ');
        function expect(actualValue) {
            return {
                toEqual: function(expectedValue) {
                    if(actualValue==expectedValue) console.log(itFullText+' - PASSED');
                    else console.log(itFullText+' - FAILED - expected: '+expectedValue+', got: '+actualValue);
                }
            }
        }
        function name() { return 'tommy'; }
        var subject = subjectBlock();
        eval('var evaledItBlock = '+itBlock.toString());
        evaledItBlock();
    }
    eval('var evaledDescribeBlock = '+describeBlock.toString());
    evaledDescribeBlock();
}

var context = describe;

var testFileContent = fs.readFileSync('./ideal_spec.js').toString();
eval(testFileContent);

console.log("Test complete");