import React from 'react'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from './contexts/LanguageContext'

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Footer></Footer>
    </LanguageProvider>
  )
}

export default App
