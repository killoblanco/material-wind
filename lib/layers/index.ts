import { type PluginCreator } from 'tailwindcss/types/config'
import { buildBaseLayer } from './base'
import { buildComponents } from './components'

export default function extendTailwind (): PluginCreator {
  return (api) => {
    buildBaseLayer(api)
    buildComponents(api)
  }
}
