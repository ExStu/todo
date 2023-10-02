import { Global, ThemeProvider } from '@emotion/react'
import MainPage from '../pages/Main'
import { globals } from '../assets/styles/global'
import {FC} from 'react'
import { theme } from '../assets/styles/theme'
// declare module '@emotion/react' {
//   export interface Theme {
//     color: string
//   }
// }

const App: FC = () => {
  
  return (
    // <ThemeProvider theme={theme}>
      <MainPage/>
    // {/* </ThemeProvider> */}
   
  );
}

export default App;
