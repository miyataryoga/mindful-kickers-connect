import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const teamResults = [
  {
    group: "U6",
    wins: 12,
    draws: 3,
    losses: 1,
    goalsFor: 45,
    goalsAgainst: 12
  },
  {
    group: "U8",
    wins: 14,
    draws: 2,
    losses: 2,
    goalsFor: 52,
    goalsAgainst: 15
  },
  {
    group: "U10",
    wins: 15,
    draws: 1,
    losses: 2,
    goalsFor: 48,
    goalsAgainst: 14
  },
  {
    group: "U12",
    wins: 13,
    draws: 4,
    losses: 1,
    goalsFor: 50,
    goalsAgainst: 16
  }
];

const TeamResults = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Team Performance</h2>
        <p className="text-muted-foreground">Current season statistics for our youth teams</p>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Age Group</TableHead>
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
                <TableCell className="font-medium">{team.group}</TableCell>
                <TableCell className="text-right">{team.wins}</TableCell>
                <TableCell className="text-right">{team.draws}</TableCell>
                <TableCell className="text-right">{team.losses}</TableCell>
                <TableCell className="text-right">{team.goalsFor}</TableCell>
                <TableCell className="text-right">{team.goalsAgainst}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TeamResults;