import { connectionUrl } from 'src/setup-connect/connection-url'
import { createProductSource } from 'src/setup-connect/create-product-source'

export const setupConnect = async () => {
  await createProductSource()
}

setupConnect.connectionUrl = connectionUrl
