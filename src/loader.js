/**
 * Load an array of images to simulate a loader
 * @param {array}  images   Array of images to load
 * @param {object} options  Options to be passes
 */
function Loader(images, options) {
	'use strict';

	if (!(this instanceof Loader)) return new Loader(images, options);

	var L = this;
	// Set all the default options
	L.attr        = options.attr || 'src';
	L.onImageLoad = options.onImageLoad || function() {};
	L.onComplete  = options.onComplete || function() {};

	// Create empty array for the new images
	var newImages = [];
	// None is yet loaded
	var imagesLoaded = 0;
	var totalImages = images.length;

	// Return if there are no images
	if (!totalImages) return;

	for (var i = 0; i < totalImages; i++) {
		// Get the image source
		images[i]._src = images[i] ? images[i].getAttribute(L.attr) : '';

		// Create a new image
		newImages[i] = new Image();
		// Store the index
		newImages[i]._i = i;

		// Bind the `onLoad` function to the `load` event
		newImages[i].addEventListener('load', onLoad);
	}

	// Load the first image
	newImages[0].src = images[0]._src;

	// Load function
	function onLoad() {
		// Increment the number of loaded images
		imagesLoaded++;
		// Calculate the new percentage
		var percentage = Math.round(100 / totalImages * imagesLoaded);
		// Launch callback when this image is loaded
		L.onImageLoad(percentage);

		// Load the next image only when this one is loaded
		if (this._i + 1 < totalImages) {
			var nextIndex = this._i + 1;
			newImages[nextIndex].src = images[nextIndex] ? images[nextIndex].getAttribute(L.attr) : '';
		}

		// Launch callback when all images are loaded
		if (imagesLoaded === totalImages) {
			L.onComplete();
		}
	}

	return this;
}