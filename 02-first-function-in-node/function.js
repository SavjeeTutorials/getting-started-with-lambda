'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
	let min = 0;
	let max = 10;

	let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	callback(null, generatedNumber);
}