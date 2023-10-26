import plugin from 'tailwindcss/plugin'
import type { PluginOptions } from './types'
import type { PluginCreator, Config } from 'tailwindcss/types/config'
import { buildBaseLayer } from './layers/base'

const extendTailwind = (options: PluginOptions): PluginCreator => (api) => {
  buildBaseLayer(api)
}

const extendTheme = (options: PluginOptions): Partial<Config> => {
  return {}
}

export default plugin.withOptions(extendTailwind, extendTheme)
