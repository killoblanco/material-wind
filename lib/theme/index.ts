import { type Config } from 'tailwindcss/types/config'
import { type PluginOptions } from '../types'
import { defaultOptions } from '../options'
import { motion } from './motion'
import { elevations } from './elevations'
import colors from './colors'

const fontFamily = (fontFamily: PluginOptions['fontFamily'] = {}): Record<string, string[]> => Object.entries(fontFamily ?? defaultOptions.fontFamily).reduce((acc, [key, value]) => ({
  ...acc,
  [key]: [value, 'system-ui', 'sans-serif'].filter(Boolean)
}), {})

export default function extendTheme (options: PluginOptions): Partial<Config> {
  return {
    theme: {
      extend: {
        boxShadow: elevations,
        colors: colors(options),
        fontFamily: fontFamily(options?.fontFamily),
        ...motion
      }
    }
  }
}
