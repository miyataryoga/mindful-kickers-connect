import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/contexts/TranslationContext";
import ResultsTable from "./team-results/ResultsTable";
import { TeamResultsData, Translations } from "./team-results/types";

const translations: Record<string, Translations> = {
  en: {
    latestResults: "Latest Results",
    teamPerformance: "[Example] Team Performance"
  },
  ja: {
    latestResults: "最新の結果",
    teamPerformance: "[例] チームパフォーマンス"
  },
  de: {
    latestResults: "Neueste Ergebnisse",
    teamPerformance: "[Beispiel] Team Leistung"
  }
};

const teamResults: TeamResultsData = {
  U6: [
    { opponent: "Arsenal Academy", result: "Draw", score: "3-3", date: "2024-02-21" },
    { opponent: "Barcelona Academy", result: "Win", score: "3-1", date: "2024-01-15" },
    { opponent: "Real Madrid Academy", result: "Win", score: "2-0", date: "2024-01-22" },
    { opponent: "Ajax Academy", result: "Draw", score: "1-1", date: "2024-01-29" }
  ],
  U8: [
    { opponent: "Atletico Madrid Academy", result: "Win", score: "2-0", date: "2024-02-18" },
    { opponent: "Borussia Dortmund Academy", result: "Draw", score: "2-2", date: "2024-02-11" },
    { opponent: "AC Milan Academy", result: "Win", score: "3-1", date: "2024-02-04" },
    { opponent: "Inter Milan Academy", result: "Loss", score: "1-2", date: "2024-01-28" },
    { opponent: "Lyon Academy", result: "Win", score: "4-0", date: "2024-01-21" },
    { opponent: "Porto Academy", result: "Draw", score: "1-1", date: "2024-01-14" },
    { opponent: "PSG Academy", result: "Win", score: "4-2", date: "2024-01-07" },
    { opponent: "Manchester City Academy", result: "Win", score: "3-0", date: "2023-12-31" },
    { opponent: "Bayern Munich Academy", result: "Loss", score: "1-2", date: "2023-12-24" },
    { opponent: "Ajax Academy", result: "Win", score: "2-0", date: "2023-12-17" },
    { opponent: "Benfica Academy", result: "Draw", score: "2-2", date: "2023-12-10" },
    { opponent: "Monaco Academy", result: "Win", score: "3-1", date: "2023-12-03" },
    { opponent: "Sporting CP Academy", result: "Loss", score: "0-1", date: "2023-11-26" }
  ],
  U10: [
    { opponent: "Liverpool Academy", result: "Win", score: "2-1", date: "2024-01-16" },
    { opponent: "Chelsea Academy", result: "Win", score: "3-1", date: "2024-01-23" },
    { opponent: "Juventus Academy", result: "Win", score: "4-0", date: "2024-01-30" }
  ],
  U12: [
    { opponent: "AC Milan Academy", result: "Draw", score: "2-2", date: "2024-01-17" },
    { opponent: "Inter Milan Academy", result: "Win", score: "2-0", date: "2024-01-24" },
    { opponent: "Roma Academy", result: "Win", score: "3-1", date: "2024-01-31" }
  ]
};

const SimpleTeamResults = () => {
  const { language } = useTranslation();
  const content = translations[language];

  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.latestResults}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">{content.teamPerformance}</h2>
        </div>

        <Tabs defaultValue="U6" className="w-full space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            {Object.keys(teamResults).map((group) => (
              <TabsTrigger 
                key={group} 
                value={group} 
                className="px-2 py-1.5 text-sm md:text-base font-medium"
              >
                {group}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(teamResults).map(([group, games]) => (
            <TabsContent key={group} value={group} className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg md:text-xl">{`${group} Latest Results`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResultsTable results={games} />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SimpleTeamResults;