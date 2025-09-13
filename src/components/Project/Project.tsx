import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { useLanguage } from '../../contexts/LanguageContext';


export function Project() {
  const { t } = useLanguage()
  
  return (
    <Container id="project">
      <h2>{t('projects.title')}</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
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
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
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
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
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
        </ScrollAnimation>



      </div>
    </Container>
  );
}