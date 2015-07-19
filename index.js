'use strict';
var empty = require('is-empty');
var trim = require('trim');

module.exports = function (id, lang, developer) {

	// Check if id is string and not empty.
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string for id.');
	}
	if ( empty(id) ) {
		throw new TypeError('The application id mustn\'t be empty.');
	} else {
		// Remove leading/trailing white space.
		id = '/id' + trim(id);
	}

	// Check if lang is string and not empty.
	if (typeof lang !== 'string') {
		lang = '';
	}
	if ( ! empty(lang) ) {
		lang = '/' + trim(lang);
	}

	// Check if developer is string and not empty.
	if (typeof developer !== 'string') {
		developer = '';
	}
	if ( ! empty(developer) ) {
		developer = '/' + trim(developer);
	}

	// Apple iTunes Store link parts.
	var linkBits = {
		'domain': 'https://itunes.apple.com',
		'app-path': '/app'
	}

	return linkBits['domain'] + lang + linkBits['app-path'] + developer + id;
};
