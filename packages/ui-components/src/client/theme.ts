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
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.5)",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
            padding: "12px 5px",
            border: "none",
            "& .MuiAutocomplete-input": {
              padding: "0 0 0 15px",
            },
          },
        },
        popper: {
          inset: "-1px auto auto 0px !important",
        },
        paper: {
          borderRadius: 0,
          boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.5)",
        },
      },
    },
  },
  typography: {
    fontFamily: "Electrolux Sans,Microsoft YaHei,SimSun,Heiti SC,Roboto,Arial,sans-serif;",
  },
});
