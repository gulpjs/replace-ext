<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# replace-ext

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Gitter chat][gitter-image]][gitter-url]

Replaces a file extension with another one.

## Usage

```js
var replaceExt = require('replace-ext');

var path = '/some/dir/file.js';
var newPath = replaceExt(path, '.coffee');

console.log(newPath); // /some/dir/file.coffee
```

## API

### `replaceExt(path, extension)`

Replaces the extension from `path` with `extension` and returns the updated path string.

Does not replace the extension if `path` is not a string or is empty.

## License

MIT

[downloads-image]: http://img.shields.io/npm/dm/replace-ext.svg
[npm-url]: https://www.npmjs.com/package/replace-ext
[npm-image]: http://img.shields.io/npm/v/replace-ext.svg

[travis-url]: https://travis-ci.org/gulpjs/replace-ext
[travis-image]: http://img.shields.io/travis/gulpjs/replace-ext.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/replace-ext
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/replace-ext.svg?label=appveyor

[coveralls-url]: https://coveralls.io/r/gulpjs/replace-ext
[coveralls-image]: http://img.shields.io/coveralls/gulpjs/replace-ext/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg

---

<div align="center">
  <b><a href="https://tidelift.com/subscription/pkg/npm-replace-ext?utm_source=npm-replace-ext&utm_medium=referral&utm_campaign=readme">
Get supported replace-ext with the Tidelift Subscription</a></b>
  <br>
  <sub>Tidelift gives software development teams a single source for purchasing and maintaining their software, with professional grade assurances from the experts who know it best, while seamlessly integrating with existing tools.</sub>
</div>
