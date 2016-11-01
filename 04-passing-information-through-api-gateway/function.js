'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
	let min = event.min;
	let max = event.max;

	let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	callback(null, generatedNumber);
}