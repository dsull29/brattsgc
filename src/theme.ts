import { createTheme, type MantineColorsTuple } from '@mantine/core'

export const PAGE_BACKGROUND = '#D9CDE4'
export const TEXT_COLOR = '#000000'
export const EMAIL_COLOR = '#A349F5'
export const BRAND_COLOR = '#5A256C'

// Index 6 is the brand color, which is what buttons use.
const brand: MantineColorsTuple = [
  '#f5eef8',
  '#e6d8ec',
  '#cdb0d9',
  '#b386c5',
  '#9c63b3',
  '#8d4ca6',
  BRAND_COLOR,
  '#4f2060',
  '#431a52',
  '#361444',
]

export const theme = createTheme({
  colors: { brand },
  primaryColor: 'brand',
  primaryShade: 6,
  fontFamily: 'Montserrat, sans-serif',
  headings: { fontFamily: '"Cormorant Garamond", serif', fontWeight: '400' },
  black: TEXT_COLOR,
})
