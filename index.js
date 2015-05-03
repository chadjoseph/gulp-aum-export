var through = require('through2');

module.exports = function () {
  'use strict';

  return through.obj(function (file, encoding, callback) {
    var contents = file.contents.toString().replace('export default', 'return');

    file.contents = new Buffer(contents);

    this.push(file);

    callback();
  });
};

