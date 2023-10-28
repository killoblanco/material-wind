import plugin from 'tailwindcss/plugin'
import extendTailwind from './layers'
import extendTheme from './theme'
import type { PluginOptions } from './types'

const MaterialWind = plugin.withOptions<PluginOptions>(extendTailwind, extendTheme)

export default MaterialWind
