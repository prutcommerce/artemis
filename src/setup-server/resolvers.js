import { artemis } from 'src'

const make = () => ({
  products: artemis.getProducts.resolver,
})

export const resolvers = { make }
