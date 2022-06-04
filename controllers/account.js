const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getAccounts = async (inUserId) => {
  const pool = await prisma.user.findMany({
    where: {
      userId: inUserId
    }
  })

  if (pool == null) {
    return -1
  }

  return pool
}

module.exports = { getAccounts }
