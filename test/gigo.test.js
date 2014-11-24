/**
 * @project GIGO
 * Garbage-in-garbage-out: Soviet-style storage
 * @file gigo.test.js
 * Tests for gigo.js
 * @author curtis zimmerman
 * @contact curtis.zimmerman@gmail.com
 * @license GPLv3
 * @version 0.0.1a
 */

var expect = require('chai').expect;
var gigo = require('../gigo.js');

describe( 'gigo', function() {

	describe ('#set', function() {
		it ('executes callback with boolean success', function() {
			gigo.set('foo', 'bar', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.set(): '+err);
				expect(result).to.equal(true);
			});
		});
	});

	describe ('#get', function() {
		it ('executes callback with specified key data', function() {
			gigo.get('foo', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.get(): '+err);
				expect(result).to.equal('bar');
			});
		});
	});

	describe ('#remove', function() {
		it ('removes a key-value from the store', function() {
			gigo.remove('foo', function(err, result) {
				expect(result).to.equal(1);
			});
		});
		it ('removes zero key-values from the store when passed non-existant keys', function() {
			gigo.remove('existentialcrisis', function(err, result) {
				expect(result).to.equal(0);
			});
		});
	});
});