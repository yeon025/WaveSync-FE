import Image from "next/image";
import StatBox from "@/components/common/StatBox";

interface Props {
  resonator: {
    resonatorName: string;
    element: string;
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
  };
}

const statLabels: Record<string, string> = {
  hp: "HP",
  attack: "공격력",
  defense: "방어력",
  energyRegen: "공명 효율",
  criticalRate: "크리티컬",
  criticalDamage: "크리티컬 피해",
  resonanceSkillDamageBonus: "공명 스킬 피해 보너스",
  basicAttackDamageBonus: "일반 공격 피해 보너스",
  heavyAttackDamageBonus: "강공격 피해 보너스",
  resonanceLiberationDamageBonus: "공명 해방 피해 보너스",
  glacioDamageBonus: "응결 피해 보너스",
  fusionDamageBonus: "융융 피해 보너스",
  conductoDamageBonus: "전도 피해 보너스",
  aeroDamageBonus: "기류 피해 보너스",
  spectraDamageBonus: "회절 피해 보너스",
  havocDamageBonus: "인멸 피해 보너스",
  healingBonus: "치료 효과 보너스",
};

export default function ResonatorInfo({ resonator }: Props) {
  return (
    <section className="flex w-full flex-col">
      <div className="flex items-start justify-between">
        <Image
          src={`/images/elements/${resonator.element}.png`}
          alt={resonator.element}
          width={60}
          height={60}
          className="h-[clamp(40px,3.2vw,60px)] w-[clamp(40px,3.2vw,60px)]"
        />

        <h2 className="self-center text-right text-[clamp(24px,2vw,36px)]">
          {resonator.resonatorName}
        </h2>
      </div>

      <p className="mt-[0.5vh] ml-[clamp(4px,0.8vw,16px)]">
        <span className="text-[clamp(16px,1.2vw,20px)] font-medium">Lv. 90</span>

        <span className="text-[clamp(12px,1vw,16px)]"> / 90</span>
      </p>

      {/* 구분선 */}
      <div className="my-[1vh] border-t-2 border-[#848484]" />

      {/* 스탯 */}
      <div className="flex flex-col gap-[0.5vh]">
        {Object.entries(resonator.stat)
          .filter(([, value]) => value !== 0)
          .map(([key, value]) => (
            <StatBox
              key={key}
              label={statLabels[key]}
              value={key === "hp" || key === "attack" || key === "defense" ? value : `${value} %`}
            />
          ))}
      </div>
    </section>
  );
}
