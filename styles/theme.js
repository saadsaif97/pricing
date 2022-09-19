import { extendTheme } from '@chakra-ui/react'

const colors = {
  brandDark: {
    50: "rgba(128, 90, 213, 0.04)",
    100: "rgba(128, 90, 213, 0.06)",
    200: "rgba(128, 90, 213, 0.08)",
    300: "rgba(128, 90, 213, 0.16)",
    400: "rgba(128, 90, 213, 0.24)",
    500: "rgba(128, 90, 213, 0.36)",
    600: "rgba(128, 90, 213, 0.48)",
    700: "rgba(128, 90, 213, 0.64)",
    800: "rgba(128, 90, 213, 0.80)",
    900: "rgba(128, 90, 213, 0.92)",
    solid: "#6B46C1"
  },
  brandLight: {
    50: "rgba(240, 234, 251, 0.04)",
    100: "rgba(240, 234, 251, 0.06)",
    200: "rgba(240, 234, 251, 0.08)",
    300: "rgba(240, 234, 251, 0.16)",
    400: "rgba(240, 234, 251, 0.24)",
    500: "rgba(240, 234, 251, 0.36)",
    600: "rgba(240, 234, 251, 0.48)",
    700: "rgba(240, 234, 251, 0.64)",
    800: "rgba(240, 234, 251, 0.80)",
    900: "rgba(240, 234, 251, 0.92)",
    solid: "#f0eafb"
  }
}

const theme = extendTheme({ 
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
})

export default theme
