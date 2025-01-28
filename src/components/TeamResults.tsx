import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Trophy } from "lucide-react";

const teamResults = [
  {
    group: "U6",
    wins: 12,
    draws: 3,
    losses: 1,
    goalsFor: 45,
    goalsAgainst: 12,
    position: 1
  },
  {
    group: "U8",
    wins: 14,
    draws: 2,
    losses: 2,
    goalsFor: 52,
    goalsAgainst: 15,
    position: 2
  },
  {
    group: "U10",
    wins: 15,
    draws: 1,
    losses: 2,
    goalsFor: 48,
    goalsAgainst: 14,
    position: 1
  },
  {
    group: "U12",
    wins: 13,
    draws: 4,
    losses: 1,
    goalsFor: 50,
    goalsAgainst: 16,
    position: 1
  }
];

const TeamResults = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Team Statistics</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                  {teamResults.map((team) => (
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
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamResults;