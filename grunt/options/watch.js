/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
	less: {
		files: config.less.files,
		tasks: 'less:dev'
	},

	js: {
		files: [config.jsHintFiles, config.tests.src],
		tasks: ['jshint', 'karma:unit']
	}
};
