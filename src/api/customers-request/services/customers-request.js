'use strict';

/**
 * customers-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customers-request.customers-request');
