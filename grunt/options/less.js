/**
 * Less
 */
'use strict';

var config = require('../config');

/*
 * Helper
 */
var helper = {};

helper.lessDev = {};
helper.lessDev[config.less.devDest] = config.less.src;

helper.lessProd = {};
helper.lessProd[config.less.dest] = config.less.src;

module.exports = {

	// For development
	dev: {
		options: {
			unixNewlines: true,
			style: 'expanded'
		},

		files: helper.lessDev
	},

	// For production
	build: {
		options: {
			style: 'compressed',
			banner: config.banner
		},

		files: helper.lessProd
	}
};
