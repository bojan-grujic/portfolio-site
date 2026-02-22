import { createContext, useContext, useState } from "react";

type Language = "en" | "sr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    
    // Hero
    hello: "Hello, I'm",
    role: "Full Stack Developer",
    heroDescription: "Passionate about creating elegant solutions to complex problems. Specialized in building modern web applications with cutting-edge technologies and best practices.",
    viewWork: "View My Work",
    getInTouch: "Get In Touch",
    
    // About
    aboutMe: "About Me",
    aboutDescription: "I'm a dedicated developer with a passion for building exceptional digital experiences. With years of experience in the industry, I bring ideas to life through clean code and thoughtful design.",
    fullStackDev: "Full Stack Development",
    fullStackDesc: "Expert in React, Node.js, and modern web technologies",
    uiUxDesign: "UI/UX Design",
    uiUxDesc: "Creating beautiful, user-friendly interfaces",
    performance: "Performance",
    performanceDesc: "Optimizing applications for speed and efficiency",
    teamCollab: "Team Collaboration",
    teamCollabDesc: "Strong communication and agile methodologies",
    techTools: "Technologies & Tools",
    
    // Experience
    workExperience: "Work Experience",
    experienceSubtitle: "A journey of continuous learning and professional growth",
    keyAchievements: "Key Achievements:",
    
    // Projects
    featuredProjects: "Featured Projects",
    projectsSubtitle: "A selection of my recent work and side projects",
    liveDemo: "Live Demo",
    code: "Code",
    
    // Testimonials
    testimonials: "What People Say",
    testimonialsSubtitle: "Feedback from clients and colleagues",
    
    // Contact
    contactTitle: "Get In Touch",
    contactSubtitle: "Have a project in mind? Let's work together to create something amazing.",
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    letsCollaborate: "Let's Collaborate",
    collaborateText: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    name: "Name",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    sendMessage: "Send Message",
    
    // Footer
    footerTagline: "Full Stack Developer crafting exceptional digital experiences.",
    quickLinks: "Quick Links",
    connect: "Connect",
    allRights: "All rights reserved.",
    madeWith: "Made with",
    andPassion: "and passion",
  },
  sr: {
    // Navigation
    about: "O Meni",
    experience: "Iskustvo",
    projects: "Projekti",
    contact: "Kontakt",
    
    // Hero
    hello: "Zdravo, ja sam",
    role: "Full Stack Developer",
    heroDescription: "Strastveni u stvaranju elegantnih rešenja za složene probleme. Specijalizovan za izradu modernih web aplikacija sa najsavremenijim tehnologijama i najboljim praksama.",
    viewWork: "Pogledaj Moj Rad",
    getInTouch: "Kontaktiraj Me",
    
    // About
    aboutMe: "O Meni",
    aboutDescription: "Posvećen sam programer sa strašću za izgradnju izuzetnih digitalnih iskustava. Sa godinama iskustva u industriji, oživljavam ideje kroz čist kod i promišljen dizajn.",
    fullStackDev: "Full Stack Development",
    fullStackDesc: "Ekspert u React, Node.js i modernim web tehnologijama",
    uiUxDesign: "UI/UX Dizajn",
    uiUxDesc: "Kreiranje lepih, korisničkih interfejsa",
    performance: "Performanse",
    performanceDesc: "Optimizacija aplikacija za brzinu i efikasnost",
    teamCollab: "Timska Saradnja",
    teamCollabDesc: "Jaka komunikacija i agile metodologije",
    techTools: "Tehnologije i Alati",
    
    // Experience
    workExperience: "Radno Iskustvo",
    experienceSubtitle: "Putovanje kontinuiranog učenja i profesionalnog rasta",
    keyAchievements: "Ključna Dostignuća:",
    
    // Projects
    featuredProjects: "Istaknuti Projekti",
    projectsSubtitle: "Selekcija mog nedavnog rada i dodatnih projekata",
    liveDemo: "Demo",
    code: "Kod",
    
    // Testimonials
    testimonials: "Šta Ljudi Kažu",
    testimonialsSubtitle: "Povratne informacije od klijenata i kolega",
    
    // Contact
    contactTitle: "Kontaktirajte Me",
    contactSubtitle: "Imate projekat na umu? Hajde da sarađujemo i stvorimo nešto neverovatno.",
    contactInfo: "Kontakt Informacije",
    email: "Email",
    phone: "Telefon",
    location: "Lokacija",
    letsCollaborate: "Hajde Da Sarađujemo",
    collaborateText: "Uvek sam zainteresovan da čujem o novim projektima i prilikama. Bilo da imate pitanje ili samo želite da pozdravite, slobodno me kontaktirajte!",
    name: "Ime",
    yourName: "Vaše ime",
    yourEmail: "vas.email@example.com",
    message: "Poruka",
    messagePlaceholder: "Ispričajte mi o vašem projektu...",
    sendMessage: "Pošalji Poruku",
    
    // Footer
    footerTagline: "Full Stack Developer koji kreira izuzetna digitalna iskustva.",
    quickLinks: "Brzi Linkovi",
    connect: "Povežite Se",
    allRights: "Sva prava zadržana.",
    madeWith: "Napravljeno sa",
    andPassion: "i strašću",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
