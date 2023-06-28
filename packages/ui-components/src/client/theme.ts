import { createTheme } from "@mui/material/styles";

// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#011E41",
      light: "#DFE7EA",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "Electrolux Sans,Microsoft YaHei,SimSun,Heiti SC,Roboto,Arial,sans-serif;",
  },
});

export default defaultTheme;
