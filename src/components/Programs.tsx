import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Our Programs",
    subtitle: "Three Pillars of Growth",
    programs: [
      {
        title: "Football Excellence",
        description: "Professional training following Japanese and FA football methodology",
      },
      {
        title: "English Education",
        description: "Integrated English learning through sports and activities",
      },
      {
        title: "Lasting Friendships",
        description: "Building strong bonds through teamwork and shared experiences",
      },
    ],
  },
  ja: {
    title: "プログラム",
    subtitle: "成長の3本柱",
    programs: [
      {
        title: "サッカーの卓越性",
        description: "日本のサッカー方法論に基づくプロフェッショナルトレーニング",
      },
      {
        title: "英語教育",
        description: "スポーツと活動を通じた総合的な英語学習",
      },
      {
        title: "永続的な友情",
        description: "チームワークと共有体験を通じた強い絆の構築",
      },
    ],
  },
  de: {
    title: "Unsere Programme",
    subtitle: "Drei Säulen des Wachstums",
    programs: [
      {
        title: "Fußball-Exzellenz",
        description: "Professionelles Training nach japanischer Fußballmethodik",
      },
      {
        title: "Englischunterricht",
        description: "Integriertes Englischlernen durch Sport und Aktivitäten",
      },
      {
        title: "Dauerhafte Freundschaften",
        description: "Aufbau starker Bindungen durch Teamwork und gemeinsame Erfahrungen",
      },
    ],
  },
};

const programIcons = [Users, GraduationCap, Users];

const Programs = () => {
  const { language } = useTranslation();
  const content = translations[language];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {content.subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-muted hover:shadow-lg transition-all duration-300"
            >
              {React.createElement(programIcons[index], {
                className: "w-12 h-12 text-primary mb-6",
              })}
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;