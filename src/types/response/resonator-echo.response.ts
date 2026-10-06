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

interface EchoListData {
  echoes: ResonatorEcho[];
  echoAnalysis: string | null;
}

type ResonatorEchoResponse = ApiResponse<EchoListData>;
