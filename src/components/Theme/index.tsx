import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#58a6ff" },
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#c9d1d9", secondary: "#8b949e" },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0366d6" },
    background: { default: "#ffffff", paper: "#f6f8fa" },
    text: { primary: "#24292e", secondary: "#57606a" },
  },
});
