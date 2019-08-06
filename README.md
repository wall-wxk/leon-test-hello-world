# [![CircleCI](https://img.shields.io/circleci/build/github/wall-wxk/leon-test-hello-world/master)](https://circleci.com/gh/wall-wxk/leon-test-hello-world/tree/master) [![Coverage Status](https://coveralls.io/repos/github/wall-wxk/leon-test-hello-world/badge.svg?branch=master)](https://coveralls.io/github/wall-wxk/leon-test-hello-world?branch=master) [![NPM version](https://img.shields.io/npm/v/leon-test-hello-world.svg)](https://www.npmjs.com/package/leon-test-hello-world) [![download](https://img.shields.io/npm/dm/leon-test-hello-world)](https://www.npmjs.com/package/leon-test-hello-world) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wall-wxk/leon-test-hello-world/blob/master/LICENSE)

> 测试开源项目，npm规范发包流程

## Usage

Using npm, download and install the code.
```bash
npm install --save leon-test-hello-world
```
For node environment：

```js
var base = require('leon-test-hello-world');
```

For webpack or similar environment：

```js
import base from 'leon-test-hello-world';
```

For requirejs environment:

```js
requirejs(['node_modules/leon-test-hello-world/dist/leon-test-hello-world.cjs.js'], function (base) {
    // do something...
})
```

For browser environment:

```html
<script src="node_modules/leon-test-hello-world/dist/ileon-test-hello-world.min.js"></script>
```

## License
MIT

