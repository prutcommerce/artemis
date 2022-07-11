import { artemis } from 'src'

export const connectionUrl = () => {
  const host = artemis.core.settings.getDatabaseHost()
  const port = artemis.core.settings.getDatabasePort()
  const name = artemis.core.settings.getDatabaseName()

  return `jdbc:mariadb://${host}:${port}/${name}`
}
