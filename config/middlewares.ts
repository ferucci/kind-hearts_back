export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://www.khcharity.com', 'https://khcharity.com', 'https://api.khcharity.com'],
      header: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Origin',
        'Accept',
        'Response-Type',
        'Access-Control-Allow-Origin'
      ],
      methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
