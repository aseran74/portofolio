import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import { IronMan } from '../IronMan/IronMan'
import { useLanguage } from '../../contexts/LanguageContext'
import React from 'react';

// Type assertion to fix ScrollAnimation component issue
const ScrollAnimationComponent = ScrollAnimation as React.ComponentType<any>;

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimationComponent animateIn="fadeInUp">
          <p>{t('hero.hello')} <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>{t('hero.name')}</h1>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>{t('hero.title')}</h3>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">{t('hero.description')}</p>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">{t('hero.contact')}</NavHashLink>
          </BrowserRouter>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/alvaro-serrano"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/AlvaroSerrano/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B34616462861&text=Hello+Alvaro+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/AlvaroSerrano"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </ScrollAnimationComponent>
      </div>
      <div className="hero-image">
        <ScrollAnimationComponent animateIn="fadeInRight" delay={1 * 1000}>
          <IronMan />
        </ScrollAnimationComponent>
      </div>
    </Container>
  )
}