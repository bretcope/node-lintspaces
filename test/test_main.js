var
	path = require('path'),
	Validator = require('../index')
;

require('should');

describe('main', function() {
	var validator = new Validator({
		newline: true,
		indentation: 'tabs',
		trailingspaces: true,
		ignores: [
			'js-comments'
		]
	});

	it('the validator should be valid ;-)', function() {
		var p = path.join(__dirname, '../lib/validator.js');

		validator.validate(p);
		validator.getInvalidLines(p).should.be.empty;
	});
});