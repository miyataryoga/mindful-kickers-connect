export interface TeamResult {
  opponent: string;
  result: "Win" | "Loss" | "Draw";
  score: string;
  date: string;
}

export interface TeamResultsData {
  [key: string]: TeamResult[];
}

export interface Translations {
  latestResults: string;
  teamPerformance: string;
}