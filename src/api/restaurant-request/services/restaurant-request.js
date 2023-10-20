'use strict';

/**
 * restaurant-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-request.restaurant-request');
