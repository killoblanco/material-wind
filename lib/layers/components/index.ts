import { type PluginAPI } from 'tailwindcss/types/config'
import { badge } from './badge'
import { button } from './button'
import { typography } from './typography'

export const buildComponents = ({ addComponents, theme }: PluginAPI): void => {
  addComponents({
    ...badge(theme),
    ...button(theme),
    ...typography(theme)
  })
}
