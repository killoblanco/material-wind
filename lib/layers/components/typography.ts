import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'

export const typography = (theme: PluginAPI['theme']): CSSRuleObject => {
  const vars = {
    '--_family': `var(--family, ${theme('fontFamily.body')})`,
    '--_weight': `var(--weight, ${theme('fontWeight.normal')})`,
    '--_size': 'var(--size, 14pt)',
    '--_spacing': 'var(--spacing, 0.25pt)',
    '--_line': 'var(--line, 20pt)'
  }

  return ({
    '.typo': {
      ...vars,
      fontFamily: 'var(--_family)',
      fontWeight: 'var(--_weight)',
      fontSize: 'var(--_size)',
      letterSpacing: 'var(--_spacing)',
      lineHeight: 'var(--_line)',
      '&.lg': {
        '--size': '16pt',
        '--spacing': '0.5pt',
        '--line': '24pt'
      },
      '&.sm': {
        '--size': '12pt',
        '--spacing': '0.4pt',
        '--line': '16pt'
      },
      '&.display': {
        '--family': theme('fontFamily.heading'),
        '--line': '52pt',
        '--size': '45pt',
        '--spacing': '0',
        '&.lg': {
          '--line': '64pt',
          '--size': '57pt',
          '--spacing': '-0.25pt'
        },
        '&.sm': {
          '--line': '44pt',
          '--size': '36pt'
        }
      },
      '&.headline': {
        '--family': theme('fontFamily.heading'),
        '--line': '36pt',
        '--size': '28pt',
        '--spacing': '0',
        '&.lg': {
          '--line': '40pt',
          '--size': '32pt'
        },
        '&.sm': {
          '--line': '32pt',
          '--size': '24pt'
        }
      },
      '&.title': {
        '--family': theme('fontFamily.heading'),
        '--line': '24pt',
        '--size': '16pt',
        '--spacing': '0.15pt',
        '--weight': theme('fontWeight.medium'),
        '&.lg': {
          '--line': '28pt',
          '--size': '22pt',
          '--spacing': '0',
          '--weight': theme('fontWeight.normal')
        },
        '&.sm': {
          '--line': '20pt',
          '--size': '14pt',
          '--spacing': '0.1pt'
        }
      },
      '&.label': {
        '--line': '16pt',
        '--size': '12pt',
        '--spacing': '0.5pt',
        '--weight': theme('fontWeight.medium'),
        '&.lg': {
          '--line': '20pt',
          '--size': '14pt',
          '--spacing': '0.1pt'
        },
        '&.sm': {
          '--line': '16pt',
          '--size': '11pt'
        }
      }
    }
  })
}
