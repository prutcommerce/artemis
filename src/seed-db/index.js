import { artemis } from 'src'

const configs = () => ({
  settings: artemis.getSettings,
  importer: require?.context('src/seed-db/seeds', true, /\.js$/),
})

export const seedDb = { configs }
