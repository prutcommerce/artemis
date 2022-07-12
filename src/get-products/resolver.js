import { artemis } from 'src'
import { get } from 'src/get-products/get'
import { lodash, nephele } from 'src/deps'
import { validation } from 'src/get-products/validation'

export const resolver = async args => {
  const validationResult = await validation.execute(args)

  if (lodash.isError(validationResult)) return artemis.core.error.validation(validationResult?.inner)

  return await get(nephele.relay.makeArgs(validationResult))
}
