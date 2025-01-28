import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Our Mentors",
    subtitle: "Learn from the Best",
    players: [
      {
        name: "Undecided",
        position: "Professional Mentor",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        name: "Undecided",
        position: "Guest Coach",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      },
      {
        name: "Undecided",
        position: "Technical Advisor",
        image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      },
    ]
  },
  ja: {
    title: "メンター紹介",
    subtitle: "最高の指導者から学ぶ",
    players: [
      {
        name: "乾 貴士",
        position: "プロフェッショナルメンター",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        name: "香川 真司",
        position: "ゲストコーチ",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      },
      {
        name: "長谷部 誠",
        position: "テクニカルアドバイザー",
        image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      },
    ]
  },
  de: {
    title: "Unsere Mentoren",
    subtitle: "Lernen Sie von den Besten",
    players: [
      {
        name: "Takashi Inui",
        position: "Professioneller Mentor",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        name: "Shinji Kagawa",
        position: "Gasttrainer",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      },
      {
        name: "Makoto Hasebe",
        position: "Technischer Berater",
        image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      },
    ]
  }
};

const Players = () => {
  const { language } = useTranslation();
  const content = translations[language];

  return (
    <section className="py-24 bg-background">
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
          {content.players.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-bold">{player.name}</h3>
                <p className="text-sm opacity-90">{player.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;