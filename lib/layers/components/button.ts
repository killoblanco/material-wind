import type { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config'

export const button = (theme: PluginAPI['theme']): CSSRuleObject => {
  const vars = {
    '--_bg': `var(--bg, ${theme('colors.neutral.40')})`,
    '--_bg-hover': `var(--bg-hover, ${theme('colors.neutral.48')})`,
    '--_bg-active': `var(--bg-active, ${theme('colors.neutral.52')})`,
    '--_bg-disabled': `var(--bg-disabled, ${theme('colors.neutral.10')}1F)`,
    '--_border': 'var(--border, none)',
    '--_border-hover': 'var(--border-hover, none)',
    '--_border-active': 'var(--border-active, none)',
    '--_border-disabled': 'var(--border-disabled, none)',
    '--_color': `var(--color, ${theme('colors.neutral.100')})`,
    '--_color-disabled': `var(--color-disabled, ${theme('colors.neutral.10')}61)`
  }

  const defaultVariantColors = {
    light: (color: string = 'neutral') => ({
      '--bg': theme(`colors.${color}.40`),
      '--bg-hover': theme(`colors.${color}.48`),
      '--bg-active': theme(`colors.${color}.52`),
      '--bg-disabled': `${theme(`colors.${color}.10`)}1F`,
      '--color': theme(`colors.${color}.100`),
      '--color-disabled': `${theme(`colors.${color}.10`)}61`
    }),
    dark: (color: string = 'neutral') => ({
      '--bg': theme(`colors.${color}.80`),
      '--bg-hover': theme(`colors.${color}.72`),
      '--bg-active': theme(`colors.${color}.68`),
      '--bg-disabled': `${theme(`colors.${color}.90`)}1F`,
      '--color': theme(`colors.${color}.20`),
      '--color-disabled': `${theme(`colors.${color}.90`)}61`
    })
  }

  const tonalVariantColors = {
    light: (color: string = 'neutral') => ({
      '--bg': theme(`colors.${color}.90`),
      '--bg-hover': theme(`colors.${color}.92`),
      '--bg-active': theme(`colors.${color}.94`),
      '--bg-disabled': `${theme(`colors.${color}.90`)}1F`,
      '--color': theme(`colors.${color}.10`),
      '--color-disabled': `${theme(`colors.${color}.10`)}61`
    }),
    dark: (color: string = 'neutral') => ({
      '--bg': theme(`colors.${color}.30`),
      '--bg-hover': theme(`colors.${color}.22`),
      '--bg-active': theme(`colors.${color}.18`),
      '--bg-disabled': `${theme(`colors.${color}.30`)}1F`,
      '--color': theme(`colors.${color}.90`),
      '--color-disabled': `${theme(`colors.${color}.90`)}61`
    })
  }

  const outlinedVariantColors = {
    light: (color: string = 'neutral') => ({
      '--_bg': theme('colors.light.background'),
      '--_bg-hover': `${theme(`colors.${color}.40`)}14`,
      '--_bg-active': `${theme(`colors.${color}.40`)}1F`,
      '--_bg-disabled': theme('colors.light.surface'),
      '--_border': `1px solid ${theme('colors.light.outline')}`,
      '--_border-hover': `1px solid ${theme('colors.light.outline')}`,
      '--_border-active': `1px solid ${theme(`colors.${color}.40`)}`,
      '--_border-disabled': `1px solid ${theme('colors.light.onSurface')}1F`,
      '--_color': theme(`colors.${color}.40`),
      '--_color-disabled': theme(`colors.${color}.40`)
    }),
    dark: (color: string = 'neutral') => ({
      '--_bg': theme('colors.dark.background'),
      '--_bg-hover': `${theme(`colors.${color}.80`)}14`,
      '--_bg-active': `${theme(`colors.${color}.80`)}1F`,
      '--_bg-disabled': theme('colors.dark.surface'),
      '--_border': `1px solid ${theme('colors.dark.outline')}`,
      '--_border-hover': `1px solid ${theme('colors.dark.outline')}`,
      '--_border-active': `1px solid ${theme(`colors.${color}.80`)}`,
      '--_border-disabled': `1px solid ${theme('colors.dark.onSurface')}1F`,
      '--_color': theme(`colors.${color}.80`),
      '--_color-disabled': theme(`colors.${color}.80`)
    })
  }

  const textVariantColors = {
    light: (color: string = 'neutral') => ({
      '--_bg': theme('colors.light.background'),
      '--_bg-hover': `${theme(`colors.${color}.40`)}14`,
      '--_bg-active': `${theme(`colors.${color}.40`)}1F`,
      '--_bg-disabled': theme('colors.light.surface'),
      '--_color': theme(`colors.${color}.40`),
      '--_color-disabled': theme(`colors.${color}.40`)
    }),
    dark: (color: string = 'neutral') => ({
      '--_bg': theme('colors.dark.background'),
      '--_bg-hover': `${theme(`colors.${color}.80`)}14`,
      '--_bg-active': `${theme(`colors.${color}.80`)}1F`,
      '--_bg-disabled': theme('colors.dark.surface'),
      '--_color': theme(`colors.${color}.80`),
      '--_color-disabled': theme(`colors.${color}.80`)
    })
  }

  const darkMode = {
    ...defaultVariantColors.dark(),
    '&.tonal': { ...tonalVariantColors.dark() },
    '&.outlined': { ...outlinedVariantColors.dark() },
    '&.text': { ...textVariantColors.dark() },
    '&.neutralVariant': {
      ...defaultVariantColors.dark('neutralVariant'),
      '&.tonal': { ...tonalVariantColors.dark('neutralVariant') },
      '&.outlined': { ...outlinedVariantColors.dark('neutralVariant') },
      '&.text': { ...textVariantColors.dark('neutralVariant') }
    },
    '&.primary': {
      ...defaultVariantColors.dark('primary'),
      '&.tonal': { ...tonalVariantColors.dark('primary') },
      '&.outlined': { ...outlinedVariantColors.dark('primary') },
      '&.text': { ...textVariantColors.dark('primary') }
    },
    '&.secondary': {
      ...defaultVariantColors.dark('secondary'),
      '&.tonal': { ...tonalVariantColors.dark('secondary') },
      '&.outlined': { ...outlinedVariantColors.dark('secondary') },
      '&.text': { ...textVariantColors.dark('secondary') }
    },
    '&.tertiary': {
      ...defaultVariantColors.dark('tertiary'),
      '&.tonal': { ...tonalVariantColors.dark('tertiary') },
      '&.outlined': { ...outlinedVariantColors.dark('tertiary') },
      '&.text': { ...textVariantColors.dark('tertiary') }
    },
    '&.error': {
      ...defaultVariantColors.dark('error'),
      '&.tonal': { ...tonalVariantColors.dark('error') },
      '&.outlined': { ...outlinedVariantColors.dark('error') },
      '&.text': { ...textVariantColors.dark('error') }
    }
  }

  return ({
    '.btn': {
      ...vars,
      alignItems: 'center',
      backgroundColor: 'var(--_bg)',
      border: 'var(--_border)',
      borderRadius: theme('borderRadius.full'),
      color: 'var(--_color)',
      display: 'inline-flex',
      fontFamily: theme('fontFamily.body'),
      gap: '8px',
      height: '40px',
      justifyContent: 'center',
      padding: '0 24px',
      transitionProperty: 'all',
      transitionDuration: theme('transitionDuration.200'),
      transitionTimingFunction: theme('transitionTimingFunction.standard'),
      '&:hover': {
        backgroundColor: 'var(--_bg-hover)',
        border: 'var(--_border-hover)'
      },
      '&:active, &:focus': {
        backgroundColor: 'var(--_bg-active)',
        border: 'var(--_border-active)'
      },
      '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: 'var(--_bg-disabled)',
        color: 'var(--_color-disabled)',
        border: 'var(--_border-disabled)'
      },
      '&.tonal': { ...tonalVariantColors.light() },
      '&.outlined': { ...outlinedVariantColors.light() },
      '&.text': { ...textVariantColors.light() },
      '&.neutralVariant': {
        ...defaultVariantColors.light('neutralVariant'),
        '&.tonal': { ...tonalVariantColors.light('neutralVariant') },
        '&.outlined': { ...outlinedVariantColors.light('neutralVariant') },
        '&.text': { ...textVariantColors.light('neutralVariant') }
      },
      '&.primary': {
        ...defaultVariantColors.light('primary'),
        '&.tonal': { ...tonalVariantColors.light('primary') },
        '&.outlined': { ...outlinedVariantColors.light('primary') },
        '&.text': { ...textVariantColors.light('primary') }
      },
      '&.secondary': {
        ...defaultVariantColors.light('secondary'),
        '&.tonal': { ...tonalVariantColors.light('secondary') },
        '&.outlined': { ...outlinedVariantColors.light('secondary') },
        '&.text': { ...textVariantColors.light('secondary') }
      },
      '&.tertiary': {
        ...defaultVariantColors.light('tertiary'),
        '&.tonal': { ...tonalVariantColors.light('tertiary') },
        '&.outlined': { ...outlinedVariantColors.light('tertiary') },
        '&.text': { ...textVariantColors.light('tertiary') }
      },
      '&.error': {
        ...defaultVariantColors.light('error'),
        '&.tonal': { ...tonalVariantColors.light('error') },
        '&.outlined': { ...outlinedVariantColors.light('error') },
        '&.text': { ...textVariantColors.light('error') }
      },
      'body.dark &': { ...darkMode },
      '@media (prefers-color-scheme: dark)': { ...darkMode }
    }
  })
}
