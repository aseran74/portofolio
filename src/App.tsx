import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from './contexts/LanguageContext'

import 'react-toastify/dist/ReactToastify.css'

// Type assertion to fix GlobalStyle component issue
const GlobalStyleComponent = GlobalStyle as React.ComponentType

function App() {
  return (
    <LanguageProvider>
      <GlobalStyleComponent />
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Footer></Footer>
    </LanguageProvider>
  )
}

export default App
