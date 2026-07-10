import Image from "next/image";
import StatBox from "@/components/common/StatBox";

interface Props {
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
}

const statLabels: Record<string, string> = {
  hp_percent: "HP",
  attack_percent: "공격력",
  defense_percent: "방어력",
  energy_regen: "공명 효율",
  critical_rate: "크리티컬",
  critical_damage: "크리티컬 피해",
  resonance_skill_damage_bonus: "공명 스킬 피해 보너스",
  basic_attack_damage_bonus: "기본 공격 피해 보너스",
  heavy_attack_damage_bonus: "강공격 피해 보너스",
  resonance_liberation_damage_bonus: "공명 해방 피해 보너스",
  glacio_damage_bonus: "응결 피해 보너스",
  fusion_damage_bonus: "융융 피해 보너스",
  conducto_damage_bonus: "전도 피해 보너스",
  aero_damage_bonus: "기류 피해 보너스",
  spectra_damage_bonus: "회절 피해 보너스",
  havoc_damage_bonus: "인멸 피해 보너스",
  healing_bonus: "치료 효과 보너스",
};

export default function WeaponCard({ weapon }: Props) {
  return (
    <section className="w-full">
      <div className="flex justify-center gap-[clamp(12px,1.5vw,24px)]">
        {/* 무기 이미지 */}
        <Image
          src={weapon.imageUrl}
          alt={`${weapon.name} 무기 이미지`}
          width={135}
          height={135}
          className="h-[clamp(80px,7vw,135px)] w-[clamp(80px,7vw,135px)] object-contain"
        />

        {/* 우측 정보 */}
        <div className="flex flex-1 flex-col">
          {/* 이름 */}
          <h2 className="text-[clamp(16px,1.4vw,24px)]">{weapon.name}</h2>

          {/* 레벨 + 재련 */}
          <div className="mt-[clamp(4px,0.5vh,8px)] flex flex-wrap justify-between">
            <p>
              <span className="text-[clamp(16px,1.2vw,20px)] font-medium">Lv. 90</span>

              <span className="text-[clamp(12px,1vw,16px)]"> / 90</span>
            </p>

            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src={
                    index < weapon.refineLevel ? "/star-node-active.svg" : "/star-node-deactive.svg"
                  }
                  alt={`공명 체인 ${index + 1}`}
                  width={28}
                  height={28}
                  className="h-[clamp(16px,1.5vw,28px)] w-[clamp(16px,1.5vw,28px)]"
                />
              ))}
            </div>
          </div>

          {/* 스탯 */}
          <div className="mt-[clamp(4px,0.5vh,8px)] flex flex-col gap-[clamp(2px,0.3vh,6px)]">
            <StatBox label="공격력" value={weapon.attackValue} />

            <StatBox
              label={statLabels[weapon.main.type] ?? weapon.main.type}
              value={`${weapon.main.value}%`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
