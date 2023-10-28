import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export const badge = (theme: PluginAPI['theme']): CSSRuleObject => ({
  '.badge': {
    '--_size': 'var(--size, 6px)',
    '--_bg': `var(--bg, ${theme('colors.light.error')})`,
    '--_color': `var(--color, ${theme('colors.light.onError')})`,
    backgroundColor: 'var(--_bg)',
    borderRadius: theme('borderRadius.full'),
    display: 'inline-block',
    color: 'var(--_color)',
    height: 'var(--_size)',
    width: 'var(--_size)',
    '&:not(:empty)': {
      '--size': 'auto',
      fontSize: '11px',
      fontWeight: theme('fontWeight.medium'),
      letterSpacing: '0.5pt',
      lineHeight: '16pt',
      padding: '0 6px'
    },
    '&.dark': {
      '--bg': theme('colors.dark.error'),
      '--color': theme('colors.dark.onError')
    },
    '@media (prefers-color-scheme: dark)': {
      '--bg': theme('colors.dark.error'),
      '--color': theme('colors.dark.onError')
    }
  }
})
