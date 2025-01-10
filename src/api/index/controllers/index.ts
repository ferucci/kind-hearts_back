/**
 * index controller
 */

import { factories } from '@strapi/strapi'

const allowedOrigins = [
  'http://http://localhost:5173/',
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

    ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    ctx.set('Access-Control-Max-Age', '86400');

    return response;
  }
}));