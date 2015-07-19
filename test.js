'use strict';
var assert = require('assert');
var appleStoreLink = require('./');
var id = '376183339';
var lang = 'pt';
var developer = 'ted';

// Test link construction (no null parameters).
it('should ', function () {
	assert.strictEqual(
		appleStoreLink(id), 'https://itunes.apple.com/app/id' + id
	);
	assert.strictEqual(
		appleStoreLink(id, lang), 'https://itunes.apple.com/' + lang + '/app/id' + id
	);
	assert.strictEqual(
		appleStoreLink(id, lang, developer), 'https://itunes.apple.com/' + lang + '/app/' + developer + '/id' + id
	);
});

// Test link construction (with null parameters).
it('should ', function () {
	assert.strictEqual(
		appleStoreLink(id, null), 'https://itunes.apple.com/app/id' + id
	);
	assert.strictEqual(
		appleStoreLink(id, lang, null), 'https://itunes.apple.com/' + lang + '/app/id' + id
	);
	assert.strictEqual(
		appleStoreLink(id, null, developer), 'https://itunes.apple.com/app/' + developer + '/id' + id
	);
});
