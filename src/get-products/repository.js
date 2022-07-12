import { artemis } from 'src'
import { sequelize } from 'src/deps'

const getProducts = async ({ after, first }) => {
  const entities = artemis.core.db.entities()

  return await entities.product.findAll({
    order: sequelize.col('id'),
    include: [],
    where: { id: { [sequelize.Op.gt]: after } },
    limit: first,
  })
}

export const repository = { getProducts }
