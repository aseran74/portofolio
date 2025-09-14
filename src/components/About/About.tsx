import { Container } from "./styles";
// import Portofolio from "../../assets/Portofolio.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useLanguage } from '../../contexts/LanguageContext';
import { IronMan } from '../IronMan/IronMan';
import React from 'react';

// Type assertion to fix ScrollAnimation component issue
const ScrollAnimationComponent = ScrollAnimation as unknown as React.ComponentType<any>;

export function About() {
  const { t } = useLanguage()
  
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimationComponent animateIn="fadeInLeft">
          <h2>{t('about.title')}</h2>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            {t('about.description1')}
          </p>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>{t('about.education')}</h3>
            <h4>{t('about.education.degree')}</h4>
            <p>{t('about.education.school')}</p>
            <p>{t('about.education.gpa')}</p>
          </div>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>{t('about.experience')}</h3><h4>{t('about.experience.title')}</h4>
            <p>{t('about.experience.company')}</p>
            <p>{t('about.experience.location')}</p>
          </div>
        </ScrollAnimationComponent>

        <ScrollAnimationComponent animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>{t('about.skills')}</h3>
        </ScrollAnimationComponent>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimationComponent>
          </div>
          <div className="hability">
            <ScrollAnimationComponent animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimationComponent>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimationComponent animateIn="fadeInRight" delay={0.21 * 1000}>
          <div className="image-container yellow-circle">
            <img src="/Images/Portofolio.png" alt="Alvaro Serrano" />
          </div>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInRight" delay={0.25 * 1000}>
          <div className="image-container purple-circle">
            <img src="/Images/portofolio3.png" alt="Alvaro Serrano" />
          </div>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="iron-man-container">
            <IronMan />
          </div>
        </ScrollAnimationComponent>
      </div>
    </Container>
  )
}
