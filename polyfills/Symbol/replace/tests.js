var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { // this is IE 8.
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

it('has the well known symbol replace as static properties on Symbol', function() {
	expect(Symbol.replace).to.not.be.undefined;

	if (supportsDescriptors) {
		var replace = Symbol.replace;
		Symbol.replace = "nope";
		expect(Symbol.replace).to.be(replace);
	}
});
