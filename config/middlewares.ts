export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
      cors: false
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      header: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Origin',
        'Accept',
      ],
      origin: ['https://www.khcharity.com', 'https://khcharity.com', 'http://localhost:5173']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
