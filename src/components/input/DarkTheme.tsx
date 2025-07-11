import { ThemeOptions, createTheme } from '@mui/material';

// Extiende el tema de MUI
declare module '@mui/material/styles' {
  interface Theme {
    borderRadius: number;
    colors: {
      primary: string;
      secondary: string;
    };
  }
  // Extiende ThemeOptions para permitir personalización
  interface ThemeOptions {
    borderRadius?: number;
    colors?: {
      primary?: string;
      secondary?: string;
    };
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC'
    },
    secondary: {
      main: '#03DAC6'
    }
  },
  borderRadius: 8, // Propiedad personalizada
  colors: {
    primary: '#BB86FC',
    secondary: '#03DAC6'
  }
});

export default darkTheme;
