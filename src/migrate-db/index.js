import { artemis } from 'src'

const configs = () => ({
  settings: artemis.core.settings,
  importer: require?.context('src/migrate-db/migrations', true, /\.js$/),
})

export const migrateDb = { configs }
