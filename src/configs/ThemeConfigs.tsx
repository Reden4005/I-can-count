import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    pastelPink: string;
    pastelViolet: string;
    pastelYellow: string;
    pastelBlue: string;
    pastelGreen: string;
    pastelOrange: string;
  }

  interface PaletteOptions {
    pastelPink: string;
    pastelViolet: string;
    pastelYellow: string;
    pastelBlue: string;
    pastelGreen: string;
    pastelOrange: string;
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 6
  },
  palette: {
    background: { default: "#aaffee" },
    pastelPink: "#FFAACC",
    pastelViolet: "#EEAAFF",
    pastelYellow: "#F6FFD5",
    pastelBlue: "#55DDFF",
    pastelGreen: "#AAFFEE",
    pastelOrange: "#FFCCAA"
  }
});
