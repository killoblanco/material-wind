import type { PluginAPI } from 'tailwindcss/types/config'

export const buildBaseLayer = ({ addBase, theme }: PluginAPI): void => {
  addBase({
    body: {
      '--_bg': `var(--bg, ${JSON.stringify(theme('colors.light.background'))})`,
      '--_color': `var(--color, ${JSON.stringify(theme('colors.light.onBackground'))})`,
      fontFamily: theme('fontFamily.body'),
      backgroundColor: 'var(--_bg)',
      color: 'var(--_color)',
      fontSmoothing: 'antialiased',
      '&.dark': {
        '--bg': theme('colors.dark.background'),
        '--color': theme('colors.dark.onBackground')
      },
      '@media (prefers-color-scheme: dark)': {
        '--bg': theme('colors.dark.background'),
        '--color': theme('colors.dark.onBackground')
      }
    }
  })
}
