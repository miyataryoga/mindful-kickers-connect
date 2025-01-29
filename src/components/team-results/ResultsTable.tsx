import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ResultBadge from "./ResultBadge";
import { TeamResult } from "./types";

interface ResultsTableProps {
  results: TeamResult[];
}

const ResultsTable = ({ results }: ResultsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Date</TableHead>
            <TableHead className="whitespace-nowrap">Opponent</TableHead>
            <TableHead className="whitespace-nowrap">Score</TableHead>
            <TableHead className="whitespace-nowrap">Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((game, index) => (
            <TableRow key={index}>
              <TableCell className="whitespace-nowrap">
                {new Date(game.date).toLocaleDateString()}
              </TableCell>
              <TableCell className="whitespace-nowrap">{game.opponent}</TableCell>
              <TableCell className="whitespace-nowrap">{game.score}</TableCell>
              <TableCell>
                <ResultBadge result={game.result} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;