/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const up = async queryInterface => queryInterface.renameColumn('product', 'quantityUnit', 'quantity_unit')

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 */
export const down = async queryInterface => queryInterface.renameColumn('product', 'quantity_unit', 'quantityUnit')
