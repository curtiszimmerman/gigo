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

describe ('gigo: garbage-in, garbage-out: soviet-style storage', function() {
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

	describe ('#push', function() {
		it ('appends data onto specified list', function() {
			gigo.push('foo', 'bar', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.get(): '+err);
				expect(result).to.equal(true);
			});
		});
	});
	describe ('#pop', function() {
		it ('removes value from the end of specified list and returns it', function() {
			gigo.pop('foo', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.get(): '+err);
				expect(result).to.equal('bar');
			});
		});
	});
	describe ('#unshift', function() {
		it ('prepends data onto specified list', function() {
			gigo.unshift('foo', 'bar', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.get(): '+err);
				expect(result).to.equal(true);
			});
		});
	});
	describe ('#shift', function() {
		it ('removes value from beginning of specified list and returns it', function() {
			gigo.shift('foo', function(err, result) {
				if (err) throw new Error('TEST: error in gigo.get(): '+err);
				expect(result).to.equal('bar');
			});
		});
	});
});