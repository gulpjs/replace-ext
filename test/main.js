"use strict";

var path = require("node:path");
var os = require("node:os");
var assert = require("node:assert");
var { describe, it } = require("node:test");

var replaceExt = require("../");

describe("replace-ext", function () {
  it("returns a valid replaced extension on long path", function () {
    var fname = path.join(__dirname, "./fixtures/test.coffee");
    var expected = path.join(__dirname, "./fixtures/test.js");
    var result = replaceExt(fname, ".js");
    assert.deepStrictEqual(result, expected);
  });

  it("returns a valid replaced extension on basename", function () {
    var fname = "test.coffee";
    var expected = "test.js";
    var result = replaceExt(fname, ".js");
    assert.deepStrictEqual(result, expected);
  });

  it("should not return a valid replaced extension on empty string", function () {
    var fname = "";
    var expected = "";
    var result = replaceExt(fname, ".js");
    assert.deepStrictEqual(result, expected);
  });

  it("returns a valid removed extension on long path", function () {
    var fname = path.join(__dirname, "./fixtures/test.coffee");
    var expected = path.join(__dirname, "./fixtures/test");
    var result = replaceExt(fname, "");
    assert.deepStrictEqual(result, expected);
  });

  it("returns a valid added extension on long path", function () {
    var fname = path.join(__dirname, "./fixtures/test");
    var expected = path.join(__dirname, "./fixtures/test.js");
    var result = replaceExt(fname, ".js");
    assert.deepStrictEqual(result, expected);
  });

  it("should not replace when 1st arg is not a string (null)", function () {
    var result = replaceExt(null, ".js");
    assert.deepStrictEqual(result, null);
  });

  it("should not replace when 1st arg is not a string (object)", function () {
    var obj = {};
    var result = replaceExt(obj, ".js");
    assert.deepStrictEqual(result, obj);
  });

  it("Should preserve the first dot of relative dir name.", function () {
    if (os.platform() === "win32") {
      assert.deepStrictEqual(replaceExt("a/b/c.js", ".ts"), "a\\b\\c.ts");
      assert.deepStrictEqual(replaceExt("./a/b/c.js", ".ts"), ".\\a\\b\\c.ts");
      assert.deepStrictEqual(
        replaceExt("../a/b/c.js", ".ts"),
        "..\\a\\b\\c.ts",
      );
      assert.deepStrictEqual(replaceExt("/a/b/c.js", ".ts"), "\\a\\b\\c.ts");

      assert.deepStrictEqual(
        replaceExt("C:/a/b/c.js", ".ts"),
        "C:\\a\\b\\c.ts",
      );

      assert.deepStrictEqual(replaceExt("a\\b\\c.js", ".ts"), "a\\b\\c.ts");
      assert.deepStrictEqual(
        replaceExt(".\\a\\b\\c.js", ".ts"),
        ".\\a\\b\\c.ts",
      );
      assert.deepStrictEqual(
        replaceExt("..\\a\\b\\c.js", ".ts"),
        "..\\a\\b\\c.ts",
      );
      assert.deepStrictEqual(replaceExt("\\a\\b\\c.js", ".ts"), "\\a\\b\\c.ts");

      assert.deepStrictEqual(
        replaceExt("C:\\a\\b\\c.js", ".ts"),
        "C:\\a\\b\\c.ts",
      );
    } else {
      assert.deepStrictEqual(replaceExt("a/b/c.js", ".ts"), "a/b/c.ts");
      assert.deepStrictEqual(replaceExt("./a/b/c.js", ".ts"), "./a/b/c.ts");
      assert.deepStrictEqual(replaceExt("../a/b/c.js", ".ts"), "../a/b/c.ts");
      assert.deepStrictEqual(replaceExt("/a/b/c.js", ".ts"), "/a/b/c.ts");
    }
  });
});
