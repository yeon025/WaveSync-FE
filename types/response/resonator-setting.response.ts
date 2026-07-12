interface ResonatorSettingResponse {
  nodes: ResonanceNode[];
  weapon: {
    refineLevel: number;
    refineType: string | null;
    refine1Value: number | null;
    refine2Value: number | null;
    refine3Value: number | null;
    refine4Value: number | null;
    refine5Value: number | null;
    imageUrl: string;
  };
}
