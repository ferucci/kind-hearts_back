export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ['https://www.khcharity.com', 'https://khcharity.com', 'http://localhost:5173'],
        headers: [
          'Content-Type',
          'Authorization',
          'X-Frame-Options',
          'Origin',
          'Accept',
        ],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        credentials: true,
        maxAge: 3600
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
