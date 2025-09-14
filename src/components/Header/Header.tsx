import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import Resume from '../../assets/Alvaro_Serrano_Resume.pdf'
import { useLanguage } from '../../contexts/LanguageContext'
export function Header() {
  const [isActive, setActive] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  
  // Cargar tema guardado al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const html = document.getElementsByTagName('html')[0]
    
    if (savedTheme === 'light') {
      html.classList.add('light')
      setIsLightTheme(true)
    } else {
      html.classList.remove('light')
      setIsLightTheme(false)
    }
  }, [])
  
  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0]
    const newTheme = !isLightTheme
    
    if (newTheme) {
      html.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
    
    setIsLightTheme(newTheme)
  }
  
  function closeMenu() {
    setActive(false)
  }
  
  function toggleLanguage() {
    setLanguage(language === 'es' ? 'en' : 'es')
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Alvaro "}</span>
          <span>{" Serrano/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
          checked={isLightTheme}
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {t('nav.home')}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {t('nav.about')}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {t('nav.projects')}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {t('nav.contact')}
          </NavHashLink>
          <button 
            onClick={toggleLanguage} 
            className="language-button"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <a href={Resume} download className="button">
            {t('nav.resume')}
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
