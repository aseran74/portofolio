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
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Construyo productos web con Vue, Nuxt y Tailwind, IA vía API, backends en Supabase e InsForge, y despliegue en AWS y Microsoft Cloud.',
    'hero.cta': 'Ver mis trabajos',
    'hero.contact': 'Contáctame',
    
    // About
    'about.title': 'Sobre mí',
    'about.description1': 'Soy Alvaro, desarrollador full stack en Madrid. Creo aplicaciones web de principio a fin con Vue, Nuxt, React y Angular, UI con Tailwind, y backends con Node.js, Express y TypeScript. Integro soluciones de IA mediante APIs, y trabajo con Supabase e InsForge como backend. También uso MongoDB y PostgreSQL (incluyendo flujos MCP). Tengo experiencia sólida en WordPress, Elementor y Voxel, y despliego en AWS y Microsoft Cloud. Busco un equipo donde aportar producto real, código limpio y velocidad de entrega.',
 
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
    'projects.quincenalia.description': 'Plataforma innovadora para gestionar la copropiedad de segundas residencias compartidas. Los inquilinos y copropietarios con derecho de uso reservan sus días en el calendario, crean incidencias, consultan mensajes con el administrador y participan en votaciones y gastos comunes. Pueden intercambiar estancias con otros alojamientos de la red mediante Guest points y Host points. Incluye calendario de uso compartido, reservas online, seguimiento de gastos, sistema de votaciones y comunicación entre copropietarios. Diseñada para familias, amigos y grupos que comparten viviendas vacacionales.',
    'projects.trastalia.title': 'Trastalia - Plataforma de Compraventa de Segunda Mano',
    'projects.trastalia.description': 'Plataforma revolucionaria de compraventa de artículos de segunda mano con sistema de puntos único. Desarrollada con Vue.js 3, backend en MongoDB desplegado en Railway y frontend en Vercel. Combina compra, venta e intercambio de forma inteligente y sostenible con más de 1000+ artículos y 500+ usuarios activos.',
    'projects.trastaliaAndroid.title': 'Trastalia Android - App Móvil de Segunda Mano',
    'projects.trastaliaAndroid.description': 'Aplicación Android nativa de Trastalia desarrollada con Capacitor y Vue.js 3. Marketplace móvil funcional con sistema dual de pagos (dinero real y puntos), gestión completa de inventario, búsqueda avanzada y experiencia optimizada para dispositivos móviles. APK descargable y completamente funcional.',
    'projects.compartalia.title': 'rutify - Plataforma de Carpooling Inteligente',
    'projects.compartalia.description': 'Plataforma web innovadora de carpooling para los viajes diarios al trabajo (compartir viajes para el extraradio de Madrid ) desarrollada con Vue.js 3 y Tailwind CSS. Conecta a conductores y pasajeros para optimizar desplazamientos, reducir costos de transporte y promover la movilidad sostenible. Incluye geolocalización, sistema de reservas, chat en tiempo real y gestión de rutas inteligentes.',
    'projects.loft2live.title': 'Loft2Live - Dashboard Admin (Vue + Tailwind)',
    'projects.loft2live.description': 'Plataforma que une inversión en lofts con la vida en comunidad. Los inquilinos reservan instalaciones compartidas, chatean con vecinos y consultan planes y actividades de la comunidad. Los propietarios siguen el rendimiento de su activo y pueden acceder a estancias en otros destinos a precio reducido. El ecosistema combina roles de huésped y anfitrión con guest points y host points: los inquilinos pueden desplazarse a otros alojamientos de la red canjeando o acumulando puntos, y quien hospeda refuerza su saldo al recibir huéspedes. Una nueva manera de comprar y vender lofts aprovechando ventajas fiscales y movilidad entre espacios.',
    'projects.calistry.title': 'Calistry - Calistenia para alumnos y profesores',
    'projects.calistry.description': 'App Flutter (web y móvil) de calistenia: los alumnos eligen ejercicios, arman rutinas, eligen profesores y siguen clases con profesores en tiempo real; pueden marcar rutinas como hechas y llevar el progreso. Backend con Insforge, estado con Riverpod y despliegue web en Vercel.',
    'projects.preseediq.title': 'PreSeedIQ - Preseed Lab UI',
    'projects.preseediq.description': 'Interfaz web para evaluar startups pre-seed: sube Markdown (pitch, financials, memo, team), elige use-cases o agentes al estilo preseed-lab y genera análisis con Gemini vía InsForge (edge function analyze; la clave GEMINI_API_KEY vive en el backend). La UI extrae señales (scores, bloqueadores, highlights), muestra gráficas comparativas y puede guardar localmente o en InsForge. Incluye sincronización opcional de prompts (npm run sync:preseedlab). Desarrollo con Node 20+, Vite y TypeScript; estructura en src/ui/, función en insforge/functions/analyze.ts y agentes en src/preseedlab/.',
    'projects.votalia.title': 'Votalia - Simulador de Blockchain PPoV',
    'projects.votalia.description': 'Suite web desarrollada con Angular 17 y Tailwind CSS que simula un protocolo blockchain híbrido Proof+Vote (PPoV). Incluye panel de métricas, monitorización de transacciones, simulaciones de contratos inteligentes, votaciones con verificación pública y módulos sectoriales (energía solar, notaría y proyección TPS global) integrados con Supabase.',
    'projects.gestionatuherencia.title': 'Gestiona tu herencia - Simulador sucesorio',
    'projects.gestionatuherencia.description': 'Wizard web para ordenar el reparto orientativo de una herencia en España: vecindad civil, patrimonio, familia, tercios hereditarios, adjudicación de inmuebles y estimación del impuesto de sucesiones. Genera un borrador imprimible/PDF y captura leads para despacho. Desarrollada con Nuxt 3, TypeScript, Pinia e InsForge.',
    'projects.importalia.title': 'Importalia - Importación conjunta desde China',
    'projects.importalia.description': 'Plataforma para importar productos desde China en grupo, compartiendo costes de contenedor, gestión aduanera y validación de producto antes de comprar. Una campaña agrupa compradores del mismo producto, reparte los costes de importación y muestra señales de confianza como validación por ojeador, rating del vendedor y ratio de recompra. Incluye landing pública, dashboard de campañas con filtros y búsqueda, creación con desglose de costes (logística, IVA, aranceles), flujo para unirse indicando unidades y dirección, y autenticación con email y Google. Desarrollada con Vue 3, TypeScript, Pinia y InsForge.',
    
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
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I build web products with Vue, Nuxt and Tailwind, AI via APIs, backends on Supabase and InsForge, and deploy on AWS and Microsoft Cloud.',
    'hero.cta': 'See my work',
    'hero.contact': 'Contact me',
    
    // About
    'about.title': 'About me',
    'about.description1': 'I\'m Alvaro, a full stack developer based in Madrid. I ship end-to-end web apps with Vue, Nuxt, React and Angular, UI with Tailwind, and backends with Node.js, Express and TypeScript. I integrate AI solutions through APIs, and work with Supabase and InsForge as backend. I also use MongoDB and PostgreSQL (including MCP workflows). Strong experience with WordPress, Elementor and Voxel, deploying on AWS and Microsoft Cloud. Looking for a team where I can deliver real product, clean code and fast iteration.',
    'about.education': 'Education:',
    'about.education.degree': 'Certificado Mongo DB bootcamp ',
    'about.education.school': 'Fullstack Developer Ironhack (MCA) ',
    'about.education.gpa': '8.09 CGPA',
    'about.experience': 'Experience:',
    'about.experience.title': 'Software Developer',
    'about.experience.company': 'Freelance | October 2024 - Present',
    'about.experience.location': 'Madrid , Spain',
    'about.skills': 'Here are my main skills:',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.holydeo.title': 'HOLYDEO - Medium-Term Tourist Rental Platform',
    'projects.holydeo.description': 'First modern web platform specialized in medium-term tourist rentals, focused on solving vacation rental seasonality. Maximizes property profitability during low season (September-June) with complete real estate management, tourist experiences, advanced booking system and Firebase authentication.',
    'projects.jubilalia.title': 'Jubilalia - Platform for Retirees',
    'projects.jubilalia.description': 'Web platform designed specifically for retired people looking to share housing, create friendships and enjoy activities together. Includes social network, housing sharing system, community activities, geolocation and secure authentication with Google OAuth. Connects senior people to improve their quality of life.',
    'projects.quincenalia.title': 'Quincenalia - Second Home Co-ownership Management',
    'projects.quincenalia.description': 'Innovative platform to manage co-ownership of shared second homes. Tenants and co-owners with usage rights book their days on the calendar, open maintenance tickets, read and send messages to the property administrator, and take part in votes and common expenses. They can swap stays across the network using Guest points and Host points. Includes shared-use calendar, online bookings, expense tracking, voting and communication between co-owners. Designed for families, friends and groups sharing vacation homes.',
    'projects.trastalia.title': 'Trastalia - Second-Hand Marketplace Platform',
    'projects.trastalia.description': 'Revolutionary second-hand marketplace platform with unique points system. Built with Vue.js 3, MongoDB backend deployed on Railway and frontend on Vercel. Combines buying, selling and exchanging intelligently and sustainably with 1000+ items and 500+ active users.',
    'projects.trastaliaAndroid.title': 'Trastalia Android - Mobile Second-Hand App',
    'projects.trastaliaAndroid.description': 'Native Android application of Trastalia built with Capacitor and Vue.js 3. Fully functional mobile marketplace with dual payment system (real money and points), complete inventory management, advanced search and optimized experience for mobile devices. Downloadable and fully functional APK.',
    'projects.compartalia.title': 'rutify - Smart Carpooling Platform',
    'projects.compartalia.description': 'Innovative carpooling (ride-sharing) web platform built with Vue.js 3 and Tailwind CSS. Connects drivers and passengers to optimize commutes, reduce transportation costs and promote sustainable mobility. Includes geolocation, booking system, real-time chat and intelligent route management.',
    'projects.loft2live.title': 'Loft2Live - Admin Dashboard (Vue + Tailwind)',
    'projects.loft2live.description': 'A platform that blends loft investing with community living. Tenants book shared facilities, message neighbors and browse community plans and activities. Owners track asset performance and can book stays elsewhere at reduced rates. The product layers guest and host roles with guest points and host points: tenants can move across the network by redeeming or earning points, while hosts grow their balance when they welcome guests. A new way to buy and sell lofts—tax advantages plus mobility between spaces.',
    'projects.calistry.title': 'Calistry - Calisthenics for students and coaches',
    'projects.calistry.description': 'Flutter app (web and mobile) for calisthenics: students pick exercises, build routines, choose coaches and join live coach-led classes; mark routines as completed and track progress. Insforge backend, Riverpod state management and web deployed on Vercel.',
    'projects.preseediq.title': 'PreSeedIQ - Preseed Lab UI',
    'projects.preseediq.description': 'Web UI to evaluate pre-seed startups: upload Markdown (pitch, financials, memo, team), pick preseed-lab-style use-cases or agents, and run analysis with Gemini through InsForge (analyze edge function; GEMINI_API_KEY stays server-side). The UI parses signals (scores, blockers, highlights), shows comparative charts, and can persist locally or in InsForge. Optional prompt sync (npm run sync:preseedlab). Built with Node 20+, Vite and TypeScript; src/ui/ for pages, insforge/functions/analyze.ts for the edge function, src/preseedlab/ for synced agents.',
    'projects.votalia.title': 'Votalia - PPoV Blockchain Simulation Suite',
    'projects.votalia.description': 'Web suite built with Angular 17 and Tailwind CSS that simulates a hybrid Proof+Vote (PPoV) blockchain protocol. Delivers dashboards, transaction monitoring, smart contracts laboratory, verifiable voting flows, sector simulations (solar energy, notary) and global TPS projections backed by Supabase services.',
    'projects.gestionatuherencia.title': 'Manage your inheritance - Succession simulator',
    'projects.gestionatuherencia.description': 'Web wizard for an indicative Spanish inheritance split: civil residence, estate, family, hereditary thirds, property allocation and succession tax estimate. Generates a printable/PDF draft and captures leads for a law firm. Built with Nuxt 3, TypeScript, Pinia and InsForge.',
    'projects.importalia.title': 'Importalia - Group Import from China',
    'projects.importalia.description': 'Platform to import products from China in groups, sharing container costs, customs management and product validation before buying. A campaign groups buyers for the same product, splits import costs and shows trust signals like scout validation, seller rating and repurchase ratio. Includes public landing, campaign dashboard with filters and search, creation with cost breakdown (logistics, VAT, duties), join flow with units and delivery address, and email/Google authentication. Built with Vue 3, TypeScript, Pinia and InsForge.',
    
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
