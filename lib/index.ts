import plugin from 'tailwindcss/plugin'
import type { PluginOptions } from './types'
import type { PluginCreator, Config } from 'tailwindcss/types/config'
import { buildBaseLayer } from './layers/base'

const extendTailwind = (options: PluginOptions): PluginCreator => (api) => {
  console.log('extendTailwind', options)
  buildBaseLayer(api)
}

const extendTheme = (options: PluginOptions): Partial<Config> => {
  console.log('extendTheme', options)

  return {}
}

export default plugin.withOptions(extendTailwind, extendTheme)
