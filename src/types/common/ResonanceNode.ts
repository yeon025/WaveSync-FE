interface ResonanceNode {
  branchPosition: "left_outer" | "left_inner" | "center" | "right_inner" | "right_outer";
  nodePosition: "top" | "middle";
  active: boolean;
  stat: {
    type: string;
    value: number;
  } | null;
}
