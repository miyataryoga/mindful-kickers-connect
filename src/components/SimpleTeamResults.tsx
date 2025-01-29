import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/contexts/TranslationContext";
import { useIsMobile } from "@/hooks/use-mobile";

const translations = {
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

const teamResults = {
  U6: [
    { opponent: "Barcelona Academy", result: "Win", score: "3-1" },
    { opponent: "Real Madrid Academy", result: "Win", score: "2-0" },
    { opponent: "Ajax Academy", result: "Draw", score: "1-1" }
  ],
  U8: [
    { opponent: "PSG Academy", result: "Win", score: "4-2" },
    { opponent: "Manchester City Academy", result: "Win", score: "3-0" },
    { opponent: "Bayern Munich Academy", result: "Loss", score: "1-2" }
  ],
  U10: [
    { opponent: "Liverpool Academy", result: "Win", score: "2-1" },
    { opponent: "Chelsea Academy", result: "Win", score: "3-1" },
    { opponent: "Juventus Academy", result: "Win", score: "4-0" }
  ],
  U12: [
    { opponent: "AC Milan Academy", result: "Draw", score: "2-2" },
    { opponent: "Inter Milan Academy", result: "Win", score: "2-0" },
    { opponent: "Roma Academy", result: "Win", score: "3-1" }
  ]
};

const SimpleTeamResults = () => {
  const { language } = useTranslation();
  const [selectedGroup, setSelectedGroup] = React.useState<string>("U6");
  const isMobile = useIsMobile();
  const content = translations[language];

  const getResultColor = (result: string) => {
    switch (result) {
      case "Win":
        return "text-green-600 bg-green-100";
      case "Loss":
        return "text-red-600 bg-red-100";
      case "Draw":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "";
    }
  };

  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.latestResults}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">{content.teamPerformance}</h2>
        </div>

        <Tabs defaultValue="U6" className="w-full" onValueChange={setSelectedGroup}>
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
            <TabsContent key={group} value={group}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg md:text-xl">{`${group} Latest Results`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="whitespace-nowrap">Opponent</TableHead>
                          <TableHead className="whitespace-nowrap">Score</TableHead>
                          <TableHead className="whitespace-nowrap">Result</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {games.map((game, index) => (
                          <TableRow key={index}>
                            <TableCell className="whitespace-nowrap">{game.opponent}</TableCell>
                            <TableCell className="whitespace-nowrap">{game.score}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getResultColor(game.result)}`}>
                                {game.result}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
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