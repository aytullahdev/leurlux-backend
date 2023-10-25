'use strict';

/**
 * restaurants-and-dinner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurants-and-dinner.restaurants-and-dinner');
