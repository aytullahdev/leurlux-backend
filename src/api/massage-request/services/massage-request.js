'use strict';

/**
 * massage-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::massage-request.massage-request');
