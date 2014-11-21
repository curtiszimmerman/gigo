
/**
 * @project GIGO
 * garbage-in-garbage-out: soviet-style storage
 * @file gigo.js
 * @author curtiszimmerman
 * @contact curtis.zimmerman@gmail.com
 * @license GPLv3
 * @version 0.0.1a
 */

/**********************************************
 Installation:
 npm install gigo

 Usage:
 var gigo = require('gigo');
**********************************************/

var exports = module.exports = __gigo = (function() {
	"use strict";

	var $data = {};

	var $func = {
		get: function( key ) {
			return false;
		},
		set: function( key, value ) {
			return false;
		}
	};

	return {
		get: $func.get,
		set: $func.set
	};
})();