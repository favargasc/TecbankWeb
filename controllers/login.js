const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUserId = async (user, password) => {
  const pool = await prisma.user.findFirst({
    where: {
      name: user,
      age: password
    }
  })

  if (pool == null) {
    return -1
  }

  return pool.id
}

module.exports = { getUserId }
