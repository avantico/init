/**
 * Copy task
 */
'use strict';

var config = require('../config');

module.exports = {
  main: {
    type: 'amd',
    files: [{
      expand: true,
      cwd: './src/',
      src: config.js.files,
      dest: config.js.devDest
    }]
  }
};
