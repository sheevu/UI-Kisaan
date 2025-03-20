interface Feature {
  title: string
  description: string
}

interface Features {
  conversations: Feature
  smartAssistance: Feature
  advancedAI: Feature
  creative: Feature
}

interface Translation {
  // Navbar
  appName: string
  
  // Hero
  heroTitle: string
  heroHighlight: string
  heroDescription: string
  getStarted: string
  learnMore: string
  
  // Features
  featuresTitle: string
  featuresSubtitle: string
  features: Features
  
  // Chat
  chatTitle: string
  chatSubtitle: string
  messagePlaceholder: string
  demoResponse: string
  
  // Footer
  footerDescription: string
  quickLinks: string
  about: string
  featuresLink: string
  contact: string
  connect: string
  rights: string
}

export const translations: Record<'en' | 'hi', Translation> = {
  en: {
    // Navbar
    appName: 'Kisaan Sathi GPT',
    
    // Hero
    heroTitle: 'Your Personal',
    heroHighlight: 'Farming Assistant',
    heroDescription: 'Experience the power of AI in agriculture with Kisaan Sathi GPT. Get instant farming advice, crop management tips, and solve agricultural challenges effortlessly.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    featuresTitle: 'Powerful AI Features',
    featuresSubtitle: 'Discover what our AI assistant can do for you',
    features: {
      conversations: {
        title: 'Farming Insights',
        description: 'Get expert advice on crop management, soil health, and farming practices.'
      },
      smartAssistance: {
        title: 'Weather Intelligence',
        description: 'Smart weather predictions and farming recommendations.'
      },
      advancedAI: {
        title: 'Crop Analysis',
        description: 'Advanced AI-powered crop health analysis and yield predictions.'
      },
      creative: {
        title: 'Smart Solutions',
        description: 'Innovative solutions for modern farming challenges.'
      }
    },
    
    // Chat
    chatTitle: 'Chat with AI',
    chatSubtitle: 'Experience real-time conversations with our AI',
    messagePlaceholder: 'Type your message...',
    demoResponse: "I'm here to help! This is a demo response from your AI assistant.",
    
    // Footer
    footerDescription: 'Your intelligent farming companion by SUDARSHAN AI LABS',
    quickLinks: 'Quick Links',
    about: 'About',
    featuresLink: 'Features',
    contact: 'Contact',
    connect: 'Connect',
    rights: 'All rights reserved.'
  },
  hi: {
    // Navbar
    appName: 'किसान साथी GPT',
    
    // Hero
    heroTitle: 'आपका निजी',
    heroHighlight: 'कृषि सहायक',
    heroDescription: 'किसान साथी GPT के साथ कृषि में AI की शक्ति का अनुभव करें। तुरंत कृषि सलाह, फसल प्रबंधन टिप्स, और कृषि चुनौतियों का समाधान आसानी से प्राप्त करें।',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    
    // Features
    featuresTitle: 'शक्तिशाली AI सुविधाएं',
    featuresSubtitle: 'जानें कि हमारा AI सहायक आपके लिए क्या कर सकता है',
    features: {
      conversations: {
        title: 'कृषि जानकारी',
        description: 'फसल प्रबंधन, मिट्टी की स्वास्थ्य, और कृषि प्रथाओं पर विशेषज्ञ सलाह प्राप्त करें।'
      },
      smartAssistance: {
        title: 'मौसम बुद्धिमत्ता',
        description: 'स्मार्ट मौसम भविष्यवाणी और कृषि सिफारिशें।'
      },
      advancedAI: {
        title: 'फसल विश्लेषण',
        description: 'उन्नत AI-संचालित फसल स्वास्थ्य विश्लेषण और उपज भविष्यवाणी।'
      },
      creative: {
        title: 'स्मार्ट समाधान',
        description: 'आधुनिक कृषि चुनौतियों के लिए नवीन समाधान।'
      }
    },
    
    // Chat
    chatTitle: 'AI से चैट करें',
    chatSubtitle: 'हमारे AI के साथ रीयल-टाइम बातचीत का अनुभव करें',
    messagePlaceholder: 'अपना संदेश लिखें...',
    demoResponse: "मैं आपकी मदद के लिए यहाँ हूँ! यह आपके AI सहायक से एक डेमो प्रतिक्रिया है।",
    
    // Footer
    footerDescription: 'सुदर्शन AI लैब्स द्वारा आपका बुद्धिमान कृषि साथी',
    quickLinks: 'त्वरित लिंक',
    about: 'हमारे बारे में',
    featuresLink: 'सुविधाएं',
    contact: 'संपर्क करें',
    connect: 'जुड़ें',
    rights: 'सर्वाधिकार सुरक्षित।'
  }
} 