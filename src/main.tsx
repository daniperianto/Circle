import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/rootReducer.ts'
import { Provider } from 'react-redux'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'darkBg'
      }
    }
  },
  colors: {
    darkBg: '#191919'
  }
})


const queryClient = new QueryClient()
const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
