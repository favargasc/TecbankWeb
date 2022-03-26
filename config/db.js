const { createPool } = require('mysql2/promise')

const connection = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'mysql'
})

module.exports = connection
