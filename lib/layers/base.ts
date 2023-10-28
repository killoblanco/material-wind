import type { PluginAPI } from 'tailwindcss/types/config'

export const buildBaseLayer = ({ addBase, theme }: PluginAPI): void => {
  addBase({
    body: {
      fontFamily: theme('fontFamily.body'),
      backgroundColor: theme('colors.light.background'),
      color: theme('colors.light.onBackground'),
      fontSmoothing: 'antialiased',
      '&.dark': {
        backgroundColor: theme('colors.dark.background'),
        color: theme('colors.dark.onBackground')
      },
      '@media (prefers-color-scheme: dark)': {
        backgroundColor: theme('colors.dark.background'),
        color: theme('colors.dark.onBackground')
      }
    }
  })
}
