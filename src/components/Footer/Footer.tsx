import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import { useLanguage } from '../../contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <Container className="footer">
      <a href="https://alvaroserranoportofolio.vercel.app/" className="logo">
        <span>alvaroserrano</span>
        <span>portofolio.vercel.app</span>
      </a>
      <div>
        <p>
          {t('footer.made')} <img src={reactIcon} alt="React" /> {t('footer.by')}
        </p>
      </div>
      <div className="social-media">
        <a
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
        </a>
        <a
          href="https://alvaroserranoportofolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
