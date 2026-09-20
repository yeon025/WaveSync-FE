interface ResonatorEcho {
  name: string;
  imageUrl: string;
  main: EchoStat;
  secondary: EchoStat;
  subs: EchoStat[];
}

type ResonatorEchoResponse = ApiResponse<ResonatorEcho[]>;
