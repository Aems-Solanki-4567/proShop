const errorMiddleware = async (error, req, res, next) => {
  try {
    next();
  } catch (e) {}
};
