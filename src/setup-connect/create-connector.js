import { repository } from 'src/setup-connect/repository'

export const createConnector = ({ name, config, baseUrl }) => repository
  .configure({ name, config, baseUrl })
  .then(() => console.log(`Connector '${name}' was successfully configured.`))
  .catch(() => console.error(`Connector '${name}' failed to be configured.`) || process.exit(1))
