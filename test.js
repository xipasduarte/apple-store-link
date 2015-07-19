'use strict';
var assert = require('assert');
var appleStoreLink = require('./');
var id = '376183339';
var lang = 'pt';
var developer = 'ted';

// Test link construction.
it('should ', function () {
	assert.strictEqual(appleStoreLink(id), 'https://itunes.apple.com/us/app/id' + id);
	assert.strictEqual(appleStoreLink(id, lang), 'https://itunes.apple.com/' + lang + '/app/id' + id);
});
