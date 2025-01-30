import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    location: "[Upcoming] U6-12 Football Academy",
    title: "Düsseldorf Toki Academy",
    subtitle: "Excellence Through Discipline",
    description: "Join our unique academy combining Japanese football excellence with English education",
    button: "Join Our Academy"
  },
  ja: {
    location: "[近日開校]U6-12サッカーアカデミー",
    title: "デュッセルドルフ・トキアカデミー",
    subtitle: "規律を通じた卓越性",
    description: "日本のサッカーの卓越性と英語教育を組み合わせたユニークなアカデミーに参加しましょう",
    button: "アカデミーに参加"
  },
  de: {
    location: "[Kommende] U6-12 Fußballakademie",
    title: "Düsseldorf Toki Akademie",
    subtitle: "Exzellenz durch Disziplin",
    description: "Treten Sie unserer einzigartigen Akademie bei, die japanische Fußballexzellenz mit Englischunterricht verbindet",
    button: "Der Akademie beitreten"
  }
};

const Hero = () => {
  const { language, setLanguage } = useTranslation();

  const handleJoinClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSekqOZVMytvSjNfaiRNTaktaRCbWxg118PeUtnwNHMKXSBQWw/viewform?usp=dialog', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/dfa21cda-c7b9-4bba-b161-4bad2e0672f0.png"
          alt="Japanese temple with cherry blossoms"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="absolute top-4 right-4">
          <Tabs defaultValue={language} onValueChange={(value) => setLanguage(value as "en" | "ja" | "de")}>
            <TabsList>
              <TabsTrigger value="en">EN</TabsTrigger>
              <TabsTrigger value="ja">日本語</TabsTrigger>
              <TabsTrigger value="de">DE</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          <img 
            src="/lovable-uploads/97aa1110-1246-46a0-9c56-ab85713b0849.png"
            alt="Toki Academy Logo"
            className="w-48 h-48 mx-auto mb-8 rounded-full object-cover"
          />
          <span className="inline-block px-4 py-1 mb-4 bg-primary/10 text-black rounded-full text-sm font-medium">
            {translations[language].location}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            {translations[language].title}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            {translations[language].subtitle}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {translations[language].description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleJoinClick}
          >
            {translations[language].button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;