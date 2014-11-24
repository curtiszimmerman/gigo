
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
		prefix: {
			admin: 'gigo:admin:',
			data: 'gigo:data:',
			root: 'gigo:',
			special: 'gigo:special:'
			groups: {}
		},
		settings: {
			redis: {
				host: '127.0.0.1',
				port: 6379
			}
		}
	};

	var $group = $data.prefix.groups.data;
	var $redis = _lib.redis.createClient();

	var $func = {
		bind: function( descriptor ) {
			// bind multiple gigo objects together
			return false;
		},
		close: function( group ) {
			// close the specified database group
			return false;
		},
		config: function( descriptor ) {
			// config this instance of gigo
			if (typeof(descriptor) === 'undefined') return false;
			var host = typeof(descriptor.host) !== 'undefined' ? descriptor.host : 'localhost';
			var port = typeof(descriptor.port) !== 'undefined' ? descriptor.port : 6379;
			$redis = _lib.redis.createClient();
			return false;
		},
		drop: function( group ) {
			// drop the specified database group
			return false;
		},
		get: function( key, callback ) {
			// get the data associated with the specified key
			if (typeof(key) === 'undefined') return false;
			$redis.get($group+key, function(err, result) {
				var data = JSON.parse(result);
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, data.value) : true;
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
		open: function( group ) {
			// open the specified database group
			return false;
		},
		pop: function( list, callback ) {
			// pop an element off the specified list
			if (typeof(list) === 'undefined') return false;
			$redis.rpop($group+list, function(err, result) {
				var data = JSON.parse(result);
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, data.value) : true;
			});
			return false;
		},
		push: function( list, value, callback ) {
			// push a value on the specified list
			if (typeof(list) === 'undefined') return false;
			if (typeof(value) === 'undefined') return false;
			var data = new $classes.Data($data.prefix.data+key, value);
			$redis.rpush($group+list, JSON.stringify(data), function(err, result) {
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, true) : true;
			});
			return false;
		},
		remove: function( key, callback ) {
			// remove the specified key and associated data
			if (typeof(key) === 'undefined') return false;
			$redis.del($group+key, function(err, result) {
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, result) : true;
			});
			return true;
		},
		select: function( group ) {
			// select the specified group for writing
			return false;
		},
		set: function( key, value, callback ) {
			// set the data associated with a specified key
			if (typeof(key) === 'undefined') return false;
			if (typeof(value) === 'undefined') return false;
			var data = new $classes.Data($data.prefix.data+key, value);
			$redis.set($group+data.key, JSON.stringify(data), function(err, result) {
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, true) : true;
			});
			return true;
		},
		shift: function( list, callback ) {
			// shift element off list and return it
			if (typeof(list) === 'undefined') return false;
			$redis.lpop($group+list, function(err, result) {
				var data = JSON.parse(result);
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, data.value) : true;
			});
			return true;
		},
		unshift: function( list, value, callback ) {
			if (typeof(list) === 'undefined') return false;
			if (typeof(value) === 'undefined') return false;
			var data = new $classes.Data($data.prefix.data+key, value);
			$redis.lpush($group+list, JSON.stringify(data), function(err, result) {
				return typeof(callback) === 'function' ? err ? callback(err) : callback(null, true) : true;
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
		link: $func.link,
		map: $func.map,
		open: $func.open,
		pop: $func.pop,
		push: $func.push,
		remove: $func.remove,
		select: $func.select,
		set: $func.set
	};
})();