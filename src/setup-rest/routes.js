import { artemis } from 'src'

const setup = server => {
  server.post('/graph', artemis.setupGraph())
}

export const routes = { setup }
