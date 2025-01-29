import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Newspaper, Trophy, Bell, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    latestUpdates: "Latest Updates",
    academyNews: "[Example] Academy News",
    readMore: "Read More",
    news: [
      {
        title: "Summer Training Camp Registration Open",
        date: "2024-03-15",
        category: "Event",
        content: "Join our intensive summer training camp. Early bird registration now available!",
      },
      {
        title: "U12 Team Wins Regional Championship",
        date: "2024-03-10",
        category: "Achievement",
        content: "Congratulations to our U12 team for their outstanding performance in the regional finals.",
      },
      {
        title: "New English Program Launch",
        date: "2024-03-05",
        category: "Program",
        content: "Introducing our new integrated English language program for all academy members.",
      }
    ]
  },
  ja: {
    latestUpdates: "最新情報",
    academyNews: "[例] アカデミーニュース",
    readMore: "もっと見る",
    news: [
      {
        title: "夏季トレーニングキャンプの登録開始",
        date: "2024-03-15",
        category: "イベント",
        content: "集中夏季トレーニングキャンプにご参加ください。早期登録割引実施中！",
      },
      {
        title: "U12チームが地域選手権で優勝",
        date: "2024-03-10",
        category: "実績",
        content: "U12チームの地域決勝での素晴らしい成績を祝福します。",
      },
      {
        title: "新英語プログラム開始",
        date: "2024-03-05",
        category: "プログラム",
        content: "全アカデミーメンバー向けの新統合英語プログラムを開始します。",
      }
    ]
  },
  de: {
    latestUpdates: "Neueste Updates",
    academyNews: "[Beispiel] Akademie-Nachrichten",
    readMore: "Mehr lesen",
    news: [
      {
        title: "Anmeldung für Sommertrainingslager geöffnet",
        date: "2024-03-15",
        category: "Event",
        content: "Nehmen Sie an unserem intensiven Sommertrainingslager teil. Frühbucherrabatt verfügbar!",
      },
      {
        title: "U12-Team gewinnt Regionalmeisterschaft",
        date: "2024-03-10",
        category: "Erfolg",
        content: "Herzlichen Glückwunsch an unser U12-Team für die hervorragende Leistung im Regionalfinale.",
      },
      {
        title: "Start des neuen Englischprogramms",
        date: "2024-03-05",
        category: "Programm",
        content: "Einführung unseres neuen integrierten Englischprogramms für alle Akademiemitglieder.",
      }
    ]
  }
};

const newsIcons = [Bell, Trophy, Newspaper];

const News = () => {
  const { language } = useTranslation();
  const navigate = useNavigate();
  const content = translations[language];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.latestUpdates}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{content.academyNews}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {React.createElement(newsIcons[index], { className: "h-5 w-5 text-primary" })}
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => navigate("/news")}
            className="flex items-center gap-2"
          >
            {content.readMore}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;