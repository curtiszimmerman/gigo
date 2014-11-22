
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

	var redis = require('redis');

	var $data = {
		client: redis.createClient()
	};

	var $lib = {
		redis: require('redis')
	};

	var $func = {
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
			return false;
		},
		open: function( db ) {
			// open the specified database
			return false;
		},
		remove: function( key ) {
			// remove the specified key and associated data
			return false;
		},
		set: function( key, value, callback ) {
			// set the data associated with a specified key
			return false;
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