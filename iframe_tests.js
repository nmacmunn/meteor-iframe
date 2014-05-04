Tinytest.add('IFrame - Should be false when running tests', function (test) {
    test.isFalse(iframe());
});

Tinytest.add('IFrame - Global helper is defined', function (test) {
    test.equal(typeof UI._globalHelper('iframe'), 'function');
});
