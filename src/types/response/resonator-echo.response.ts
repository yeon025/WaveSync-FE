type EchoGrade = "SS" | "S" | "A" | "B" | "C" | "D";

interface ResonatorEcho {
  name: string;
  imageUrl: string;
  grade: EchoGrade;
  scorePercent: number | null;
  main: EchoStat;
  secondary: EchoStat;
  subs: EchoStat[];
}

type ResonatorEchoResponse = ApiResponse<ResonatorEcho[]>;
