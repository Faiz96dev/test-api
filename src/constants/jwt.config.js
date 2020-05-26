module.exports = {
  secret: 'MANDA',
  tokens: {
    access: {
      type: 'access',
      expiresIn: '4h',
    },
    refresh: {
      type: 'refresh',
      expiresIn: '30d',
    },
  },
};
