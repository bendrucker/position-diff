# position-diff [![Build Status](https://travis-ci.org/bendrucker/position-diff.svg?branch=master)](https://travis-ci.org/bendrucker/position-diff)

> Get the difference in position between two elements


## Install

```
$ npm install --save position-diff
```


## Usage

```js
var positionDiff = require('position-diff')

positionDiff(el1, el2)
//=> {x, y}
```

## API

#### `positionDiff(element1, element2)` -> `object`

##### element1 / element2

*Required*  
Type: `HTMLElement`

HTML elements. The position of the first will be subtracted from the second and `{x, y}` (`Number`) is returned.

##### options

###### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Ben Drucker](http://bendrucker.me)
