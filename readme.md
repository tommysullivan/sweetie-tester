SweetieTester 0.0.2
-------------------

Write Tests:

    Tests must be expressed in a single file named spec.js. This file may contain any valid javascript.
    There is a single testing function, which takes the form:

    assert(message:String, testCondition:Boolean):Undefined

Example Test:

    assert("5 is greater than 3", 5 > 3);  // output: PASS - 5 is greater than 3
    assert("3 is greater than 5", 3 > 5);  // output: FAIL - 3 is greater than 5

Run SweetieTester:

    from the directory containing your spec.js file, run "node sweetie_tester"