import { nephele } from 'src/deps'
import { repository } from 'src/get-products/repository'

export const get = async args => {
  const products = await repository.getProducts(args)

  return nephele.relay.makePage(products)
}
