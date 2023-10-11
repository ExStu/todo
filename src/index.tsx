import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
// import { ThemeProvider } from '@emotion/react'
// import { Global } from '@emotion/react'

// import './index.scss'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import store, {persistor} from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { theme } from './assets/styles/theme'
// import { globals } from './assets/styles/global'
// import { globals } from './assets/styles/global'
// import { globals } from './assets/styles/global'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00174C'
    },
    secondary: {
      main: '#FFCC00'
    },
    
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <Global styles={globals}/> */}
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
