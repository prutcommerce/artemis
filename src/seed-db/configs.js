import { artemis } from 'src'
import { umzug } from 'src/deps'
import { discover } from 'src/seed-db/discover'

export const configs = () => {
  const sequelize = artemis.core.db.entities().driver

  return ({
    storage: umzug.memoryStorage(),
    migrations: discover(),
    context: { sequelize, queryInterface: sequelize.getQueryInterface() }
  })
}
