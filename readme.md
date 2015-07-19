# apple-store-link [![Build Status](https://travis-ci.org/xipasduarte/apple-store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/apple-store-link)

If you are looking for a module that does links for more than one store see [`store-link`](https://www.npmjs.com/package/store-link).

## Install

```
$ npm install --save apple-store-link
```


## Usage

```js
var appleStoreLink = require('apple-store-link');

appleStoreLink('376183339', 'us');
//=> https://itunes.apple.com/us/app/ted/id376183339
```


## API

### appleStoreLink(id, lang)

#### id

*Required*

Type: `string`

The string that identifies the application on each store.

**Apple iTunes**

`https://itunes.apple.com/us/app/id[the_id]`

#### lang
*Optional*

Type: `string`

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
