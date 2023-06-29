import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
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
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
          ":hover": { boxShadow: "none" },
        },
        text: {
          ":hover": { backgroundColor: "rgba(1, 30, 65, .04)" },
        },
        contained: {
          ":hover": { backgroundColor: "rgba(1, 30, 65, .7)" },
        },
      },
    },
  },
  typography: {
    fontFamily: "Electrolux Sans,Microsoft YaHei,SimSun,Heiti SC,Roboto,Arial,sans-serif;",
  },
});
