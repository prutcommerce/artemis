import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.createTable('product', {
  id: {
    type: sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: sequelize.DataTypes.STRING,
  quantity: sequelize.DataTypes.FLOAT,
  quantityUnit: sequelize.DataTypes.STRING
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.dropTable('product')
