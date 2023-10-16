'use strict';

/**
 * yacht-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yacht-request.yacht-request');
