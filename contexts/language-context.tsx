"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "am"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Our Water",
      sustainability: "Sustainability",
      blog: "Blog",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      title: "Pure. Natural.",
      subtitle: "From the Heart of Gurage.",
      description: "Naturally filtered spring water from the pristine mountains of Ethiopia",
      exploreWater: "Explore Our Water",
      ourStory: "Our Story",
    },
    aboutSource: {
      title: "The Bakanote Spring",
      description1:
        "Deep in the heart of the Gurage mountains, where ancient volcanic rocks have filtered water for millennia, lies the pristine Bakanote spring. This natural wonder has been the source of pure, mineral-rich water for generations of local communities.",
      description2:
        "Our water travels through layers of volcanic rock, naturally filtering and enriching it with essential minerals before emerging crystal clear at our protected source.",
      location: "Gurage Zone, Southern Ethiopia",
    },
    products: {
      title: "Our Product Range",
      description: "Premium spring water available in convenient sizes for every occasion",
      sizes: {
        "0.3L": { use: "Kids & On-the-go", price: "15 ETB" },
        "0.6L": { use: "Personal Hydration", price: "25 ETB" },
        "1L": { use: "Family Meals", price: "35 ETB" },
        "2L": { use: "Events & Sharing", price: "55 ETB" },
      },
      features: {
        mineralRich: "Mineral-rich",
        bottledAtSource: "Bottled at Source",
      },
    },
    whyChoose: {
      title: "Why Choose Leaf Water?",
      subtitle: "Three pillars of purity and quality",
      naturallyFiltered: {
        title: "Naturally Filtered",
        description:
          "Our water passes through ancient volcanic rock formations, naturally filtering and purifying it over thousands of years.",
      },
      untouchedByPollution: {
        title: "Untouched by Pollution",
        description:
          "Sourced from a protected watershed in the remote Gurage mountains, far from industrial contamination and urban pollution.",
      },
      certifiedForSafety: {
        title: "Certified for Safety",
        description:
          "Rigorously tested and certified by international standards, ensuring the highest quality and safety for you and your family.",
      },
    },
    trust: {
      title: "Trusted & Certified",
      description: "Our quality is backed by international certifications",
    },
    cta: {
      title: "Experience Pure Ethiopian Spring Water",
      description: "Join thousands of families who trust Leaf Water for their daily hydration needs",
      findStore: "Find a Store Near You",
      contactUs: "Contact Us Today",
    },
    footer: {
      description: "Pure Ethiopian spring water from the heart of Gurage mountains.",
      quickLinks: "Quick Links",
      resources: "Resources",
      followUs: "Follow Us",
      stayUpdated: "Stay updated with our latest news and offers",
      copyright: "All rights reserved. | A Mountain Agricultural Development Company",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      about: "ስለ እኛ",
      products: "የእኛ ውሃ",
      sustainability: "ዘላቂነት",
      blog: "ብሎግ",
      contact: "ያግኙን",
      getInTouch: "ያግኙን",
    },
    hero: {
      title: "ንጹህ። ተፈጥሯዊ።",
      subtitle: "ከጉራጌ ልብ።",
      description: "ከኢትዮጵያ ንጹህ ተራሮች የተፈለተረ ተፈጥሯዊ የምንጭ ውሃ",
      exploreWater: "የእኛን ውሃ ይመልከቱ",
      ourStory: "የእኛ ታሪክ",
    },
    aboutSource: {
      title: "የባካኖቴ ምንጭ",
      description1:
        "በጉራጌ ተራሮች ልብ ውስጥ፣ ጥንታዊ የእሳተ ገሞራ ድንጋዮች ለሺህ ዓመታት ውሃን ያጣሩበት፣ ንጹህ የባካኖቴ ምንጭ ይገኛል። ይህ ተፈጥሯዊ ድንቅ ለትውልዶች የአካባቢው ማህበረሰቦች ንጹህ እና በማዕድን የበለጸገ ውሃ ምንጭ ሆኖ አገልግሏል።",
      description2:
        "የእኛ ውሃ በእሳተ ገሞራ ድንጋይ ንብርብሮች ውስጥ ተጓዝ፣ በተፈጥሮ ያጣራል እና በአስፈላጊ ማዕድናት ያበለጽጋል በእኛ የተጠበቀ ምንጭ ላይ ንጹህ ሆኖ ከመውጣቱ በፊት።",
      location: "የጉራጌ ዞን፣ ደቡብ ኢትዮጵያ",
    },
    products: {
      title: "የእኛ የምርት ስብስብ",
      description: "ለእያንዳንዱ አጋጣሚ በምቹ መጠኖች የሚገኝ ከፍተኛ ጥራት ያለው የምንጭ ውሃ",
      sizes: {
        "0.3L": { use: "ለልጆች እና በመንገድ ላይ", price: "15 ብር" },
        "0.6L": { use: "የግል ውሃ መጠጣት", price: "25 ብር" },
        "1L": { use: "የቤተሰብ ምግብ", price: "35 ብር" },
        "2L": { use: "ዝግጅቶች እና ማጋራት", price: "55 ብር" },
      },
      features: {
        mineralRich: "በማዕድን የበለጸገ",
        bottledAtSource: "በምንጩ ላይ የታሸገ",
      },
    },
    whyChoose: {
      title: "ለምን ሊፍ ዋተርን ይምረጡ?",
      subtitle: "የንጽህና እና ጥራት ሶስት ምሰሶዎች",
      naturallyFiltered: {
        title: "በተፈጥሮ የተጣራ",
        description: "የእኛ ውሃ በጥንታዊ የእሳተ ገሞራ ድንጋይ ቅርጾች ውስጥ ያልፋል፣ በተፈጥሮ ያጣራል እና ለሺህ ዓመታት ያጸዳል።",
      },
      untouchedByPollution: {
        title: "በብክለት ያልተነካ",
        description: "በሩቅ የጉራጌ ተራሮች ውስጥ ከተጠበቀ የውሃ ተፋሰስ የተገኘ፣ ከኢንዱስትሪ ብክለት እና ከከተማ ብክለት ርቆ።",
      },
      certifiedForSafety: {
        title: "ለደህንነት የተረጋገጠ",
        description: "በአለም አቀፍ ደረጃዎች በጥብቅ የተሞከረ እና የተረጋገጠ፣ ለእርስዎ እና ለቤተሰብዎ ከፍተኛ ጥራት እና ደህንነት ያረጋግጣል።",
      },
    },
    trust: {
      title: "የታመነ እና የተረጋገጠ",
      description: "የእኛ ጥራት በአለም አቀፍ የምስክር ወረቀቶች የተደገፈ ነው",
    },
    cta: {
      title: "ንጹህ የኢትዮጵያ የምንጭ ውሃን ይለማመዱ",
      description: "ለእለታዊ የውሃ ፍላጎታቸው ሊፍ ዋተርን የሚያምኑ በሺዎች የሚቆጠሩ ቤተሰቦች ይቀላቀሉ",
      findStore: "በአቅራቢያዎ ያለ መደብር ያግኙ",
      contactUs: "ዛሬ ያግኙን",
    },
    footer: {
      description: "ከጉራጌ ተራሮች ልብ የተገኘ ንጹህ የኢትዮጵያ የምንጭ ውሃ።",
      quickLinks: "ፈጣን አገናኞች",
      resources: "ሀብቶች",
      followUs: "ይከተሉን",
      stayUpdated: "በእኛ የቅርብ ጊዜ ዜናዎች እና ቅናሾች ዝማኔ ይቆዩ",
      copyright: "ሁሉም መብቶች የተጠበቁ ናቸው። | የተራራ ግብርና ልማት ኩባንያ",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
