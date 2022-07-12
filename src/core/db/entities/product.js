import { nephele, sequelize } from 'src/deps'
import { ENTITY_NAMES } from 'src/core/db/entity-names'

export const product = driver => driver.define(ENTITY_NAMES.product, {
  __typename: {
    type: sequelize.DataTypes.VIRTUAL,
    get: () => 'Product'
  },
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    get: nephele.modelDb.getEncodedId(ENTITY_NAMES.product),
  },
  name: sequelize.DataTypes.STRING,
  quantity: sequelize.DataTypes.FLOAT,
  quantityUnit: sequelize.DataTypes.STRING,
}, {
  underscored: true,
  timestamps: true,
  paranoid: true,
  tableName: 'product',
})
