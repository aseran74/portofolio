import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Vinayak_Singh_Resume.pdf'
import { useLanguage } from '../../contexts/LanguageContext'
export function Header() {
  const [isActive, setActive] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
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
