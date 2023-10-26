import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export const Body = (theme: PluginAPI['theme']): CSSRuleObject => ({
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
