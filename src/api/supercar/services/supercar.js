'use strict';

/**
 * supercar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::supercar.supercar');
