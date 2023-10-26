import plugin from 'tailwindcss/plugin'
import type { PluginOptions } from './types'
import type { PluginCreator, Config } from 'tailwindcss/types/config'
import { buildBaseLayer } from './layers/base'

const extendTailwind = (): PluginCreator => (api) => {
  buildBaseLayer(api)
}

const extendTheme = (): Partial<Config> => {
  return {}
}

export default plugin.withOptions<PluginOptions>(extendTailwind, extendTheme)
