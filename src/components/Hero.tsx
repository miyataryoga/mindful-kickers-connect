import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    location: "U6-12 Football Academy in Düsseldorf",
    title: "Toki Academy",
    subtitle: "Excellence Through Discipline",
    description: "Join our unique academy combining Japanese football excellence with English education",
    button: "Join Our Academy"
  },
  ja: {
    location: "デュッセルドルフU6-12サッカーアカデミー",
    title: "トキアカデミー",
    subtitle: "規律を通じた卓越性",
    description: "日本のサッカーの卓越性と英語教育を組み合わせたユニークなアカデミーに参加しましょう",
    button: "アカデミーに参加"
  },
  de: {
    location: "U6-12 Fußballakademie in Düsseldorf",
    title: "Toki Akademie",
    subtitle: "Exzellenz durch Disziplin",
    description: "Treten Sie unserer einzigartigen Akademie bei, die japanische Fußballexzellenz mit Englischunterricht verbindet",
    button: "Der Akademie beitreten"
  }
};

const Hero = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          alt="Football academy"
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[-100px] left-0"
          >
            <img
              src="/lovable-uploads/99c5ad78-bffd-4466-b655-2a24b6b7eb6e.png"
              alt="Toki Football Club Logo"
              className="w-56 h-56 md:w-64 md:h-64"
            />
          </motion.div>
          <span className="inline-block px-4 py-1 mb-4 bg-primary/10 text-black rounded-full text-sm font-medium">
            {translations[language].location}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {translations[language].title}
            <br /> 
            <span className="text-primary">{translations[language].subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {translations[language].description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            {translations[language].button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;