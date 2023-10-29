import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export const divider = (theme: PluginAPI['theme']): CSSRuleObject => {
  const colorVariant = (mode: string, color: string): CSSRuleObject => ({
    [`&.${color}`]: {
      '--color': theme(`colors.${mode}.${color}`)
    }
  })

  const darkMode = {}

  return ({
    '.divider': {
      '--_color': `var(--color, ${JSON.stringify(theme('colors.light.outlineVariant'))})`,
      borderWidth: '0',
      borderTopWidth: '1px',
      borderColor: 'var(--_color)',
      borderStyle: 'solid',
      height: '1px',
      width: 'inherit',
      '&.vertical': {
        borderTopWidth: '0',
        borderLeftWidth: '1px',
        height: 'inherit',
        width: '1px'
      },
      ...colorVariant('light', 'primary'),
      ...colorVariant('light', 'secondary'),
      ...colorVariant('light', 'tertiary'),
      ...colorVariant('light', 'error'),
      'body.dark &': { ...darkMode },
      '@media (prefers-color-scheme: dark)': { ...darkMode }
    }
  })
}
