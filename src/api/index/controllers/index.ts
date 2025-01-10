/**
 * index controller
 */

import { factories } from '@strapi/strapi'

const allowedOrigins = [
  'http://0.0.0.0:1337',
  'http://api.khcharity.com',
  'http://khcharity.com',
  'https://api.khcharity.com',
  'https://khcharity.com'
];

export default factories.createCoreController('api::index.index', ({ strapi }) => ({
  async find(ctx) {
    const origin = ctx.request.header.origin;
    if (allowedOrigins.includes(origin)) {
      ctx.set('Access-Control-Allow-Origin', origin);
    }
    const response = await super.find(ctx);
    return response;
  }
}));