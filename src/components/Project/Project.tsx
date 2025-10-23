import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { useLanguage } from '../../contexts/LanguageContext';
import React from 'react';

// Type assertion to fix ScrollAnimation component issue
const ScrollAnimationComponent = ScrollAnimation as unknown as React.ComponentType<any>;

export function Project() {
  const { t } = useLanguage()
  
  return (
    <Container id="project">
      <h2>{t('projects.title')}</h2>
      <div className="projects">

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/holydeo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://holydeo.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/Holydeo.jpg" alt="HOLYDEO Platform" />
              </div>
              <h3>{t('projects.holydeo.title')}</h3>
              <p>
                {t('projects.holydeo.description')}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Supabase</li>
                <li>Firebase Auth</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/jubilalia" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://jubilalia.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/Jubilalia.jpg" alt="Jubilalia Platform" />
              </div>
              <h3>{t('projects.jubilalia.title')}</h3>
              <p>
                {t('projects.jubilalia.description')}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Supabase</li>
                <li>Google OAuth</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/quincenalia" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://quincenalia.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/quincenalia.jpg" alt="Quincenalia Platform" />
              </div>
              <h3>{t('projects.quincenalia.title')}</h3>
              <p>
                {t('projects.quincenalia.description')}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>Supabase</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/trastalia" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://trastalia.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/Trastalia.jpg" alt="Trastalia Platform" />
              </div>
              <h3>{t('projects.trastalia.title')}</h3>
              <p>
                {t('projects.trastalia.description')}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue.js 3</li>
                <li>MongoDB</li>
                <li>Railway</li>
                <li>Vercel</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Mobile</title>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/Trastalia-android" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="/Images/app-release.apk" download rel="noreferrer">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/imagen.png" alt="Trastalia Android App" />
              </div>
              <h3>{t('projects.trastaliaAndroid.title')}</h3>
              <p>
                {t('projects.trastaliaAndroid.description')}
              </p>
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a 
                  href="/Images/app-release.apk" 
                  download 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#23ce6b',
                    color: '#fff',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1fb35f';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#23ce6b';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Descargar APK Android
                </a>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue.js 3</li>
                <li>Capacitor</li>
                <li>Android</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aseran74/compartalia" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <div className="project-image">
                <img src="/Images/Portofolio.png" alt="Compartalia Admin Dashboard" />
              </div>
              <h3>{t('projects.compartalia.title')}</h3>
              <p>
                {t('projects.compartalia.description')}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue.js 3</li>
                <li>Tailwind CSS 4</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationComponent>

      </div>
    </Container>
  );
}