const Sequelize = require('sequelize')

const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:5fbvf4@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db
  .sync()
  .then(() => console.log('Database connected'))
  .catch(console.error)

module.exports = db