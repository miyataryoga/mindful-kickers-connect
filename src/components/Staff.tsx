import React from "react";
import { motion } from "framer-motion";
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
        bio: "A visionary leader and strategic innovator in sports management, renowned for transforming athletic programs. He brings revolutionary training methodologies that seamlessly blend Eastern discipline with Western performance techniques, creating a unique development system that consistently produces exceptional results."
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
        image: "/lovable-uploads/03050963-6d58-4d5f-ac6a-7204e586ef91.png",
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
        bio: "スポーツマネジメントにおける先見性のあるリーダーであり、戦略的イノベーター。アスレチックプログラムの変革で知られ、東洋の規律と西洋のパフォーマンス技術を見事に融合した革新的なトレーニング方法論を導入。一貫して卓越した結果を生み出すユニークな育成システムを確立しています。"
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
        image: "/lovable-uploads/03050963-6d58-4d5f-ac6a-7204e586ef91.png",
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
        bio: "Ein visionärer Führungskraft und strategischer Innovator im Sportmanagement, bekannt für die Transformation von Athletikprogrammen. Er bringt revolutionäre Trainingsmethoden mit, die östliche Disziplin nahtlos mit westlichen Leistungstechniken verbinden und ein einzigartiges Entwicklungssystem schaffen, das konsequent außergewöhnliche Ergebnisse liefert."
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
        image: "/lovable-uploads/03050963-6d58-4d5f-ac6a-7204e586ef91.png",
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
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
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