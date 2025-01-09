export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    cors: {
      enabled: true,
      origin: ['*', 'http://0.0.0.0:1337', 'http://api.khcharity.com', 'http://khcharity.com', 'https://api.khcharity.com', 'https://khcharity.com'],
    }
  },
};
