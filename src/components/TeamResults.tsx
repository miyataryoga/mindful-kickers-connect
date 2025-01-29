import React from "react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Trophy, Calendar, Users, Goal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const translations = {
  en: {
    title: "Performance Metrics",
    subtitle: "Team Statistics",
    selectGroup: "Select age group",
    seasonPerformance: "Season Performance",
    teamDetails: "Team Details",
    position: "Position",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    goalsFor: "GF",
    goalsAgainst: "GA",
    topScorer: "Top Scorer",
    trainingDays: "Training Days",
    matchesPlayed: "Matches Played",
    cleanSheets: "Clean Sheets",
    nextMatch: "Next Match",
    averageAttendance: "Average Attendance"
  },
  ja: {
    title: "パフォーマンス指標",
    subtitle: "チーム統計",
    selectGroup: "年齢グループを選択",
    seasonPerformance: "シーズン成績",
    teamDetails: "チーム詳細",
    position: "順位",
    wins: "勝",
    draws: "分",
    losses: "敗",
    goalsFor: "得点",
    goalsAgainst: "失点",
    topScorer: "得点王",
    trainingDays: "練習日",
    matchesPlayed: "試合数",
    cleanSheets: "クリーンシート",
    nextMatch: "次の試合",
    averageAttendance: "平均出席率"
  },
  de: {
    title: "Leistungskennzahlen",
    subtitle: "Team-Statistiken",
    selectGroup: "Altersgruppe auswählen",
    seasonPerformance: "Saisonleistung",
    teamDetails: "Team-Details",
    position: "Position",
    wins: "Siege",
    draws: "Unentschieden",
    losses: "Niederlagen",
    goalsFor: "Tore",
    goalsAgainst: "Gegentore",
    topScorer: "Torschützenkönig",
    trainingDays: "Trainingstage",
    matchesPlayed: "Gespielte Spiele",
    cleanSheets: "Zu-Null-Spiele",
    nextMatch: "Nächstes Spiel",
    averageAttendance: "Durchschnittliche Anwesenheit"
  }
};

const teamResults = {
  U6: [
    {
      opponent: "Barcelona Academy",
      date: "2024-01-15",
      result: "Win",
      score: "3-1",
      location: "Home"
    },
    {
      opponent: "Real Madrid Academy",
      date: "2024-01-22",
      result: "Win",
      score: "2-0",
      location: "Away"
    },
    {
      opponent: "Ajax Academy",
      date: "2024-01-29",
      result: "Draw",
      score: "1-1",
      location: "Home"
    }
  ],
  U8: [
    {
      opponent: "PSG Academy",
      date: "2024-01-14",
      result: "Win",
      score: "4-2",
      location: "Away"
    },
    {
      opponent: "Manchester City Academy",
      date: "2024-01-21",
      result: "Win",
      score: "3-0",
      location: "Home"
    },
    {
      opponent: "Bayern Munich Academy",
      date: "2024-01-28",
      result: "Loss",
      score: "1-2",
      location: "Away"
    }
  ],
  U10: [
    {
      opponent: "Liverpool Academy",
      date: "2024-01-16",
      result: "Win",
      score: "2-1",
      location: "Home"
    },
    {
      opponent: "Chelsea Academy",
      date: "2024-01-23",
      result: "Win",
      score: "3-1",
      location: "Away"
    },
    {
      opponent: "Juventus Academy",
      date: "2024-01-30",
      result: "Win",
      score: "4-0",
      location: "Home"
    }
  ],
  U12: [
    {
      opponent: "AC Milan Academy",
      date: "2024-01-17",
      result: "Draw",
      score: "2-2",
      location: "Away"
    },
    {
      opponent: "Inter Milan Academy",
      date: "2024-01-24",
      result: "Win",
      score: "2-0",
      location: "Home"
    },
    {
      opponent: "Roma Academy",
      date: "2024-01-31",
      result: "Win",
      score: "3-1",
      location: "Away"
    }
  ]
};

interface TeamResultsProps {
  showAllResults?: boolean;
}

const TeamResults = ({ showAllResults = false }: TeamResultsProps) => {
  const [selectedGroup, setSelectedGroup] = React.useState<string>("U6");
  const { language } = useTranslation();
  const content = translations[language];
  const location = useLocation();
  const isResultsPage = location.pathname === '/results';

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

  const getDisplayResults = (results: typeof teamResults[keyof typeof teamResults]) => {
    if (showAllResults) {
      return results;
    }
    return results.slice(0, 3);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{content.subtitle}</h2>
        </div>

        <Tabs defaultValue="U6" className="w-full" onValueChange={setSelectedGroup}>
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(teamResults).map((group) => (
              <TabsTrigger key={group} value={group}>
                {group}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(teamResults).map(([group, games]) => (
            <TabsContent key={group} value={group}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <CardTitle>{`${group} ${showAllResults ? 'All Results' : 'Latest Results'}`}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Opponent</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Result</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getDisplayResults(games).map((game, index) => (
                          <TableRow key={index}>
                            <TableCell>{new Date(game.date).toLocaleDateString()}</TableCell>
                            <TableCell>{game.opponent}</TableCell>
                            <TableCell>{game.location}</TableCell>
                            <TableCell>{game.score}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getResultColor(game.result)}`}>
                                {game.result}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TeamResults;
