'use strict';
var empty = require('is-empty');
var trim = require('trim');

module.exports = function (id, lang) {
	// Default value for the language argument.
	lang = typeof lang === 'string' ? lang : 'us';

	// Check if id is string and not empty.
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string for id.');
	}
	if ( empty(id) ) {
		throw new TypeError('The application id mustn\'t be empty.');
	}

	// Apple iTunes Store link parts.
	var linkBits = {
		'pre-locale': 'https://itunes.apple.com/',
		'pre-id': '/app/id'
	}

	// Remove leading/trailing white space.
	id = trim(id);
	lang = trim(lang);

	return linkBits['pre-locale'] + lang + linkBits['pre-id'] + id;
};
