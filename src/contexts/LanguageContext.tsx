import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',
    
    // Hero
    'hero.hello': 'Hola',
    'hero.name': 'Alvaro Serrano',
    'hero.title': 'Desarrollador de Software',
    'hero.description': 'Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.',
    'hero.cta': 'Ver mis trabajos',
    'hero.contact': 'Contáctame',
    
    // About
    'about.title': 'Sobre mí',
    'about.description1': '¡Hola! Soy Alvaro, un Desarrollador de Software entusiasta especializado en desarrollo web, desarrollo con React Vite, Angular y Vue,(De Next ni lo mentes es imposible hacer nada con este framework) como bases de datos solo funciono con Supabase y con MongoDB utilizando la mayoría de las veces conexiones MCP para conectar todo, actualmente estudio AWS y Python tambien soy experto en elementor y Wordpress ,y sobretodo enamorado del tema Voxel con el que se puede adaptar todo .',
 
    'about.education': 'Educación:',
    'about.education.degree': 'Certificado en Mongo db  (MCA)',
    'about.education.school': 'Bootcamp de desarrollo web Full Stack',
    'about.education.gpa': '8.09 CGPA',
    'about.experience': 'Experiencia:',
    'about.experience.title': 'Desarrollador de Software',
    'about.experience.company': 'Freelance  | Octubre 2024 - Presente',
    'about.experience.location': 'Madrid, España',
    'about.skills': 'Estas son mis principales habilidades:',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.holydeo.title': 'HOLYDEO - Plataforma de Alquileres Turísticos de Media Estancia',
    'projects.holydeo.description': 'Primera plataforma web moderna especializada en alquileres turísticos de media estancia, enfocada en resolver la estacionalidad del turismo vacacional. Maximiza la rentabilidad de propiedades durante la temporada baja (septiembre-junio) con gestión inmobiliaria completa, experiencias turísticas, sistema de reservas avanzado y autenticación Firebase.',
    'projects.jubilalia.title': 'Jubilalia - Plataforma para Jubilados',
    'projects.jubilalia.description': 'Plataforma web diseñada específicamente para personas jubiladas que buscan compartir vivienda, crear amistades y disfrutar de actividades juntos. Incluye red social, sistema de compartir vivienda, actividades comunitarias, geolocalización y autenticación segura con Google OAuth. Conecta a personas senior para mejorar su calidad de vida.',
    'projects.quincenalia.title': 'Quincenalia - Gestión de Copropiedad de Segundas Residencias',
    'projects.quincenalia.description': 'Plataforma innovadora para gestionar la copropiedad de segundas residencias compartidas. Ofrece calendario de uso compartido, reservas online, seguimiento de gastos comunes, sistema de votaciones, resolución de incidencias y comunicación entre copropietarios. Diseñada para familias, amigos y grupos que comparten viviendas vacacionales.',
    
    // Contact
    'contact.title': 'Contáctame',
    'contact.description': '¿Tienes alguna pregunta o quieres trabajar conmigo?',
    'contact.email': 'alvaroserr@gmail.com',
    'contact.phone': '(+34) 616462861',
    'contact.send': 'Enviar mensaje',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.made': 'Hecho con',
    'footer.by': 'por Alvaro Serrano',
    
    // Language
    'language.es': 'Español',
    'language.en': 'English'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    
    // Hero
    'hero.hello': 'Hello',
    'hero.name': 'Alvaro Serrano',
    'hero.title': 'Software Developer',
    'hero.description': 'Passionate developer creating innovative solutions and exceptional digital experiences.',
    'hero.cta': 'See my work',
    'hero.contact': 'Contact me',
    
    // About
    'about.title': 'About me',
    'about.description1': 'Hi there! I\'m Alvaro, an enthusiastic Software Developer specialized in web development, React Vite development, Angular and Vue, as databases I only work with Supabase and MongoDB using MCP connections most of the time to connect everything, currently studying AWS and Python.',
    'about.education': 'Education:',
    'about.education.degree': 'Master of Computer Applications (MCA)',
    'about.education.school': 'Vellore Institute of Technology, Chennai | July 2023 - Present',
    'about.education.gpa': '8.09 CGPA',
    'about.experience': 'Experience:',
    'about.experience.title': 'Software Developer',
    'about.experience.company': 'KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present',
    'about.experience.location': 'Bangalore, India',
    'about.skills': 'Here are my main skills:',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.holydeo.title': 'HOLYDEO - Medium-Term Tourist Rental Platform',
    'projects.holydeo.description': 'First modern web platform specialized in medium-term tourist rentals, focused on solving vacation rental seasonality. Maximizes property profitability during low season (September-June) with complete real estate management, tourist experiences, advanced booking system and Firebase authentication.',
    'projects.jubilalia.title': 'Jubilalia - Platform for Retirees',
    'projects.jubilalia.description': 'Web platform designed specifically for retired people looking to share housing, create friendships and enjoy activities together. Includes social network, housing sharing system, community activities, geolocation and secure authentication with Google OAuth. Connects senior people to improve their quality of life.',
    'projects.quincenalia.title': 'Quincenalia - Second Home Co-ownership Management',
    'projects.quincenalia.description': 'Innovative platform to manage co-ownership of shared second homes. Offers shared use calendar, online bookings, common expense tracking, voting system, incident resolution and communication between co-owners. Designed for families, friends and groups sharing vacation homes.',
    
    // Contact
    'contact.title': 'Contact me',
    'contact.description': 'Do you have any questions or want to work with me?',
    'contact.email': 'alvaroserr@gmail.com',
    'contact.phone': '(+34) 616462861',
    'contact.send': 'Send message',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.made': 'Made with',
    'footer.by': 'by Alvaro Serrano',
    
    // Language
    'language.es': 'Español',
    'language.en': 'English'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
