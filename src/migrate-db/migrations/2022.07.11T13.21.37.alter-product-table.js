/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.addColumn('product', 'deleted_at', {
  type: 'DATETIME NULL',
  allowNull: true,
})

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.removeColumn('product', 'deleted_at')
