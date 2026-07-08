interface ResonatorSettingResponse {
  nodes: ResonanceNode[];
  weapon: {
    refineLevel: number;
    refineType: string;
    refine1Value: number;
    refine2Value: number;
    refine3Value: number;
    refine4Value: number;
    refine5Value: number;
    imageUrl: string;
  };
}
