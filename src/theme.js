import { createTheme } from "@mui/material/styles";

// Cormorant+Garamond
export const shades = {
	black: {
		100: "#cecece",
		200: "#9c9c9c",
		300: "#6b6b6b",
		400: "#393939",
		500: "#080808",
		600: "#060606",
		700: "#050505",
		800: "#030303",
		900: "#020202",
	},
	purple: {
   100: "#e6ccff",
   200: "#cc99ff",
   300: "#b366ff",
   400: "#9933ff",
   500: "#8000ff",
   600: "#6600cc",
   700: "#4d0099",
   800: "#330066",
   900: "#1a0033"
},
	gray: {
		100: "#e8eef3",
		200: "#d1dde7",
		300: "#bbcbdc",
		400: "#a4bad0",
		500: "#8da9c4",
		600: "#71879d",
		700: "#556576",
		800: "#38444e",
		900: "#1c2227",
	},
	yellow: {
		100: "#ffffcc",
		200: "#ffff99",
		300: "#ffff66",
		400: "#ffff33",
		500: "#ffff00",
		600: "#cccc00",
		700: "#999900",
		800: "#666600",
		900: "#333300",
	},
};

export const theme = createTheme({
  palette: {
    primary: {
      light: shades.black[200],
      main: shades.black[500],
    },
    secondary: {
      light: shades.purple[200],
      main: shades.purple[500],
    },
    gray: {
      dark: shades.gray[700],
      main: shades.gray[500],
      light: shades.gray[100],
    },
    neutral: {
      dark: shades.yellow[700],
      main: shades.yellow[500],
      light: shades.yellow[100],
    },
  },


  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
