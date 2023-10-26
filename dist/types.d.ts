export interface PluginOptions {
  colorScheme?: 'content'
  | 'expressive'
  | 'fidelity'
  | 'monochrome'
  | 'neutral'
  | 'tonalSpot'
  | 'vibrant'
  mainColor?: string
  fontFamily?: {
    body?: string
    heading?: string
  }
}
