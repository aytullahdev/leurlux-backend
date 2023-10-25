'use strict';

/**
 * night-club service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::night-club.night-club');
