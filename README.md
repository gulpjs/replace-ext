<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# replace-ext

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Replaces a file extension with another one.

## Usage

```js
var replaceExt = require("replace-ext");

var path = "/some/dir/file.js";
var newPath = replaceExt(path, ".coffee");

console.log(newPath); // /some/dir/file.coffee
```

## API

### `replaceExt(path, extension)`

Replaces the extension from `path` with `extension` and returns the updated path string.

Does not replace the extension if `path` is not a string or is empty.

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/replace-ext.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/replace-ext
[npm-image]: https://img.shields.io/npm/v/replace-ext.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/replace-ext/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/replace-ext/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/replace-ext
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/replace-ext/main.svg?style=flat-square
<!-- prettier-ignore-end -->
