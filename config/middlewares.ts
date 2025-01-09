export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['*', 'http://0.0.0.0:1337', 'http://api.khcharity.com', 'http://khcharity.com', 'https://api.khcharity.com', 'https://khcharity.com'],
      headers: ['*'],
      methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
      credentials: true
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
