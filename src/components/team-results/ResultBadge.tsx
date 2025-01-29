import React from "react";
import { TeamResult } from "./types";

interface ResultBadgeProps {
  result: TeamResult["result"];
}

const ResultBadge = ({ result }: ResultBadgeProps) => {
  const getResultColor = (result: TeamResult["result"]) => {
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
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getResultColor(result)}`}>
      {result}
    </span>
  );
};

export default ResultBadge;