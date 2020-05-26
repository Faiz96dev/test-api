const jwt = require('jsonwebtoken');
const { secret } = require('../constants/jwt.config');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  console.log(authHeader);
  if (!authHeader) {
    res.status(401)
      .json({ message: 'Token not provided!' });
    return;
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, secret);
    if (payload.type !== 'access') {
      res.status(401)
        .json({ message: 'Invalid token! this is not access token' });
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401)
        .json({ message: 'token expired ! ' });
      return;
    }
    if (e instanceof jwt.JsonWebTokenError) {
      res.status(401)
        .json({ message: 'Invalid token! ' });
      return;
    }
  }
  next();
};
