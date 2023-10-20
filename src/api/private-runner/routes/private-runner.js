'use strict';

/**
 * private-runner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::private-runner.private-runner');
