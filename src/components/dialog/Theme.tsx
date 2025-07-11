import { createTheme } from "@mui/material";

export const blackTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5722'
    },
    background: {
      default: '#000000', // Fondo principal completamente negro
      paper: '#000000' // Fondo de papel o diálogos completamente negro
    },
    text: {
      primary: '#ffffff', // Texto principal blanco puro
      secondary: '#9e9e9e' // Texto secundario gris claro
    },
    divider: '#333333' // Separadores gris oscuro
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente predeterminada
    allVariants: {
      color: '#ffffff' // Asegura que todo el texto sea blanco por defecto
    }
  }
});
