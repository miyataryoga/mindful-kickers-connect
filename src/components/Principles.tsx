import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Our Principles",
    principles: [
      {
        title: "Technical Excellence",
        description: "Mastering fundamental football skills through Japanese training methods"
      },
      {
        title: "Global Mindset",
        description: "Developing international perspectives through English education"
      },
      {
        title: "Character Building",
        description: "Fostering discipline, respect, and teamwork"
      },
      {
        title: "Individual Growth",
        description: "Personalized development plans for each student"
      }
    ]
  },
  ja: {
    title: "私たちの理念",
    principles: [
      {
        title: "技術的卓越性",
        description: "日本のトレーニング方法による基本的なサッカースキルの習得"
      },
      {
        title: "グローバルな考え方",
        description: "英語教育を通じた国際的な視野の育成"
      },
      {
        title: "人格形成",
        description: "規律、尊重、チームワークの育成"
      },
      {
        title: "個人の成長",
        description: "生徒一人一人に合わせた育成プラン"
      }
    ]
  },
  de: {
    title: "Unsere Prinzipien",
    principles: [
      {
        title: "Technische Exzellenz",
        description: "Beherrschung grundlegender Fußballfähigkeiten durch japanische Trainingsmethoden"
      },
      {
        title: "Globale Denkweise",
        description: "Entwicklung internationaler Perspektiven durch Englischunterricht"
      },
      {
        title: "Charakterbildung",
        description: "Förderung von Disziplin, Respekt und Teamarbeit"
      },
      {
        title: "Individuelle Entwicklung",
        description: "Personalisierte Entwicklungspläne für jeden Schüler"
      }
    ]
  }
};

const Principles = () => {
  const { language } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          {translations[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {translations[language].principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {principle.title}
              </h3>
              <p className="text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;