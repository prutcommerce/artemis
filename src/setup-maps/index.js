import { artemis } from 'src'
import { sourceMapSupport } from 'src/deps'

export const setupMaps = async () => {
  if (artemis.core.settings.getEnvironment() !== 'local') return

  sourceMapSupport.install()
}
