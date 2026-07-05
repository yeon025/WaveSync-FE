import Image from "next/image";

import ResonatorInfo from "@/components/resonator-detail/ResonatorInfo";
import Sidebar from "@/components/common/Sidebar";
import WeaponCard from "@/components/resonator-detail/WeaponCard";
import ResonanceChain from "@/components/resonator-detail/ResonanceChain";

const resonator = {
  userResonatorId: 4,
  resonatorName: "구원",
  element: "aero",
  standingImageUrl: "/images/standings/구원-standing.png",
  resonanceChainLevel: 4,
  weapon: {
    name: "푸른 의지",
    attackValue: 587,
    main: {
      type: "critical_rate",
      value: 24.3,
    },
    refineLevel: 1,
    imageUrl: "/images/weapons/푸른 의지.png",
  },
  stat: {
    hp: 12354,
    attack: 154,
    defense: 124,
    energyRegen: 110,
    criticalRate: 70,
    criticalDamage: 305,
    resonanceSkillDamageBonus: 50,
    basicAttackDamageBonus: 12,
    heavyAttackDamageBonus: 10,
    resonanceLiberationDamageBonus: 10,
    glacioDamageBonus: 70,
    fusionDamageBonus: 0,
    conductoDamageBonus: 0,
    aeroDamageBonus: 0,
    spectraDamageBonus: 0,
    havocDamageBonus: 0,
    healingBonus: 0,
  },
};

export default function Page() {
  return (
    <main className="relative min-h-screen min-w-[1920px]">
      <div className="absolute top-10 left-1/2 flex h-[900px] -translate-x-1/2 items-end justify-center">
        <Image
          src={resonator.standingImageUrl}
          alt={resonator.resonatorName}
          width={718}
          height={1026}
          priority
          className="h-full w-auto select-none"
        />
      </div>

      <ResonatorInfo resonator={resonator} />
      <WeaponCard weapon={resonator.weapon} />
      <ResonanceChain level={resonator.resonanceChainLevel} />

      <Sidebar />
    </main>
  );
}