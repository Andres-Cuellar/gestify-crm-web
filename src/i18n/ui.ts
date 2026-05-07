export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navigation
    nav: {
      product: 'Producto',
      solutions: 'Soluciones',
      pricing: 'Precios',
      resources: 'Recursos',
      contact: 'Contacto',
      startFree: 'Empezar gratis',
      bookDemo: 'Reservar demo',
    },
    // Hero
    hero: {
      title: 'La plataforma todo-en-uno que escala tu agencia',
      subtitle: 'Unifica CRM, automatización de marketing, comunicaciones omnicanal e IA en una sola plataforma white-label.',
      cta: {
        startFree: 'Empezar gratis',
        bookDemo: 'Ver demo',
      },
      trustedBy: 'Más de 500 negocios confían en nosotros',
    },
    // Framework
    framework: {
      title: 'El framework de crecimiento',
      subtitle: 'Gestify te ayuda a gestionar todo el ciclo de vida del cliente en un solo lugar.',
      capture: {
        title: 'Capturar',
        description: 'Atrae leads desde múltiples canales y centralízalos en un inbox unificado.',
      },
      convert: {
        title: 'Convertir',
        description: 'Automatiza follow-ups y cierra más ventas con pipelines visuales.',
      },
      retain: {
        title: 'Fidelizar',
        description: 'Construye relaciones duraderas con automatización y comunicación proactiva.',
      },
    },
    // Features
    features: {
      title: 'Todo lo que necesitas en una sola plataforma',
      subtitle: 'Funciones diseñadas para negocios que quieren escalar sin complejidad.',
      inbox: {
        title: 'Inbox Unificado',
        description: 'WhatsApp, Email, SMS y llamadas en un solo lugar. Sin cambiar de pestaña.',
      },
      ai: {
        title: 'Agentes IA',
        description: 'Chatbots inteligentes que cualifican leads y responden 24/7.',
      },
      crm: {
        title: 'Pipeline CRM',
        description: 'Visualiza y gestiona tu embudo de ventas con arrastrar y soltar.',
      },
      automation: {
        title: 'Automatización',
        description: 'Workflows visuales sin código para ahorrar horas de trabajo.',
      },
    },
    // Stats
    stats: {
      title: 'Resultados comprobados',
      clients: 'negocios activas',
      conversions: 'Más conversiones',
      time: 'Tiempo ahorrado',
    },
    // Testimonials
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
    },
    // Pricing
    pricing: {
      title: 'Precios simples y transparentes',
      subtitle: 'Sin sorpresas. Sin límites ocultos. Solo resultados.',
      billedAnnually: 'Facturado anualmente',
      billedMonthly: 'Facturado mensualmente',
      perMonth: '/mes',
      emails: 'emails',
      whatsappIncluded: 'WhatsApp incluido',
      whatsappOptional: 'WhatsApp opcional',
      calendars: 'Calendarios incluidos',
      noWhitelabel: 'Sin white-label',
      starter: {
        name: 'Starter',
        annualPrice: '130.000',
        monthlyPrice: '151.000',
        description: 'Para negocios que empiezan.',
        emailLimit: '1.000',
        whatsappPrice: '50.000',
        features: ['5 usuarios', '1,000 emails', 'Inbox básico', 'Email support', 'Calendarios'],
        popular: false,
      },
      growth: {
        name: 'Growth',
        annualPrice: '370.000',
        monthlyPrice: '431.000',
        description: 'Para negocios en crecimiento.',
        emailLimit: '10.000',
        whatsappIncluded: true,
        features: ['15 usuarios', '10,000 emails', 'AI Agents', 'Automatizaciones', 'Integraciones', 'Calendarios'],
        popular: true,
      },
      advanced: {
        name: 'Advanced',
        annualPrice: '740.000',
        monthlyPrice: '863.000',
        description: 'Para negocios que quieren dominar.',
        emailLimit: '30.000',
        whatsappIncluded: true,
        noWhitelabel: true,
        features: ['50 usuarios', '30,000 emails', 'API access', 'Priority support', 'Calendarios', 'Sin white-label'],
        popular: false,
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Para necesidades especiales.',
        features: ['Usuarios ilimitados', 'SSO', 'SLA dedicado', 'Onboarding personalizado'],
      },
    },
    // CTA
    cta: {
      title: 'Listo para escalar tu agencia?',
      subtitle: 'Únete a más de 500 negocios que ya están creciendo con Gestify.',
      button: 'Empezar gratis ahora',
    },
    // Footer
    footer: {
      tagline: 'La plataforma todo-en-uno para negocios que quieren escalar.',
      product: 'Producto',
      company: 'Empresa',
      resources: 'Recursos',
      legal: 'Legal',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    // Navigation
    nav: {
      product: 'Product',
      solutions: 'Solutions',
      pricing: 'Pricing',
      resources: 'Resources',
      contact: 'Contact',
      startFree: 'Start free',
      bookDemo: 'Book demo',
    },
    // Hero
    hero: {
      title: 'The all-in-one platform that scales your agency',
      subtitle: 'Unify CRM, marketing automation, omnichannel communications and AI in one white-label platform.',
      cta: {
        startFree: 'Start free',
        bookDemo: 'Book demo',
      },
      trustedBy: 'More than 500 agencies trust us',
    },
    // Framework
    framework: {
      title: 'The growth framework',
      subtitle: 'Gestify helps you manage the entire customer lifecycle in one place.',
      capture: {
        title: 'Capture',
        description: 'Attract leads from multiple channels and centralize them in a unified inbox.',
      },
      convert: {
        title: 'Convert',
        description: 'Automate follow-ups and close more sales with visual pipelines.',
      },
      retain: {
        title: 'Retain',
        description: 'Build lasting relationships with automation and proactive communication.',
      },
    },
    // Features
    features: {
      title: 'Everything you need in one platform',
      subtitle: 'Features designed for agencies that want to scale without complexity.',
      inbox: {
        title: 'Unified Inbox',
        description: 'WhatsApp, Email, SMS and calls in one place. No tab switching.',
      },
      ai: {
        title: 'AI Agents',
        description: 'Intelligent chatbots that qualify leads and respond 24/7.',
      },
      crm: {
        title: 'CRM Pipeline',
        description: 'Visualize and manage your sales funnel with drag and drop.',
      },
      automation: {
        title: 'Automation',
        description: 'No-code visual workflows to save hours of work.',
      },
    },
    // Stats
    stats: {
      title: 'Proven results',
      clients: 'Active agencies',
      conversions: 'More conversions',
      time: 'Time saved',
    },
    // Testimonials
    testimonials: {
      title: 'What our clients say',
    },
    // Pricing
    pricing: {
      title: 'Simple, transparent pricing',
      subtitle: 'No surprises. No hidden fees. Just results.',
      billedAnnually: 'Billed annually',
      billedMonthly: 'Billed monthly',
      perMonth: '/mo',
      emails: 'emails',
      whatsappIncluded: 'WhatsApp included',
      whatsappOptional: 'WhatsApp optional',
      calendars: 'Calendars included',
      noWhitelabel: 'No white-label',
      starter: {
        name: 'Starter',
        annualPrice: '130.000',
        monthlyPrice: '151.000',
        description: 'For agencies getting started.',
        emailLimit: '1.000',
        whatsappPrice: '50.000',
        features: ['5 users', '1,000 emails', 'Basic inbox', 'Email support', 'Calendars'],
        popular: false,
      },
      growth: {
        name: 'Growth',
        annualPrice: '370.000',
        monthlyPrice: '431.000',
        description: 'For growing agencies.',
        emailLimit: '10.000',
        whatsappIncluded: true,
        features: ['15 users', '10,000 emails', 'AI Agents', 'Automations', 'Integrations', 'Calendars'],
        popular: true,
      },
      advanced: {
        name: 'Advanced',
        annualPrice: '740.000',
        monthlyPrice: '863.000',
        description: 'For agencies that want to dominate.',
        emailLimit: '30.000',
        whatsappIncluded: true,
        noWhitelabel: true,
        features: ['50 users', '30,000 emails', 'API access', 'Priority support', 'Calendars', 'No white-label'],
        popular: false,
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For special needs.',
        features: ['Unlimited users', 'SSO', 'Dedicated SLA', 'Custom onboarding'],
      },
    },
    // CTA
    cta: {
      title: 'Ready to scale your agency?',
      subtitle: 'Join more than 500 agencies already growing with Gestify.',
      button: 'Start free now',
    },
    // Footer
    footer: {
      tagline: 'The all-in-one platform for agencies that want to scale.',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      rights: 'All rights reserved.',
    },
  },
} as const;