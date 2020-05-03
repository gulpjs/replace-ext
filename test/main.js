'use strict';

var path = require('path');
var os = require('os');

var expect = require('expect');

var replaceExt = require('../');

describe('replace-ext', function () {
  it('returns a valid replaced extension on long path', function (done) {
    var fname = path.join(__dirname, './fixtures/test.coffee');
    var expected = path.join(__dirname, './fixtures/test.js');
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid replaced extension on basename', function (done) {
    var fname = 'test.coffee';
    var expected = 'test.js';
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('should not return a valid replaced extension on empty string', function (done) {
    var fname = '';
    var expected = '';
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid removed extension on long path', function (done) {
    var fname = path.join(__dirname, './fixtures/test.coffee');
    var expected = path.join(__dirname, './fixtures/test');
    var result = replaceExt(fname, '');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid added extension on long path', function (done) {
    var fname = path.join(__dirname, './fixtures/test');
    var expected = path.join(__dirname, './fixtures/test.js');
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('should not replace when 1st arg is not a string (null)', function (done) {
    var result = replaceExt(null, '.js');
    expect(result).toEqual(null);
    done();
  });

  it('should not replace when 1st arg is not a string (object)', function (done) {
    var obj = {};
    var result = replaceExt(obj, '.js');
    expect(result).toEqual(obj);
    done();
  });

  it('Should preserve the first dot of relative dir name.', function (done) {
    if (os.platform() === 'win32') {
      expect(replaceExt('a/b/c.js', '.ts')).toEqual('a\\b\\c.ts');
      expect(replaceExt('./a/b/c.js', '.ts')).toEqual('.\\a\\b\\c.ts');
      expect(replaceExt('../a/b/c.js', '.ts')).toEqual('..\\a\\b\\c.ts');
      expect(replaceExt('/a/b/c.js', '.ts')).toEqual('\\a\\b\\c.ts');

      expect(replaceExt('C:/a/b/c.js', '.ts')).toEqual('C:\\a\\b\\c.ts');

      expect(replaceExt('a\\b\\c.js', '.ts')).toEqual('a\\b\\c.ts');
      expect(replaceExt('.\\a\\b\\c.js', '.ts')).toEqual('.\\a\\b\\c.ts');
      expect(replaceExt('..\\a\\b\\c.js', '.ts')).toEqual('..\\a\\b\\c.ts');
      expect(replaceExt('\\a\\b\\c.js', '.ts')).toEqual('\\a\\b\\c.ts');

      expect(replaceExt('C:\\a\\b\\c.js', '.ts')).toEqual('C:\\a\\b\\c.ts');
    } else {
      expect(replaceExt('a/b/c.js', '.ts')).toEqual('a/b/c.ts');
      expect(replaceExt('./a/b/c.js', '.ts')).toEqual('./a/b/c.ts');
      expect(replaceExt('../a/b/c.js', '.ts')).toEqual('../a/b/c.ts');
      expect(replaceExt('/a/b/c.js', '.ts')).toEqual('/a/b/c.ts');
    }
    done();
  });
});
