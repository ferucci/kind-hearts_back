export default () => {
  return async (ctx, next) => {
    await next(); // Let the request pass through all previous middleware

    if (ctx.get("Origin") && ctx.response.status !== 404) {
      const allowedOrigins = ["https://khcharity.com"];
      const requestOrigin = ctx.get("Origin");

      if (allowedOrigins.includes(requestOrigin)) {
        ctx.set("Access-Control-Allow-Origin", requestOrigin);
        ctx.set(
          "Access-Control-Allow-Methods",
          "GET, OPTIONS"
        );
        ctx.set(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization, Origin, Accept"
        );
        ctx.set("Access-Control-Allow-Credentials", "true");
      }
    }
  };
};