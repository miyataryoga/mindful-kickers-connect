import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Trophy, Calendar, Users, Goal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

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

  const selectedTeam = teamResults.find(team => team.group === selectedGroup);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Team Statistics</h2>
        </div>

        <div className="mb-8">
          <Select
            value={selectedGroup}
            onValueChange={(value) => setSelectedGroup(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              {teamResults.map((team) => (
                <SelectItem key={team.group} value={team.group}>
                  {team.group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
                <CardTitle>Season Performance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Age Group</TableHead>
                    <TableHead className="text-right">Position</TableHead>
                    <TableHead className="text-right">Wins</TableHead>
                    <TableHead className="text-right">Draws</TableHead>
                    <TableHead className="text-right">Losses</TableHead>
                    <TableHead className="text-right">GF</TableHead>
                    <TableHead className="text-right">GA</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedTeam && (
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
                  <CardTitle>Team Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Goal className="h-4 w-4 text-primary" />
                    <span className="font-medium">Top Scorer:</span>
                    <span>{selectedTeam.details.topScorer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Training Days:</span>
                    <span>{selectedTeam.details.trainingDays}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Matches Played:</span>
                      <p className="text-2xl font-bold text-primary">{selectedTeam.details.matchesPlayed}</p>
                    </div>
                    <div>
                      <span className="font-medium">Clean Sheets:</span>
                      <p className="text-2xl font-bold text-primary">{selectedTeam.details.cleanSheets}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Next Match:</span>
                    <p className="text-sm text-muted-foreground">{selectedTeam.details.nextMatch}</p>
                  </div>
                  <div>
                    <span className="font-medium">Average Attendance:</span>
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