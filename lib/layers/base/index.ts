import type { PluginAPI } from 'tailwindcss/types/config'
import { Body } from './body'

export const buildBaseLayer = ({ addBase, theme }: PluginAPI): void => {
  addBase({
    ...Body(theme)
  })
}
