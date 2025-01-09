export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['*', 'http://0.0.0.0:1337', 'http://api.khcharity.com', 'http://khcharity.com', 'https://api.khcharity.com', 'https://khcharity.com'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Origin',
        'Accept',
        'Response-Type',
      ],
      methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
