export default () => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // 10MB
      },
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 150,
      },
      formats: ['original', 'webp', 'avif'],
      transformers: {
        image: {
          exclude: ['.svg']
        }
      }
    },
  },
});