module.exports = {
  DB: {
    link: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-cj3ab.mongodb.net/test?retryWrites=true&w=majority`,
  },
}
