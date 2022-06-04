const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const insertUser = async (inName, inLastname, inUser, inPassword, inEmail) => {
  const pool = await prisma.user.create({
    data: {
      name: inName,
      lastname: inLastname,
      user: inUser,
      password: inPassword,
      email: inEmail
    }
  })

  if (pool == null) {
    return -1
  }

  return pool.id
}

module.exports = { insertUser }
