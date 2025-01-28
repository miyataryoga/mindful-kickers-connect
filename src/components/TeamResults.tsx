import React from "react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Trophy, Calendar, Users, Goal, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
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

const teamResults = [
  {
    group: "U6",
    wins: 12,
    draws: 3,
    losses: 1,
    goalsFor: 45,
    goalsAgainst: 12,
    position: 1,
    details: {
      topScorer: "Alex Smith",
      matchesPlayed: 16,
      cleanSheets: 8,
      nextMatch: "vs Barcelona Academy",
      trainingDays: "Monday, Wednesday, Friday",
      averageAttendance: "95%"
    }
  },
  {
    group: "U8",
    wins: 14,
    draws: 2,
    losses: 2,
    goalsFor: 52,
    goalsAgainst: 15,
    position: 2,
    details: {
      topScorer: "James Wilson",
      matchesPlayed: 18,
      cleanSheets: 10,
      nextMatch: "vs Real Madrid Academy",
      trainingDays: "Tuesday, Thursday, Saturday",
      averageAttendance: "92%"
    }
  },
  {
    group: "U10",
    wins: 15,
    draws: 1,
    losses: 2,
    goalsFor: 48,
    goalsAgainst: 14,
    position: 1,
    details: {
      topScorer: "Michael Brown",
      matchesPlayed: 18,
      cleanSheets: 11,
      nextMatch: "vs Ajax Academy",
      trainingDays: "Monday, Wednesday, Friday",
      averageAttendance: "94%"
    }
  },
  {
    group: "U12",
    wins: 13,
    draws: 4,
    losses: 1,
    goalsFor: 50,
    goalsAgainst: 16,
    position: 1,
    details: {
      topScorer: "David Lee",
      matchesPlayed: 18,
      cleanSheets: 9,
      nextMatch: "vs PSG Academy",
      trainingDays: "Tuesday, Thursday, Saturday",
      averageAttendance: "96%"
    }
  }
];

const TeamResults = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>(teamResults[0].group);
  const { language } = useTranslation();
  const content = translations[language];
  const navigate = useNavigate();
  const location = useLocation();
  const isResultsPage = location.pathname === '/results';

  const selectedTeam = teamResults.find(team => team.group === selectedGroup);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {content.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{content.subtitle}</h2>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <Select
            value={selectedGroup}
            onValueChange={(value) => setSelectedGroup(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={content.selectGroup} />
            </SelectTrigger>
            <SelectContent>
              {teamResults.map((team) => (
                <SelectItem key={team.group} value={team.group}>
                  {team.group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {!isResultsPage && (
            <Button
              onClick={() => navigate('/results')}
              variant="outline"
              className="gap-2"
            >
              View All Results
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <ChartBar className="h-5 w-5 text-primary" />
                <CardTitle>{content.seasonPerformance}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Age Group</TableHead>
                    <TableHead className="text-right">{content.position}</TableHead>
                    <TableHead className="text-right">{content.wins}</TableHead>
                    <TableHead className="text-right">{content.draws}</TableHead>
                    <TableHead className="text-right">{content.losses}</TableHead>
                    <TableHead className="text-right">{content.goalsFor}</TableHead>
                    <TableHead className="text-right">{content.goalsAgainst}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isResultsPage ? (
                    teamResults.map((team) => (
                      <TableRow key={team.group}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {team.position === 1 && <Trophy className="h-4 w-4 text-primary" />}
                            {team.group}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            team.position === 1 ? 'bg-primary/10 text-primary' : 'bg-muted'
                          }`}>
                            {team.position}º
                          </span>
                        </TableCell>
                        <TableCell className="text-right">{team.wins}</TableCell>
                        <TableCell className="text-right">{team.draws}</TableCell>
                        <TableCell className="text-right">{team.losses}</TableCell>
                        <TableCell className="text-right font-medium text-primary">{team.goalsFor}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{team.goalsAgainst}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    selectedTeam && (
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {selectedTeam.position === 1 && <Trophy className="h-4 w-4 text-primary" />}
                            {selectedTeam.group}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            selectedTeam.position === 1 ? 'bg-primary/10 text-primary' : 'bg-muted'
                          }`}>
                            {selectedTeam.position}º
                          </span>
                        </TableCell>
                        <TableCell className="text-right">{selectedTeam.wins}</TableCell>
                        <TableCell className="text-right">{selectedTeam.draws}</TableCell>
                        <TableCell className="text-right">{selectedTeam.losses}</TableCell>
                        <TableCell className="text-right font-medium text-primary">{selectedTeam.goalsFor}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{selectedTeam.goalsAgainst}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {selectedTeam && (
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>{content.teamDetails}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Goal className="h-4 w-4 text-primary" />
                    <span className="font-medium">{content.topScorer}:</span>
                    <span>{selectedTeam.details.topScorer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{content.trainingDays}:</span>
                    <span>{selectedTeam.details.trainingDays}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">{content.matchesPlayed}:</span>
                      <p className="text-2xl font-bold text-primary">{selectedTeam.details.matchesPlayed}</p>
                    </div>
                    <div>
                      <span className="font-medium">{content.cleanSheets}:</span>
                      <p className="text-2xl font-bold text-primary">{selectedTeam.details.cleanSheets}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">{content.nextMatch}:</span>
                    <p className="text-sm text-muted-foreground">{selectedTeam.details.nextMatch}</p>
                  </div>
                  <div>
                    <span className="font-medium">{content.averageAttendance}:</span>
                    <p className="text-sm text-primary font-medium">{selectedTeam.details.averageAttendance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamResults;