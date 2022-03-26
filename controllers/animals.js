const connection = require('../config/db')

const getAnimals = async () => {
  const rows = await connection
    .query('SELECT * FROM animal')
    .then(([rows]) => rows)
    .catch((err) => console.error(err))
  return rows
}

module.exports = getAnimals
