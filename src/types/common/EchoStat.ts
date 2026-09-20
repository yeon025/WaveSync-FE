type EchoStatType =
  | "attack"
  | "attack_percent"
  | "hp"
  | "hp_percent"
  | "defense"
  | "defense_percent"
  | "critical_rate"
  | "critical_damage"
  | "energy_regen"
  | "resonance_skill_damage_bonus"
  | "basic_attack_damage_bonus"
  | "heavy_attack_damage_bonus"
  | "resonance_liberation_damage_bonus"
  | "glacio_damage_bonus"
  | "fusion_damage_bonus"
  | "conducto_damage_bonus"
  | "aero_damage_bonus"
  | "spectra_damage_bonus"
  | "havoc_damage_bonus"
  | "healing_bonus";

interface EchoStat {
  type: EchoStatType;
  value: number;
}
