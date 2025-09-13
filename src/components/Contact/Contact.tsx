import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { useLanguage } from '../../contexts/LanguageContext';


export function Contact(){
  const { t } = useLanguage()

  return(
    <Container id="contact">
      <header>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.description')}</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:alvaroserr@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:alvaroserr@gmail.com">{t('contact.email')}</a>
        </div>
        <div>
        <a href="tel:+34616462861"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+34616462861">{t('contact.phone')}</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}