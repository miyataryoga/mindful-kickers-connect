import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Trophy, Bell, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    allNews: "All News",
    news: [
      {
        title: "Summer Training Camp Registration Open",
        date: "2024-03-15",
        category: "Event",
        content: "Join our intensive summer training camp. Early bird registration now available! Our comprehensive program includes technical skills development, tactical understanding, and physical conditioning. Spaces are limited, so secure your spot today.",
      },
      {
        title: "U12 Team Wins Regional Championship",
        date: "2024-03-10",
        category: "Achievement",
        content: "Congratulations to our U12 team for their outstanding performance in the regional finals. The team showed exceptional skill, teamwork, and determination throughout the tournament. This victory marks a significant milestone in our academy's history.",
      },
      {
        title: "New English Program Launch",
        date: "2024-03-05",
        category: "Program",
        content: "Introducing our new integrated English language program for all academy members. This innovative program combines language learning with football training, helping our players develop both on and off the field. Classes will be conducted by qualified language instructors.",
      },
      {
        title: "Partnership with Local Schools",
        date: "2024-03-01",
        category: "Partnership",
        content: "We're excited to announce new partnerships with local schools to promote youth football development. This collaboration will create more opportunities for young talents and strengthen our community connections.",
      },
      {
        title: "Coach Development Workshop",
        date: "2024-02-25",
        category: "Training",
        content: "Our coaching staff recently completed an advanced development workshop focused on modern training methodologies and youth development strategies. This investment in our coaches ensures the highest quality training for our players.",
      }
    ]
  },
  ja: {
    allNews: "すべてのニュース",
    news: [
      {
        title: "夏季トレーニングキャンプの登録開始",
        date: "2024-03-15",
        category: "イベント",
        content: "集中夏季トレーニングキャンプにご参加ください。早期登録割引実施中！包括的なプログラムには、技術開発、戦術理解、体力づくりが含まれます。定員に限りがありますので、今すぐお申し込みください。",
      },
      {
        title: "U12チームが地域選手権で優勝",
        date: "2024-03-10",
        category: "実績",
        content: "U12チームの地域決勝での素晴らしい成績を祝福します。チームは大会を通じて卓越したスキル、チームワーク、そして決意を示しました。この勝利は私たちのアカデミーの歴史における重要な節目となります。",
      },
      {
        title: "新英語プログラム開始",
        date: "2024-03-05",
        category: "プログラム",
        content: "全アカデミーメンバー向けの新統合英語プログラムを開始します。このイノベーティブなプログラムは、言語学習とサッカートレーニングを組み合わせ、選手たちのフィールド内外での成長を支援します。",
      },
      {
        title: "地域の学校との提携",
        date: "2024-03-01",
        category: "パートナーシップ",
        content: "青少年サッカー育成を推進するため、地域の学校との新たな提携を発表します。この協力関係により、若い才能にとってより多くの機会が創出され、地域とのつながりが強化されます。",
      },
      {
        title: "コーチ育成ワークショップ",
        date: "2024-02-25",
        category: "トレーニング",
        content: "コーチングスタッフが最近、現代のトレーニング方法論と若手育成戦略に焦点を当てた上級育成ワークショップを修了しました。コーチへのこの投資により、選手たちに最高品質のトレーニングを提供します。",
      }
    ]
  },
  de: {
    allNews: "Alle Nachrichten",
    news: [
      {
        title: "Anmeldung für Sommertrainingslager geöffnet",
        date: "2024-03-15",
        category: "Event",
        content: "Nehmen Sie an unserem intensiven Sommertrainingslager teil. Frühbucherrabatt verfügbar! Unser umfassendes Programm umfasst technische Fähigkeitsentwicklung, taktisches Verständnis und körperliche Konditionierung. Die Plätze sind begrenzt, sichern Sie sich noch heute Ihren Platz.",
      },
      {
        title: "U12-Team gewinnt Regionalmeisterschaft",
        date: "2024-03-10",
        category: "Erfolg",
        content: "Herzlichen Glückwunsch an unser U12-Team für die hervorragende Leistung im Regionalfinale. Das Team zeigte während des gesamten Turniers außergewöhnliche Fähigkeiten, Teamwork und Entschlossenheit. Dieser Sieg markiert einen wichtigen Meilenstein in der Geschichte unserer Akademie.",
      },
      {
        title: "Start des neuen Englischprogramms",
        date: "2024-03-05",
        category: "Programm",
        content: "Einführung unseres neuen integrierten Englischprogramms für alle Akademiemitglieder. Dieses innovative Programm kombiniert Sprachenlernen mit Fußballtraining und hilft unseren Spielern, sich sowohl auf als auch neben dem Platz weiterzuentwickeln.",
      },
      {
        title: "Partnerschaft mit lokalen Schulen",
        date: "2024-03-01",
        category: "Partnerschaft",
        content: "Wir freuen uns, neue Partnerschaften mit lokalen Schulen zur Förderung der Jugendfu�ballentwicklung bekannt zu geben. Diese Zusammenarbeit wird mehr Möglichkeiten für junge Talente schaffen und unsere Verbindungen zur Gemeinschaft stärken.",
      },
      {
        title: "Trainer-Entwicklungs-Workshop",
        date: "2024-02-25",
        category: "Training",
        content: "Unser Trainerteam hat kürzlich einen fortgeschrittenen Entwicklungsworkshop absolviert, der sich auf moderne Trainingsmethoden und Jugendentwicklungsstrategien konzentrierte. Diese Investition in unsere Trainer gewährleistet das höchste Qualitätstraining für unsere Spieler.",
      }
    ]
  }
};

const newsIcons = [Bell, Trophy, Newspaper, Bell, Trophy];

const NewsPage = () => {
  const { language } = useTranslation();
  const navigate = useNavigate();
  const content = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mt-2">{content.allNews}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                      {React.createElement(newsIcons[index % newsIcons.length], {
                        className: "h-5 w-5 text-primary"
                      })}
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
        </div>
      </section>
    </div>
  );
};

export default NewsPage;