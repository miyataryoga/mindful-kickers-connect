import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "English Plus Program",
    subtitle: "Language Learning Tailored for Athletes",
    description: "Our English Plus program is specifically designed for athletes who want to improve their English language skills while pursuing their sports career. With a focus on sports-related vocabulary and real-world communication, this program helps players become more confident in English-speaking environments.",
    features: [
      {
        title: "Small Group Sessions",
        description: "Classes are limited to 10 students to ensure personalized attention and maximum speaking practice."
      },
      {
        title: "Sports-Focused Content",
        description: "Learn vocabulary and expressions commonly used in sports, training, and team communication."
      },
      {
        title: "Interactive Learning",
        description: "Engage in role-plays, discussions, and activities that simulate real-world sports situations."
      },
      {
        title: "Regular Assessment",
        description: "Track your progress with periodic evaluations and receive detailed feedback on your improvement."
      }
    ]
  },
  ja: {
    title: "英語プラスプログラム",
    subtitle: "アスリートのための言語学習",
    description: "英語プラスプログラムは、スポーツキャリアを追求しながら英語力を向上させたいアスリートのために特別に設計されています。スポーツ関連の語彙と実践的なコミュニケーションに焦点を当て、英語を話す環境での自信を高めることを支援します。",
    features: [
      {
        title: "少人数制グループセッション",
        description: "個別指導と最大限の会話練習を確保するため、クラスは10名までに制限されています。"
      },
      {
        title: "スポーツに焦点を当てたコンテンツ",
        description: "スポーツ、トレーニング、チームコミュニケーションでよく使用される語彙や表現を学びます。"
      },
      {
        title: "インタラクティブな学習",
        description: "実際のスポーツシーンを想定したロールプレイ、ディスカッション、アクティビティに参加します。"
      },
      {
        title: "定期的な評価",
        description: "定期的な評価で進捗を追跡し、上達度について詳細なフィードバックを受けられます。"
      }
    ]
  },
  de: {
    title: "English Plus Programm",
    subtitle: "Sprachunterricht maßgeschneidert für Athleten",
    description: "Unser English Plus Programm ist speziell für Athleten konzipiert, die ihre Englischkenntnisse verbessern möchten, während sie ihre Sportkarriere verfolgen. Mit Fokus auf sportbezogenes Vokabular und praktische Kommunikation hilft dieses Programm Spielern, selbstbewusster in englischsprachigen Umgebungen zu werden.",
    features: [
      {
        title: "Kleingruppensitzungen",
        description: "Die Klassen sind auf 10 Schüler begrenzt, um persönliche Betreuung und maximale Sprechpraxis zu gewährleisten."
      },
      {
        title: "Sportorientierte Inhalte",
        description: "Lernen Sie Vokabeln und Ausdrücke, die häufig im Sport, Training und in der Teamkommunikation verwendet werden."
      },
      {
        title: "Interaktives Lernen",
        description: "Nehmen Sie an Rollenspielen, Diskussionen und Aktivitäten teil, die reale Sportsituationen simulieren."
      },
      {
        title: "Regelmäßige Bewertung",
        description: "Verfolgen Sie Ihre Fortschritte mit regelmäßigen Evaluierungen und erhalten Sie detailliertes Feedback zu Ihrer Verbesserung."
      }
    ]
  }
};

const EnglishPlus = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();
  const content = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">{content.title}</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            {content.subtitle}
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p>{content.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnglishPlus;