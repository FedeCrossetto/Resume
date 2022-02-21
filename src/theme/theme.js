import { extendTheme, theme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/poppins/400.css'
export default extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brand: {
      primary: "#48FE9D",
      secondary: "#724EFF",
      tertiary: "#9b9c9e",
      fourth:"#AAA1D0",
      fifth:"#D0A1A1",
      dark:"#1a202c",
      light:"#ffffff",
      backLight:"#F8F5FE"
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "light",
      },
      size: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },
});
