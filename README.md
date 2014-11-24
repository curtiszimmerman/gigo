
#gigo

Garbage-in-garbage-out: Soviet-style storage.

![Travis CI Build Status](https://travis-ci.org/curtiszimmerman/gigo.svg)

###description

gigo is a mostly key-value data store. you give it data, it will store it. gigo is 
"soviet-style storage" because it is very practical. it does not have a lot of bells 
and whistles and isn't terribly efficient or fast. it does what it says on the tin; 
no more, no less. in fact, gigo has only one bell or whistle, and that's its `bind()` 
method, which gives you the ability to create more complex relationships between 
data using simple JSON descriptor objects.

###installation

```sh
npm install gigo
```

###usage

##(NOTE: this readme is a work in progress and the usage examples probably don't work)

gigo just needs to be required like any module:

```javascript
var gigo = require("gigo");
```

gigo can be used for very simple storage:

```javascript
gigo.set("name", "gigo", function(err, result) {
	console.log( "name is: " + gigo.get("name") );
	// name is: gig
});
```

it's aware of different kinds of data...

```javascript
var stuff = {
	bar: 0,
	foo: true
};
gigo.set("serialized", stuff, function(err, result) {
	gigo.get("serialized", function(err, result) {
		if( restored.foo === true ) {
			console.log("foo is true!");
			// foo is true!
		}
		gigo.remove("serialized", function(err, result) {
			console.log( typeof( gigo.get("serialized") ) );
			// undefined
		});
	});
});
```

...but it keeps to its original promise of returning what it was given:

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

gigo lets you use list operations (push/pop, unshift/shift):

```javascript
// array ops examples
```

gigo pays attention when you describe relationships between things:

```javascript
var file = function( filename, callback ) {
	fs.readFile(filename, function(err, data) {
		return typeof( callback ) === "function" && callback( err || null, data );
	});
};
var image = {
	name: "theme.jpg",
	data: null
};
file(image.name, function(err, data) {
	if (err) return console.log(err), err;
	gigo.set("/image/theme", data, function(err) {
		if (err) return console.log(err), err;
		gigo.bind(image.data, "image:theme");
	});
})
```

gigo can do some complex things, despite its simple nature:

```javascript
var file = function( filename, callback ) {
	fs.readFile(filename, function(err, data) {
		return typeof( callback ) === "function" && callback( err || null, data );
	});	
};
var data = {
	files: ['index.html', 'site.js', 'default.css'],
	images: [],
	theme: false
};
var Image = function(filename) {
	filename: "theme.jpg",
	data: null
};

file("soundtrack.mp3", function( data ) {
	gigo.set("/presentation/theme", data, function(err) {
		if (err) return console.log(err), err;
		gigo.bind(data.theme, "presentation:theme");
	});
});
file("background.jpg", function( data ) {
	gigo.set("/presentation/images/background", data, function(err) {
		if (err) return console.log(err), err;
		file("logo.jpg", function( data ) {
			gigo.set("/presentation/images/logo", data, function(err) {
				if (err) return console.log(err), err;
				gigo.bind(stuff, "things");
				// finish this up
			});
		});
	});
});

```

###tests

gigo uses mocha and chai:

```sh
npm test
```

###contributors

contributions to gigo are welcome. however, changes which are mostly stylistic 
or semantic will not be accepted. if you submit a patch or pull request, please 
understand that accepting the changes may take time, at least until science 
invents 96-hour days.

###license

licensed under gpl v3

