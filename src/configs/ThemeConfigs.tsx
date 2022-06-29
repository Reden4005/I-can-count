import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    color1: string; // Pink
    color2: string; // Violet
    color3: string; // Yellow
    color4: string; // Blue
    color5: string; // Green
    color6: string; // Orange
    shadow: string;
  }

  interface PaletteOptions {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
    shadow: string;
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 6
  },
  palette: {
    background: { default: "#aaffee" },
    color1: "#FFAACC",
    color2: "#EEAAFF",
    color3: "#F6FFD5",
    color4: "#55DDFF",
    color5: "#AAFFEE",
    color6: "#FFCCAA",
    shadow: "#AAAAAA"
  }
});
