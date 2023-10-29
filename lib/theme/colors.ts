import {
  Hct,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeTonalSpot,
  SchemeVibrant,
  argbFromHex,
  hexFromArgb,
  type CorePalette
} from '@material/material-color-utilities'
import { defaultOptions } from '../options'
import { type PluginOptions } from '../types'

const getDarktScheme = (palette: CorePalette): Record<string, string> => ({
  background: hexFromArgb(palette.n1.tone(6)),
  onBackground: hexFromArgb(palette.n1.tone(90)),
  surface: hexFromArgb(palette.n1.tone(6)),
  surfaceDim: hexFromArgb(palette.n1.tone(6)),
  surfaceBright: hexFromArgb(palette.n1.tone(24)),
  surfaceContainerLowest: hexFromArgb(palette.n1.tone(4)),
  surfaceContainerLow: hexFromArgb(palette.n1.tone(10)),
  surfaceContainer: hexFromArgb(palette.n1.tone(12)),
  surfaceContainerHigh: hexFromArgb(palette.n1.tone(17)),
  surfaceContainerHighest: hexFromArgb(palette.n1.tone(22)),
  onSurface: hexFromArgb(palette.n1.tone(90)),
  surfaceVariant: hexFromArgb(palette.n2.tone(30)),
  onSurfaceVariant: hexFromArgb(palette.n2.tone(80)),
  inverseSurface: hexFromArgb(palette.n1.tone(90)),
  inverseOnSurface: hexFromArgb(palette.n1.tone(20)),
  outline: hexFromArgb(palette.n2.tone(60)),
  outlineVariant: hexFromArgb(palette.n2.tone(30)),
  shadow: hexFromArgb(palette.n1.tone(100)),
  scrim: hexFromArgb(palette.n1.tone(0)),
  surfaceTint: hexFromArgb(palette.a1.tone(80)),
  primary: hexFromArgb(palette.a1.tone(80)),
  onPrimary: hexFromArgb(palette.a1.tone(20)),
  primaryContainer: hexFromArgb(palette.a1.tone(30)),
  onPrimaryContainer: hexFromArgb(palette.a1.tone(90)),
  inversePrimary: hexFromArgb(palette.a1.tone(40)),
  secondary: hexFromArgb(palette.a2.tone(80)),
  onSecondary: hexFromArgb(palette.a2.tone(20)),
  secondaryContainer: hexFromArgb(palette.a2.tone(30)),
  onSecondaryContainer: hexFromArgb(palette.a2.tone(90)),
  tertiary: hexFromArgb(palette.a3.tone(80)),
  onTertiary: hexFromArgb(palette.a3.tone(20)),
  tertiaryContainer: hexFromArgb(palette.a3.tone(30)),
  onTertiaryContainer: hexFromArgb(palette.a3.tone(90)),
  error: hexFromArgb(palette.error.tone(80)),
  onError: hexFromArgb(palette.error.tone(20)),
  errorContainer: hexFromArgb(palette.error.tone(30)),
  onErrorContainer: hexFromArgb(palette.error.tone(90)),
  primaryFixed: hexFromArgb(palette.a1.tone(90)),
  primaryFixedDim: hexFromArgb(palette.a1.tone(80)),
  onPrimaryFixed: hexFromArgb(palette.a1.tone(10)),
  onPrimaryFixedVariant: hexFromArgb(palette.a1.tone(30)),
  secondaryFixed: hexFromArgb(palette.a2.tone(90)),
  secondaryFixedDim: hexFromArgb(palette.a2.tone(80)),
  onSecondaryFixed: hexFromArgb(palette.a2.tone(10)),
  onSecondaryFixedVariant: hexFromArgb(palette.a2.tone(30)),
  tertiaryFixed: hexFromArgb(palette.a3.tone(90)),
  tertiaryFixedDim: hexFromArgb(palette.a3.tone(80)),
  onTertiaryFixed: hexFromArgb(palette.a3.tone(10)),
  onTertiaryFixedVariant: hexFromArgb(palette.a3.tone(30))
})

const getLightScheme = (palette: CorePalette): Record<string, string> => ({
  background: hexFromArgb(palette.n1.tone(98)),
  onBackground: hexFromArgb(palette.n1.tone(10)),
  surface: hexFromArgb(palette.n1.tone(98)),
  surfaceDim: hexFromArgb(palette.n1.tone(87)),
  surfaceBright: hexFromArgb(palette.n1.tone(98)),
  surfaceContainerLowest: hexFromArgb(palette.n1.tone(100)),
  surfaceContainerLow: hexFromArgb(palette.n1.tone(96)),
  surfaceContainer: hexFromArgb(palette.n1.tone(94)),
  surfaceContainerHigh: hexFromArgb(palette.n1.tone(92)),
  surfaceContainerHighest: hexFromArgb(palette.n1.tone(90)),
  onSurface: hexFromArgb(palette.n1.tone(10)),
  surfaceVariant: hexFromArgb(palette.n2.tone(90)),
  onSurfaceVariant: hexFromArgb(palette.n2.tone(30)),
  inverseSurface: hexFromArgb(palette.n1.tone(20)),
  inverseOnSurface: hexFromArgb(palette.n1.tone(95)),
  outline: hexFromArgb(palette.n2.tone(50)),
  outlineVariant: hexFromArgb(palette.n2.tone(80)),
  shadow: hexFromArgb(palette.n1.tone(0)),
  scrim: hexFromArgb(palette.n1.tone(0)),
  surfaceTint: hexFromArgb(palette.a1.tone(40)),
  primary: hexFromArgb(palette.a1.tone(40)),
  onPrimary: hexFromArgb(palette.a1.tone(100)),
  primaryContainer: hexFromArgb(palette.a1.tone(90)),
  onPrimaryContainer: hexFromArgb(palette.a1.tone(10)),
  inversePrimary: hexFromArgb(palette.a1.tone(80)),
  secondary: hexFromArgb(palette.a2.tone(40)),
  onSecondary: hexFromArgb(palette.a2.tone(100)),
  secondaryContainer: hexFromArgb(palette.a2.tone(90)),
  onSecondaryContainer: hexFromArgb(palette.a2.tone(10)),
  tertiary: hexFromArgb(palette.a3.tone(40)),
  onTertiary: hexFromArgb(palette.a3.tone(100)),
  tertiaryContainer: hexFromArgb(palette.a3.tone(90)),
  onTertiaryContainer: hexFromArgb(palette.a3.tone(10)),
  error: hexFromArgb(palette.error.tone(40)),
  onError: hexFromArgb(palette.error.tone(100)),
  errorContainer: hexFromArgb(palette.error.tone(90)),
  onErrorContainer: hexFromArgb(palette.error.tone(10)),
  primaryFixed: hexFromArgb(palette.a1.tone(90)),
  primaryFixedDim: hexFromArgb(palette.a1.tone(80)),
  onPrimaryFixed: hexFromArgb(palette.a1.tone(10)),
  onPrimaryFixedVariant: hexFromArgb(palette.a1.tone(30)),
  secondaryFixed: hexFromArgb(palette.a2.tone(90)),
  secondaryFixedDim: hexFromArgb(palette.a2.tone(80)),
  onSecondaryFixed: hexFromArgb(palette.a2.tone(10)),
  onSecondaryFixedVariant: hexFromArgb(palette.a2.tone(30)),
  tertiaryFixed: hexFromArgb(palette.a3.tone(90)),
  tertiaryFixedDim: hexFromArgb(palette.a3.tone(80)),
  onTertiaryFixed: hexFromArgb(palette.a3.tone(10)),
  onTertiaryFixedVariant: hexFromArgb(palette.a3.tone(30))
})

const getTones = (palette: CorePalette): Record<string, Record<string, string>> => Array.from({ length: 101 }, (_, idx) => idx).reduce((acc, shade) => ({
  primary: { ...acc.primary, [shade]: hexFromArgb(palette.a1.tone(shade)) },
  secondary: { ...acc.secondary, [shade]: hexFromArgb(palette.a2.tone(shade)) },
  tertiary: { ...acc.tertiary, [shade]: hexFromArgb(palette.a3.tone(shade)) },
  neutral: { ...acc.neutral, [shade]: hexFromArgb(palette.n1.tone(shade)) },
  neutralVariant: { ...acc.neutralVariant, [shade]: hexFromArgb(palette.n2.tone(shade)) },
  error: { ...acc.error, [shade]: hexFromArgb(palette.error.tone(shade)) }
}), { primary: {}, secondary: {}, tertiary: {}, neutral: {}, neutralVariant: {}, error: {} })

const getThemeFromScheme = (Scheme: any, color: string): Record<string, Record<string, any>> => {
  const schemeLight = new Scheme(Hct.fromInt(argbFromHex(color)), false)
  const schemeDark = new Scheme(Hct.fromInt(argbFromHex(color)), true)

  const palette = {
    light: {
      a1: schemeLight.primaryPalette,
      a2: schemeLight.secondaryPalette,
      a3: schemeLight.tertiaryPalette,
      n1: schemeLight.neutralPalette,
      n2: schemeLight.neutralVariantPalette,
      error: schemeLight.errorPalette
    },
    dark: {
      a1: schemeDark.primaryPalette,
      a2: schemeDark.secondaryPalette,
      a3: schemeDark.tertiaryPalette,
      n1: schemeDark.neutralPalette,
      n2: schemeDark.neutralVariantPalette,
      error: schemeDark.errorPalette
    }
  }

  return {
    ...getTones(palette.light),
    light: getLightScheme(palette.light),
    dark: getDarktScheme(palette.dark)
  }
}

const palettes = {
  content: (primary: string) => getThemeFromScheme(SchemeContent, primary),
  expressive: (primary: string) => getThemeFromScheme(SchemeExpressive, primary),
  fidelity: (primary: string) => getThemeFromScheme(SchemeFidelity, primary),
  monochrome: (primary: string) => getThemeFromScheme(SchemeMonochrome, primary),
  neutral: (primary: string) => getThemeFromScheme(SchemeNeutral, primary),
  tonalSpot: (primary: string) => getThemeFromScheme(SchemeTonalSpot, primary),
  vibrant: (primary: string) => getThemeFromScheme(SchemeVibrant, primary)
}

export default function colors (options: PluginOptions = {}): Record<string, any> {
  return palettes[options?.colorScheme ?? defaultOptions.colorScheme](options.mainColor ?? defaultOptions.mainColor)
}
