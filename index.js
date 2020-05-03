'use strict';

var path = require('path');

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  // Mutating the object for performance - node creates new object per parse()
  var parsed = path.parse(npath);
  // Overwrite the extension with new one
  parsed.ext = ext;
  // Delete basename because it is used if exists
  delete parsed.base;

  return path.format(parsed);
}

module.exports = replaceExt;
