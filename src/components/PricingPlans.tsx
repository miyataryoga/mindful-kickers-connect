import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Pricing Plans",
    subtitle: "Choose Your Path to Excellence",
    plans: [
      {
        name: "Elite Academy Program",
        price: "80€",
        period: "/month",
        description: "Full-time training program",
        features: [
          "Full access to all training sessions",
          "Weekend matches and tournaments",
          "Performance tracking",
          "Personal development plan",
        ],
      },
      {
        name: "Weekday Warriors",
        price: "50€",
        period: "/month",
        description: "Weekday-only training program",
        features: [
          "Weekday training sessions",
          "Basic skill development",
          "Team practice sessions",
          "Regular feedback",
        ],
      },
      {
        name: "English Plus",
        price: "30€",
        period: "/lesson",
        description: "Group English lessons (Up to 10)",
        features: [
          "Group English lessons",
          "Sports-focused vocabulary",
          "Conversation practice",
          "Progress assessment",
        ],
      },
    ],
  },
  ja: {
    title: "料金プラン",
    subtitle: "卓越への道を選択",
    plans: [
      {
        name: "エリートアカデミープログラム",
        price: "80€",
        period: "/月",
        description: "フルタイムトレーニングプログラム",
        features: [
          "全トレーニングセッションへのアクセス",
          "週末の試合とトーナメント",
          "パフォーマンス追跡",
          "個人開発プラン",
        ],
      },
      {
        name: "平日ウォリアーズ",
        price: "50€",
        period: "/月",
        description: "平日限定トレーニングプログラム",
        features: [
          "平日トレーニングセッション",
          "基本スキル開発",
          "チーム練習セッション",
          "定期的なフィードバック",
        ],
      },
      {
        name: "英語プラス",
        price: "30€",
        period: "/レッスン",
        description: "グループ英語レッスン (最大10名)",
        features: [
          "マンツーマン英語レッスン",
          "スポーツ関連の語彙",
          "会話練習",
          "進捗評価",
        ],
      },
    ],
  },
  de: {
    title: "Preispläne",
    subtitle: "Wählen Sie Ihren Weg zur Exzellenz",
    plans: [
      {
        name: "Elite-Akademie-Programm",
        price: "80€",
        period: "/Monat",
        description: "Vollzeit-Trainingsprogramm",
        features: [
          "Voller Zugang zu allen Trainingseinheiten",
          "Wochenendspiele und Turniere",
          "Leistungsverfolgung",
          "Persönlicher Entwicklungsplan",
        ],
      },
      {
        name: "Wochentags-Krieger",
        price: "50€",
        period: "/Monat",
        description: "Nur-Wochentags-Trainingsprogramm",
        features: [
          "Trainingseinheiten unter der Woche",
          "Grundlegende Fähigkeitsentwicklung",
          "Team-Trainingseinheiten",
          "Regelmäßiges Feedback",
        ],
      },
      {
        name: "Englisch Plus",
        price: "30€",
        period: "/Unterricht",
        description: "Gruppen-Englischunterricht (Bis zu 10)",
        features: [
          "Einzelunterricht in Englisch",
          "Sportzentrierter Wortschatz",
          "Konversationspraxis",
          "Fortschrittsbewertung",
        ],
      },
    ],
  },
};

const PricingPlans = () => {
  const { language } = useTranslation();
  const navigate = useNavigate();
  const content = translations[language];

  return (
    <section className="py-24 bg-muted">
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
          {content.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.name.toLowerCase().includes("english plus") && (
                    <div className="mt-6 text-center">
                      <Button
                        onClick={() => navigate("/english-plus")}
                        variant="outline"
                      >
                        More Details
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;