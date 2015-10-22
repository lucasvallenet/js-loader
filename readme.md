# Loader

js-loader is a script that simulates a loader by loading one image after another. It allows you to run a callback after each image loaded and also when all images are loaded. You'll be able to use a loading percentage that is updated after each image loaded to animate your loader for example.

Used for the loader on [Signes du quotidien](http://signesduquotidien.org/).

## Use

```js
var images = [
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">',
	'<img data-src="image.jpg">'
];

var loader = new Loader(images, {
	attr: 'data-src',
	onImageLoad: function(percentage) {
		console.log(percentage);
	},
	onComplete: function() {
		console.log('Chargement terminé !');
	}
});
```
