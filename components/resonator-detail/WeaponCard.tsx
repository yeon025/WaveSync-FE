import Image from "next/image";
import StatBox from "@/components/common/StatBox";


interface WeaponCardProps {
  weapon: {
    name: string;
    attackValue: number;
    refineLevel: number;
    imageUrl: string;
    main: {
      type: string;
      value: number;
    };
  };
}

const statLabels: Record<string, string> = {
  hp: "HP",
  attack: "공격력",
  defense: "방어력",
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

export default function WeaponCard({
  weapon,
}: WeaponCardProps) {
  return (
    <section
      aria-label="무기 정보"
      className="w-full max-w-[480px]"
    >
      <div className="flex gap-5">
        {/* 무기 이미지 */}
        <div className="shrink-0">
          <Image
            src={weapon.imageUrl}
            alt={`${weapon.name} 무기 이미지`}
            width={150}
            height={150}
            className="
              h-[110px]
              w-[110px]
              object-contain
              lg:h-[150px]
              lg:w-[150px]
            "
          />
        </div>

        {/* 우측 정보 */}
        <div className="flex flex-1 flex-col">
          {/* 이름 */}
          <h2 className="text-xl leading-tight lg:text-2xl">
            {weapon.name}
          </h2>

          {/* 레벨 + 재련 */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>
              <span className="text-lg font-medium lg:text-xl">
                Lv. 90
              </span>
              <span className="text-sm lg:text-base">
                {" "}
                / 90
              </span>
            </p>

            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/images/star-node.png"
                  alt={`재련 단계 ${index + 1}`}
                  width={28}
                  height={28}
                  className={`${
                    index < weapon.refineLevel
                      ? ""
                      : "grayscale brightness-75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 스탯 */}
          <div className="mt-4 flex flex-col gap-2">
            <StatBox
              label="공격력"
              value={weapon.attackValue}
            />

            <StatBox
              label={
                statLabels[weapon.main.type] ??
                weapon.main.type
              }
              value={`${weapon.main.value}%`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}