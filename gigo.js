
/**
 * @project GIGO
 * garbage-in-garbage-out: soviet-style storage
 * @file gigo.js
 * @author curtiszimmerman
 * @contact curtis.zimmerman@gmail.com
 * @license GPLv3
 * @version 0.0.1a
 */

var exports = module.exports = __gigo = (function() {
	"use strict";

	var _lib = {
		redis: require('redis')
	};

	var $classes = {
		Data: function( key, value ) {
			var key = typeof(key) !== 'undefined' ? key : null;
			var value = typeof(value) !== 'undefined' ? value : null;
			this.length = value === null ? null : value.length;
			this.key = key;
			this.type = typeof(value);
			this.value = value;
		}
	};

	var $data = {
		redis: _lib.redis.createClient(),
		settings: {
			prefix: '/data/gigo'
		}
	};

	var $func = {
		bind: function( descriptor ) {
			// bind multiple gigo objects together
			return false;
		},
		close: function( db ) {
			// close the specified database
			return false;
		},
		config: function( descriptor ) {
			// config this isntance of gigo
			return false;
		},
		drop: function( db ) {
			// drop the specified database
			return false;
		},
		get: function( key, callback ) {
			// get the data associated with the specified key
			if (typeof(key) === 'undefined') return false;
			$data.redis.get($data.settings.prefix+key, function(err, result) {
				var data = JSON.parse(result);
				return typeof(callback) === 'function' && err ? callback(err) : callback(null, data.value);
			});
			return true;
		},
		link: function( source, target ) {
			// link a gigo object to another gigo object
			return false;
		},
		map: function( object ) {
			// map the provided object to gigo internal object
			return false;
		},
		open: function( db ) {
			// open the specified database
			return false;
		},
		remove: function( key, callback ) {
			// remove the specified key and associated data
			if (typeof(key) === 'undefined') return false;
			$data.redis.del($data.settings.prefix+key, function(err, result) {
				return typeof(callback) === 'function' && err ? callback(err) : callback(null, result);
			});
			return true;
		},
		set: function( key, value, callback ) {
			// set the data associated with a specified key
			if (typeof(key) === 'undefined') return false;
			if (typeof(value) === 'undefined') return false;
			var data = new $classes.Data($data.settings.prefix+key, value);
			$data.redis.set(data.key, JSON.stringify(data), function(err, result) {
				return typeof(callback) === 'function' && err ? callback(err) : callback(null, true);
			});
			return true;
		}
	};

	var $util = {
		base64: function( string, type ) {
			return false;
		},
		genGUID: function() {
			return false;
		},
		genID: function( len ) {
			return false;
		}
	};

	return {
		bind: $func.bind,
		close: $func.close,
		config: $func.config,
		drop: $func.drop,
		get: $func.get,
		open: $func.open,
		remove: $func.remove,
		save: $func.save,
		set: $func.set
	};
})();