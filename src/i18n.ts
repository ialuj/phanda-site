// src/i18n.ts
import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    home: "Página Inicial",
    about: "Sobre Nós",
    servicesLabel: "Nossos Serviços", // ← alterado aqui
    contact: "Contacte-nos",
    headerTitle: "Bem-vindo à Phanda Tech Solutions",
    headerMessage: "Inovação tecnológica ao seu alcance",
    aboutUsTitle: "Sobre Nós",
    aboutUsMessage:
      "Somos uma empresa focada em soluções tecnológicas inteligentes que ajudam negócios a crescer, com uma equipe apaixonada por inovação e excelência.",
    servicesMenuLabel: "Serviços",
    serviceSectionTitle: "Nossos Serviços",
    services: {
      web: {
        title: "Desenvolvimento Web",
        description:
          "Sites modernos e responsivos para divulgar sua marca com excelência.",
      },
      mobile: {
        title: "Desenvolvimento Mobile",
        description:
          "Apps Android e iOS com desempenho nativo e design profissional.",
      },
      custom: {
        title: "Soluções Personalizadas",
        description: "Sistemas feitos sob medida, adaptados ao seu negócio.",
      },
      consulting: {
        title: "Consultoria em TI",
        description:
          "Melhore seus processos e reduza custos com apoio técnico especializado.",
      },
      training: {
        title: "Formação em TIC",
        description:
          "Capacitações práticas em tecnologias modernas para sua equipe.",
      },
      network: {
        title: "Infraestrutura de Rede",
        description: "Planejamento e instalação de redes robustas e seguras.",
      },
      hosting: {
        title: "Hospedagem",
        description:
          "Serviços de hospedagem confiáveis com suporte técnico local.",
      },
      hardware: {
        title: "Fornecimento de Equipamentos",
        description:
          "Venda e entrega de equipamentos de TI com garantia e suporte.",
      },
    },
    contactUsTitle: "Contacte-nos",
    contactUsTitleField: "Título",
    contactUsTitlePlaceholder: "Assunto do contato",
    contactUsEmailField: "E-mail",
    contactUsEmailPlaceholder: "seu@email.com",
    contactUsDescriptionField: "Descrição",
    contactUsDescriptionPlaceholder: "Descreva sua mensagem",
    copyRight: "Phanda Tech Solutions. Todos os direitos reservados.",
    sendOptionLabel: "Enviar",
  },
  en: {
    home: "Home",
    about: "About Us",
    servicesLabel: "Our Services", // ← renomeado aqui
    contact: "Contact Us",
    headerTitle: "Welcome to Phanda Tech Solutions",
    headerMessage: "Technological innovation at your reach",
    aboutUsTitle: "About Us",
    aboutUsMessage:
      "We are a company focused on intelligent technological solutions that help businesses grow, with a team passionate about innovation and excellence.",
    servicesMenuLabel: "Services",
    serviceSectionTitle: "Our Services",
    services: {
      web: {
        title: "Web Development",
        description:
          "Modern and responsive websites to showcase your brand with excellence.",
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Android and iOS apps with native performance and professional design.",
      },
      custom: {
        title: "Custom Solutions",
        description: "Tailor-made systems adapted to your business.",
      },
      consulting: {
        title: "IT Consulting",
        description:
          "Improve your processes and reduce costs with expert technical support.",
      },
      training: {
        title: "ICT Training",
        description: "Hands-on training in modern technologies for your team.",
      },
      network: {
        title: "Network Infrastructure",
        description: "Planning and installation of robust and secure networks.",
      },
      hosting: {
        title: "Hosting",
        description: "Reliable hosting services with local technical support.",
      },
      hardware: {
        title: "Equipment Supply",
        description:
          "Sales and delivery of IT equipment with warranty and support.",
      },
    },
    contactUsTitle: "Contact Us",
    contactUsTitleField: "Title",
    contactUsTitlePlaceholder: "Subject of the contact",
    contactUsEmailField: "Email",
    contactUsEmailPlaceholder: "your@email.com",
    contactUsDescriptionField: "Description",
    contactUsDescriptionPlaceholder: "Describe your message",
    copyRight: "Phanda Tech Solutions. All rights reserved.",
    sendOptionLabel: "Send",
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    servicesLabel: "Nuestros Servicios", // ← sem conflito
    contact: "Contáctanos",
    headerTitle: "Bienvenido a Phanda Tech Solutions",
    headerMessage: "Innovación tecnológica a tu alcance",
    aboutUsTitle: "Sobre Nosotros",
    aboutUsMessage:
      "Somos una empresa enfocada en soluciones tecnológicas inteligentes que ayudan a las empresas a crecer, con un equipo apasionado por la innovación y la excelencia.",
    servicesMenuLabel: "Servicios",
    serviceSectionTitle: "Nuestros Servicios",
    services: {
      web: {
        title: "Desarrollo Web",
        description:
          "Sitios web modernos y responsivos para mostrar tu marca con excelencia.",
      },
      mobile: {
        title: "Desarrollo Móvil",
        description:
          "Aplicaciones Android e iOS con rendimiento nativo y diseño profesional.",
      },
      custom: {
        title: "Soluciones Personalizadas",
        description: "Sistemas hechos a medida adaptados a tu negocio.",
      },
      consulting: {
        title: "Consultoría TI",
        description:
          "Mejora tus procesos y reduce costos con soporte técnico especializado.",
      },
      training: {
        title: "Capacitación en TIC",
        description:
          "Entrenamientos prácticos en tecnologías modernas para tu equipo.",
      },
      network: {
        title: "Infraestructura de Red",
        description: "Planificación e instalación de redes robustas y seguras.",
      },
      hosting: {
        title: "Alojamiento",
        description:
          "Servicios de hosting confiables con soporte técnico local.",
      },
      hardware: {
        title: "Suministro de Equipos",
        description:
          "Venta y entrega de equipos informáticos con garantía y soporte.",
      },
    },
    contactUsTitle: "Contáctanos",
    contactUsTitleField: "Título",
    contactUsTitlePlaceholder: "Asunto del contacto",
    contactUsEmailField: "Correo electrónico",
    contactUsEmailPlaceholder: "tu@email.com",
    contactUsDescriptionField: "Descripción",
    contactUsDescriptionPlaceholder: "Describe tu mensaje",
    copyRight: "Phanda Tech Solutions. Todos los derechos reservados.",
    sendOptionLabel: "Enviar",
  },
  fr: {
    home: "Accueil",
    about: "À Propos",
    servicesLabel: "Nos Services", // ← renomeado
    contact: "Contactez-nous",
    headerTitle: "Bienvenue à Phanda Tech Solutions",
    headerMessage: "Innovation technologique à votre portée",
    aboutUsTitle: "À Propos",
    aboutUsMessage:
      "Nous sommes une entreprise spécialisée dans des solutions technologiques intelligentes qui aident les entreprises à croître, avec une équipe passionnée par l'innovation et l'excellence.",
    servicesMenuLabel: "Services",
    serviceSectionTitle: "Nos Services",
    services: {
      web: {
        title: "Développement Web",
        description:
          "Sites modernes et réactifs pour présenter votre marque avec excellence.",
      },
      mobile: {
        title: "Développement Mobile",
        description:
          "Applications Android et iOS avec performance native et design professionnel.",
      },
      custom: {
        title: "Solutions Personnalisées",
        description: "Systèmes sur mesure adaptés à votre entreprise.",
      },
      consulting: {
        title: "Consultation en TI",
        description:
          "Améliorez vos processus et réduisez les coûts avec un soutien technique spécialisé.",
      },
      training: {
        title: "Formation en TIC",
        description:
          "Formations pratiques sur les technologies modernes pour votre équipe.",
      },
      network: {
        title: "Infrastructure Réseau",
        description:
          "Planification et installation de réseaux robustes et sécurisés.",
      },
      hosting: {
        title: "Hébergement",
        description:
          "Services d'hébergement fiables avec support technique local.",
      },
      hardware: {
        title: "Fourniture d'Équipements",
        description:
          "Vente et livraison d'équipements informatiques avec garantie et assistance.",
      },
    },
    contactUsTitle: "Contactez-nous",
    contactUsTitleField: "Titre",
    contactUsTitlePlaceholder: "Objet du contact",
    contactUsEmailField: "Email",
    contactUsEmailPlaceholder: "votre@email.com",
    contactUsDescriptionField: "Description",
    contactUsDescriptionPlaceholder: "Décrivez votre message",
    copyRight: "Phanda Tech Solutions. Tous droits réservés.",
    sendOptionLabel: "Envoyer",
  },
};

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  legacy: false,
  messages,
});

export default i18n;
