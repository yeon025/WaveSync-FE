interface ResonatorDetailResponse {
  userResonatorId: number;
  resonatorName: string;
  element: string;
  standingImageUrl: string;
  resonanceChainLevel: number;
  weapon: {
    name: string;
    attackValue: number;
    main: {
      type: string;
      value: number;
    };
    refineLevel: number;
    imageUrl: string;
  };
  stat: {
    hp: number;
    attack: number;
    defense: number;
    energyRegen: number;
    criticalRate: number;
    criticalDamage: number;

    resonanceSkillDamageBonus: number;
    basicAttackDamageBonus: number;
    heavyAttackDamageBonus: number;
    resonanceLiberationDamageBonus: number;

    glacioDamageBonus: number;
    fusionDamageBonus: number;
    conductoDamageBonus: number;
    aeroDamageBonus: number;
    spectraDamageBonus: number;
    havocDamageBonus: number;

    healingBonus: number;
  };
}
