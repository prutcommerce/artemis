import { core } from 'src/core'
import { logo } from 'src/logo'
import { seedDb } from 'src/seed-db'
import { nephele, yup } from 'src/deps'
import { migrateDb } from 'src/migrate-db'
import { setupServer } from 'src/setup-server'
import { getProducts } from 'src/get-products'
import { setupConnect } from 'src/setup-connect'

export const artemis = {
  core,
  seedDb,
  migrateDb,
  getProducts,
}

logo.print()

nephele.setupLogger()
nephele.setupValidation(yup)
nephele.setupMaps(core.settings)

nephele.createDb(core.settings)
  .then(nephele.migrateDb(migrateDb.configs()))
  .then(nephele.seedDb(seedDb.configs()))
  .then(setupConnect)
  .then(nephele.setupRest(setupServer.configs()))
  .catch(error => console.error(error) || process.exit(1))


