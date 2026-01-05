import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CommonColors {
    rose: string;
    blue: string;
  }

  interface TypeText {
    secondaryText: string;
    error: string;
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface Shape {
    borderRadius4: number;
    borderRadius6: number;
    borderRadius8: number;
    borderRadius10: number;
    borderRadius12: number;
    borderRadius14: number;
    borderRadius16: number;
  }

  interface ShapeOptions {
    borderRadius4?: number;
    borderRadius6?: number;
    borderRadius8?: number;
    borderRadius10?: number;
    borderRadius12?: number;
    borderRadius14?: number;
    borderRadius16?: number;
  }

  interface Palette {
    border: {
      primary: string;
      // secondary: string;
      error: string;
      // divider: string;
    };
  }

  interface PaletteOptions {
    border?: {
      primary?: string;
      // secondary?: string;
      error?: string;
      // divider?: string;
    };
  }
}
