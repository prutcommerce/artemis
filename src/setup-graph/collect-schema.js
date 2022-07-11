import { ramda } from 'src/deps'

const collectArtemisSchema = () => {
  const graphImporter = require?.context('src', true, /\.graphql$/)

  return graphImporter?.keys()
    .map(graphImporter)
    .map(module => module?.default)
    .reduce(ramda.concat, ``)
}

export const collectSchema = () => `
${collectArtemisSchema()}
`
