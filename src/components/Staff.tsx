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
        name: "Hokuto Kondo",
        position: "Representative",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "A visionary leader with a proven track record in sports management. He brings innovative training methodologies and a deep understanding of both Eastern and Western sporting philosophies."
      },
      {
        name: "Matthew Freeman",
        position: "Head Coach",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "An elite FA licensed coach with a remarkable track record of nurturing young talent into professional stars. His innovative training methods and deep understanding of modern football have transformed countless players, while his leadership style creates an environment where excellence thrives."
      },
      {
        name: "Ryan Miyata",
        position: "Performance Analyst",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "A pioneering force in sports analytics, combining cutting-edge technology with deep tactical understanding. His innovative approach to performance analysis has revolutionized training methodologies and player development, leading to significant improvements in both individual and team performance metrics."
      }
    ]
  },
  ja: {
    title: "スタッフ紹介",
    subtitle: "成功を支えるチーム",
    staff: [
      {
        name: "近藤白兎",
        position: "代表",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "スポーツマネジメントにおける先見性のあるリーダー。エリートアスリートの育成に10年以上の経験を持ち、東洋と西洋のスポーツ哲学への深い理解と革新的なトレーニング方法論を提供しています。"
      },
      {
        name: "マシュー・フリーマン",
        position: "ヘッドコーチ",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "UEFA プロライセンスを持つエリートコーチとして、若い才能をプロフェッショナルな選手へと育成してきた輝かしい実績を持つ。革新的なトレーニング方法と現代サッカーへの深い理解により、数多くの選手を変革し、卓越性が育つ環境づくりにおいても優れたリーダーシップを発揮している。"
      },
      {
        name: "ライアン・ミヤタ",
        position: "パフォーマンスアナリスト",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "スポーツアナリティクスの先駆者として、最先端のテクノロジーと戦術的な深い理解を組み合わせる。革新的なパフォーマンス分析アプローチにより、トレーニング方法論と選手育成を革新し、個人とチームの両方のパフォーマンス指標で顕著な向上を実現している。"
      }
    ]
  },
  de: {
    title: "Unser Team",
    subtitle: "Lernen Sie das Team hinter unserem Erfolg kennen",
    staff: [
      {
        name: "Hokuto Kondo",
        position: "Repräsentant",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        bio: "Ein visionärer Führungskraft mit nachgewiesener Erfolgsbilanz im Sportmanagement. Mit über einem Jahrzehnt Erfahrung in der Entwicklung von Elitesportlern bringt Hakuto innovative Trainingsmethoden und ein tiefes Verständnis sowohl östlicher als auch westlicher Sportphilosophien mit."
      },
      {
        name: "Matthew Freeman",
        position: "Cheftrainer",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        bio: "Ein Elite-UEFA-Pro-lizenzierter Trainer mit einer bemerkenswerten Erfolgsbilanz in der Entwicklung junger Talente zu Profistars. Seine innovativen Trainingsmethoden und sein tiefes Verständnis des modernen Fußballs haben unzählige Spieler transformiert, während sein Führungsstil ein Umfeld schafft, in dem Exzellenz gedeiht."
      },
      {
        name: "Ryan Miyata",
        position: "Leistungsanalytiker",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        bio: "Eine Pionierkraft in der Sportanalytik, die modernste Technologie mit tiefem taktischem Verständnis verbindet. Sein innovativer Ansatz zur Leistungsanalyse hat Trainingsmethoden und Spielerentwicklung revolutioniert und zu signifikanten Verbesserungen sowohl der individuellen als auch der Team-Leistungsmetriken geführt."
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