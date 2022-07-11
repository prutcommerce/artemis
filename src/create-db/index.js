import { artemis } from 'src'
import { mariadb } from 'src/deps'

const makeConnectionPool = async () => mariadb.createConnection({
  user: artemis.core.settings.getDatabaseUsername(),
  password: artemis.core.settings.getDatabasePassword(),
  host: artemis.core.settings.getDatabaseHost(),
  port: artemis.core.settings.getDatabasePort()
})

export const createDb = async () => {
  const connection = await makeConnectionPool()
  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${artemis.core.settings.getDatabaseName()};`)
  await connection.end()
}
