import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: { main: "#7792F0", contrastText: "#FFF" },
    secondary: { main: "#B1A9A9", contrastText: "#B1A9A9" }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      }
    }
  }
});
