
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8B5CF6",
      dark: "#7C3AED",
      light: "#A78BFA",
    },

    secondary: {
      main: "#EC4899",
      dark: "#DB2777",
      light: "#F472B6",
    },

    background: {
      default: "#0B0B14",
      paper: "#151522",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
    },

    divider: "rgba(255,255,255,0.1)",
  },

  typography: {
    fontFamily: "'Inter', sans-serif",

    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B0B14",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;