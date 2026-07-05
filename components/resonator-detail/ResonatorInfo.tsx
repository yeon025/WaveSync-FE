import Image from "next/image";
import StatBox from "@/components/common/StatBox";

interface ResonatorInfoProps {
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

export default function ResonatorInfo({ resonator }: ResonatorInfoProps) {
  return (
    <section
      aria-label="캐릭터 개요"
      className="w-full"
    >
      <header className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <Image
            src={`/images/elements/${resonator.element}.png`}
            alt={resonator.element}
            width={60}
            height={60}
            className="
              h-12
              w-12
              shrink-0
              lg:h-[60px]
              lg:w-[60px]
            "
          />

          <h2
            className="
              text-right
              text-3xl
              leading-tight
              lg:text-[40px]
            "
          >
            {resonator.resonatorName}
          </h2>
        </div>

        <p className="ml-1 lg:ml-4">
          <span className="text-xl font-medium lg:text-2xl">
            Lv. 90 
          </span>

          <span className="text-base lg:text-xl">
            {" "}
            / 90
          </span>
        </p>
      </header>

      {/* 구분선 */}
      <div className="my-4 border-t-2 border-[#848484]" />

      {/* 스탯 */}
      <div className="flex flex-col gap-1">
        {Object.entries(resonator.stat).map(([key, value]) => (
          <StatBox
            key={key}
            label={statLabels[key]}
            value={
              key === "hp" || key === "attack" || key === "defense"
                ? value : `${value} %`
            }
          />
        ))}
      </div>
    </section>
  );
}