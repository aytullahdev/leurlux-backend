'use strict';

/**
 * hotel-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hotel-request.hotel-request');
