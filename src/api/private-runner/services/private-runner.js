'use strict';

/**
 * private-runner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-runner.private-runner');
