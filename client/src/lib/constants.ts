export const TOPIC_OPTIONS = [
  { 
    id: "career", 
    label: { 
      en: "Career & Work", 
      my: "အလုပ်အကိုင်/လုပ်ငန်း" 
    } 
  },
  { 
    id: "love", 
    label: { 
      en: "Love & Relationships", 
      my: "ပေါင်းသင်းရေး/အချစ်ရေး" 
    } 
  },
  { 
    id: "finance", 
    label: { 
      en: "Finances & Wealth", 
      my: "ငွေကြေး/ရင်းနှီးမြှုပ်နှံ" 
    } 
  },
  { 
    id: "health", 
    label: { 
      en: "Health & Wellness", 
      my: "ကျန်းမာရေး" 
    } 
  },
  { 
    id: "education", 
    label: { 
      en: "Education & Learning", 
      my: "ပညာရေး/သင်တန်း" 
    } 
  },
  { 
    id: "family", 
    label: { 
      en: "Family & Relationships", 
      my: "မိသားစု/ထိတတ်မှု" 
    } 
  },
  { 
    id: "travel", 
    label: { 
      en: "Travel & Relocation", 
      my: "ခရီးသွား/ပြောင်းရွှေ့နေထိုင်" 
    } 
  },
  { 
    id: "business", 
    label: { 
      en: "Business Ventures", 
      my: "စီးပွားရေးစီမံချက်" 
    } 
  },
  { 
    id: "legal", 
    label: { 
      en: "Legal Matters", 
      my: "ဥပဒေ/ပုဒ်မဆိုင်ရာ" 
    } 
  },
  { 
    id: "spiritual", 
    label: { 
      en: "Spiritual Growth", 
      my: "ဝိညာဉ်ရေးရာ/စာစောင်" 
    } 
  },
  { 
    id: "immigration", 
    label: { 
      en: "Immigration & Visa", 
      my: "နိုင်ငံပြောင်း/ဗီဇာ" 
    } 
  },
  { 
    id: "purpose", 
    label: { 
      en: "Life Purpose", 
      my: "ဘဝရည်ရွယ်ချက်" 
    } 
  },
];

export const RELATIONSHIP_OPTIONS = [
  { en: "Single", my: "လွတ်လပ်" },
  { en: "Dating", my: "နိဒါန်း" },
  { en: "In a Relationship", my: "နှီးနှောနေ" },
  { en: "Married", my: "လက်ထပ်ထား" },
  { en: "Divorced/Separated", my: "ခွဲခွာ/မတင်" },
  { en: "Prefer not to say", my: "ပြောရန်မဖြစ်" },
];

export const TIMELINE_OPTIONS = [
  { en: "Within 1 month", my: "၁ လ အတွင်း" },
  { en: "Within 3 months", my: "၃ လ အတွင်း" },
  { en: "Within 6 months", my: "၆ လ အတွင်း" },
  { en: "Within 1 year", my: "၁ နှစ် အတွင်း" },
  { en: "Long-term", my: "ရေရှည်" },
  { en: "Not specified", my: "သတ်မှတ်မထား" },
];

export const ZODIAC_SIGNS = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    dates: "March 21 - April 19",
    element: "Fire",
    quality: "Cardinal",
    rulingPlanet: "Mars",
    traits: "Pioneering spirit, leadership, adventure",
    description: "Natural born leaders with boundless energy and enthusiasm. Aries individuals are courageous pioneers who love to initiate new projects and adventures."
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    dates: "April 20 - May 20",
    element: "Earth",
    quality: "Fixed",
    rulingPlanet: "Venus",
    traits: "Stability, determination, sensuality",
    description: "Reliable and practical individuals who value security and beauty. Taurus people have a strong appreciation for life's pleasures and material comforts."
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - June 20",
    element: "Air",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    traits: "Communication, versatility, curiosity",
    description: "Quick-witted communicators with insatiable curiosity. Gemini individuals are adaptable and love to learn, share information, and connect with others."
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    dates: "June 21 - July 22",
    element: "Water",
    quality: "Cardinal",
    rulingPlanet: "Moon",
    traits: "Nurturing, intuition, emotional depth",
    description: "Deeply intuitive and emotional individuals with strong protective instincts. Cancer people are natural nurturers who value family and emotional security."
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    dates: "July 23 - August 22",
    element: "Fire",
    quality: "Fixed",
    rulingPlanet: "Sun",
    traits: "Creativity, confidence, generosity",
    description: "Confident and charismatic individuals who love to shine and inspire others. Leo people are natural performers with generous hearts and creative souls."
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    dates: "August 23 - September 22",
    element: "Earth",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    traits: "Perfectionism, service, analytical",
    description: "Detail-oriented perfectionists with a strong desire to help and improve. Virgo individuals are practical, organized, and dedicated to service."
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    dates: "September 23 - October 22",
    element: "Air",
    quality: "Cardinal",
    rulingPlanet: "Venus",
    traits: "Balance, harmony, diplomacy",
    description: "Natural diplomats who seek balance and harmony in all aspects of life. Libra individuals are charming, fair-minded, and have a strong aesthetic sense."
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    dates: "October 23 - November 21",
    element: "Water",
    quality: "Fixed",
    rulingPlanet: "Pluto",
    traits: "Intensity, transformation, mystery",
    description: "Intense and mysterious individuals with powerful transformative abilities. Scorpio people are passionate, intuitive, and possess deep emotional wisdom."
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    dates: "November 22 - December 21",
    element: "Fire",
    quality: "Mutable",
    rulingPlanet: "Jupiter",
    traits: "Adventure, philosophy, optimism",
    description: "Free-spirited adventurers with a love for travel and higher learning. Sagittarius individuals are optimistic philosophers who seek truth and meaning."
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    dates: "December 22 - January 19",
    element: "Earth",
    quality: "Cardinal",
    rulingPlanet: "Saturn",
    traits: "Ambition, discipline, responsibility",
    description: "Ambitious and disciplined individuals who work steadily toward their goals. Capricorn people are responsible leaders with strong organizational skills."
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    dates: "January 20 - February 18",
    element: "Air",
    quality: "Fixed",
    rulingPlanet: "Uranus",
    traits: "Innovation, independence, humanity",
    description: "Innovative and independent thinkers who value freedom and humanitarian causes. Aquarius individuals are visionaries who work for the betterment of society."
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    dates: "February 19 - March 20",
    element: "Water",
    quality: "Mutable",
    rulingPlanet: "Neptune",
    traits: "Compassion, intuition, creativity",
    description: "Deeply compassionate and intuitive individuals with rich inner lives. Pisces people are creative dreamers who are deeply connected to the spiritual realm."
  },
];
