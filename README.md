# [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wall-wxk/leon-test-hello-world/blob/master/LICENSE) [![NPM version](https://img.shields.io/npm/v/leon-test-hello-world.svg)](https://www.npmjs.com/package/leon-test-hello-world)

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

