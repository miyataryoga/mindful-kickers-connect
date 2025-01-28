import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Our Staff",
    subtitle: "Meet the Team Behind Our Success",
    staff: [
      {
        name: "John Smith",
        position: "Head Coach",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "Former professional player with over 15 years of coaching experience"
      },
      {
        name: "Sarah Johnson",
        position: "Technical Director",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "UEFA A Licensed coach specializing in youth development"
      },
      {
        name: "David Williams",
        position: "Performance Analyst",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "Sports science graduate with expertise in performance analysis"
      }
    ]
  },
  ja: {
    title: "スタッフ紹介",
    subtitle: "成功を支えるチーム",
    staff: [
      {
        name: "ジョン・スミス",
        position: "ヘッドコーチ",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "15年以上のコーチング経験を持つ元プロ選手"
      },
      {
        name: "サラ・ジョンソン",
        position: "テクニカルディレクター",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "ユース育成を専門とするUEFA Aライセンス保持コーチ"
      },
      {
        name: "デビッド・ウィリアムス",
        position: "パフォーマンスアナリスト",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "パフォーマンス分析の専門知識を持つスポーツ科学の卒業生"
      }
    ]
  },
  de: {
    title: "Unser Team",
    subtitle: "Lernen Sie das Team hinter unserem Erfolg kennen",
    staff: [
      {
        name: "John Smith",
        position: "Cheftrainer",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "Ehemaliger Profispieler mit über 15 Jahren Trainererfahrung"
      },
      {
        name: "Sarah Johnson",
        position: "Technische Direktorin",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "UEFA-A-lizenzierte Trainerin mit Schwerpunkt Jugendentwicklung"
      },
      {
        name: "David Williams",
        position: "Leistungsanalytiker",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "Sportwissenschaftler mit Expertise in Leistungsanalyse"
      }
    ]
  }
};

const Staff = () => {
  const { language } = useTranslation();
  const content = translations[language];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-primary mr-2" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {content.title}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {content.subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-muted-foreground">{member.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;