import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      primaryLight: string
      primaryDark: string
      secondary: string
      white: string
      gray100: string
      gray300: string
      gray600: string
      black: string
    }
  }
}
