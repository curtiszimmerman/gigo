
#gigo

Garbage-in-garbage-out: Soviet-style storage.

###details

gigo is "soviet-style storage" because it is very practical. it does not have a lot of 
bells and whistles and isn't terribly efficient or fast. it does what it says on the 
tin; no more, no less.

###installation

```sh
npm install gigo
```

###usage

gigo just needs to be required like any module:

```javascript
var gigo = require("gigo");
```

gigo can be used for very simple storage:

```javascript
gigo.set("name", "gigo");
console.log( "name is: " + gigo.get("name") );
// name is: gigo
```

it's aware of different kinds of data...

```javascript
var result = {
	bar: 0,
	foo: true
};
gigo.set("serialized", result);
var restored = gigo.get("serialized");
if( restored.foo === true ) {
	console.log("foo is true!");
	// foo is true!
}
gigo.remove("serialized");
console.log( typeof( gigo.get("serialized") ) );
// undefined
```

...but it keeps to its original promise of returning what it was given

```javascript
var send = function( client ) {
	var pic = gigo.get("pic");
	// ... send to client via HTTP response or whatever
	client.send(pic);
};
var file = function( filename ) {
	fs.readFile(filename, function(err, data) {
		if (err) return console.log(err), err;
		gigo.set("pic", data);
	});
};
```

###license

licensed under gpl v3

