# apple-store-link [![Build Status](https://travis-ci.org/xipasduarte/apple-store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/apple-store-link)

If you are looking for a module that does links for more than one store see [`store-link`](https://www.npmjs.com/package/store-link).

## Install

```
$ npm install --save apple-store-link
```


## Usage

```js
var appleStoreLink = require('apple-store-link');

appleStoreLink('376183339');
//=> https://itunes.apple.com/app/id376183339

appleStoreLink('376183339', 'us');
//=> https://itunes.apple.com/us/app/id376183339

appleStoreLink('376183339', 'us', 'ted');
//=> https://itunes.apple.com/us/app/ted/id376183339

appleStoreLink('376183339', null, 'ted');
//=> https://itunes.apple.com/app/ted/id376183339
```


## API
**Apple iTunes**

`https://itunes.apple.com/[lang]/app/[developer]/id[id]`

### appleStoreLink(id, lang)

#### id

*Required*

Type: `string`

The string that identifies the application on each store.

#### lang
*Optional*

Type: `string`

Localized Apple iTunes page (ex: us, es, pt).

#### developer
*Optional*

Type: `string`

The developer's id.

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
