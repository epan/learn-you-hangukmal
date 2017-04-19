const logger = (req, res, next) => {
  console.log(`SERVING: ${req.method} to ${req.url}`);
  next();
};

module.exports = logger;
