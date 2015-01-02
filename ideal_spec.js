function Person(name) {
    return {
        name: function() {
            return name;
        }
    }
}

var tommy = Person('tommy');

console.log("name of person is "+tommy.name());

describe('Person', function() {
    var subject;
    var name;
    var p2;
    beforeEach(function() {
        subject = Person(name, p2, p3, p4);
    });
    context('when constructed with tommy', function() {
        name = 'tommy';
        context('and p2 is true', function() {
            p2 = true
            it('should be named tommy', function() {
                expect(subject.name()).toEqual('tommy');
            });
        });
    });
    context('when constructed with esa-matti', function() {
        name = 'esa-matti';
        it('should be named esa-matti', function() {
            expect(subject.name()).toEqual('esa-matti');
        });
    });
});

//describe('Person', function() {
//    subject(function() { return Person(name())});
//    describe('name()', function() {
//        context('when I create a person with name tommy', function() {
//            define('name', function() { return 'tommy'; });
//            it('should return tommy', function() {
//                expect(subject.name()).toEqual('tommy');
//            });
//        });
//        context('when I create a person with name esa-matti', function() {
//            define('name', function() { return 'esa-matti'; });
//            it('should return esa-matti', function() {
//                expect(subject.name()).toEqual('esa-matti');
//            });
//        });
//    });
//});