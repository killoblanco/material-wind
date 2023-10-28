import { type PluginAPI } from 'tailwindcss/types/config'
import { badge } from './badge'
import { typography } from './typography'

export const buildComponents = ({ addComponents, theme }: PluginAPI): void => {
  addComponents({
    ...badge(theme),
    ...typography(theme)
  })
}
