'use strict';

/**
 * apartment-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apartment-request.apartment-request');
