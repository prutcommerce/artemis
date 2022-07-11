import { sequelize } from 'src/deps'

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.addColumn('product', 'created_at', {
  type: sequelize.DataTypes.DATE,
  defaultValue: sequelize.literal('UTC_TIMESTAMP'),
  allowNull: true,
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.removeColumn('product', 'created_at')
